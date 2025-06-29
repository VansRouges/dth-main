import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

const STORAGE_BUCKET = "course-content";

export const uploadCourseVideo = async (
  file: File
): Promise<{ url: string | null; error: Error | null }> => {
  try {
    // Generate unique file name with timestamp
    const fileName = `course-videos/${Date.now()}-${file.name.replace(/\s+/g, '-')}`;

    // Upload the file
    const { error } = await supabase.storage
      .from(STORAGE_BUCKET)
      .upload(fileName, file, {
        cacheControl: '3600',
        upsert: false,
      });

    if (error) throw error;

    // Get the public URL
    const { data: { publicUrl } } = supabase.storage
      .from(STORAGE_BUCKET)
      .getPublicUrl(fileName);

    return { url: publicUrl, error: null };
  } catch (error) {
    console.error("Error uploading video:", error);
    return { url: null, error: error as Error };
  }
};