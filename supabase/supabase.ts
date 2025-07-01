import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false,
  },
});

const STORAGE_BUCKET = "course-content";

export const uploadDirectToSupabase = async (
  file: File,
  onProgress?: (percentage: number) => void
): Promise<{ url: string | null; error: Error | null }> => {
  try {
    const fileName = `course-videos/${Date.now()}-${file.name.replace(/\s+/g, '-')}`;
    
    // Create a custom upload implementation with progress tracking
    const { error } = await uploadWithProgress(
      file,
      fileName,
      onProgress
    );

    if (error) throw error;

    const { data: { publicUrl } } = supabase.storage
      .from(STORAGE_BUCKET)
      .getPublicUrl(fileName);

    return { url: publicUrl, error: null };
  } catch (error) {
    console.error("Upload error:", error);
    return { url: null, error: error as Error };
  }
};

// Custom upload function with progress tracking
async function uploadWithProgress(
  file: File,
  fileName: string,
  onProgress?: (percentage: number) => void
) {
  return new Promise<{ error: Error | null }>((resolve) => {
    const xhr = new XMLHttpRequest();
    const formData = new FormData();
    formData.append('file', file);

    // Get upload URL from Supabase
    supabase.storage
      .from(STORAGE_BUCKET)
      .createSignedUploadUrl(fileName)
      .then(({ data: signedUrlData, error: signedError }) => {
        if (signedError || !signedUrlData?.signedUrl) {
          resolve({ error: signedError || new Error('No signed URL') });
          return;
        }

        xhr.open('PUT', signedUrlData.signedUrl, true);
        xhr.setRequestHeader('Authorization', `Bearer ${supabaseAnonKey}`);
        xhr.setRequestHeader('x-upsert', 'false');

        // Progress tracking
        xhr.upload.onprogress = (event) => {
          if (event.lengthComputable && onProgress) {
            const percent = Math.round((event.loaded / event.total) * 100);
            onProgress(percent);
          }
        };

        xhr.onload = () => {
          if (xhr.status >= 200 && xhr.status < 300) {
            resolve({ error: null });
          } else {
            resolve({ error: new Error('Upload failed') });
          }
        };

        xhr.onerror = () => {
          resolve({ error: new Error('Network error') });
        };

        xhr.send(file);
      });
  });
}