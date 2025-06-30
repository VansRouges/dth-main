import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

const STORAGE_BUCKET = "course-content";

export const uploadCourseVideo = async (
  file: File,
  onProgress?: (percentage: number) => void
): Promise<{ url: string | null; error: Error | null }> => {
  try {
    const fileName = `course-videos/${Date.now()}-${file.name.replace(/\s+/g, '-')}`;
    const filePath = `${fileName}`;
    
    // Get signed upload URL from your backend
    const { data: signedUrlData, error: signedUrlError } = await supabase
      .functions
      .invoke('generate-upload-url', {
        body: { path: filePath, contentType: file.type }
      });

    if (signedUrlError || !signedUrlData?.signedUrl) {
      throw signedUrlError || new Error('Failed to get signed URL');
    }

    // Upload using fetch with progress tracking
    const xhr = new XMLHttpRequest();
    xhr.open('PUT', signedUrlData.signedUrl, true);
    xhr.setRequestHeader('Content-Type', file.type);

    return new Promise((resolve, reject) => {
      xhr.upload.onprogress = (event) => {
        if (event.lengthComputable && onProgress) {
          const percentage = Math.round((event.loaded / event.total) * 100);
          onProgress(percentage);
        }
      };

      xhr.onload = async () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          // Get public URL after successful upload
          const { data: { publicUrl } } = supabase.storage
            .from(STORAGE_BUCKET)
            .getPublicUrl(filePath);
          
          resolve({ url: publicUrl, error: null });
        } else {
          reject(new Error('Upload failed'));
        }
      };

      xhr.onerror = () => {
        reject(new Error('Upload failed'));
      };

      xhr.send(file);
    });
  } catch (error) {
    console.error("Error uploading video:", error);
    return { url: null, error: error as Error };
  }
};