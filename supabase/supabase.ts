import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Storage bucket name - you may need to adjust this to match your actual bucket name
const STORAGE_BUCKET = "course-content";

/**
 * Uploads a video file to the course-videos folder in Supabase storage
 * @param file - The video file to upload
 * @param fileName - Custom file name (optional)
 * @returns The full URL to the uploaded video or error
 */
export const uploadCourseVideo = async (
	file: File,
	fileName: string
): Promise<{ url: string; error: Error | null }> => {
	try {
		// Generate a unique file name if not provided
		const finalFileName = fileName;

		// Upload to the course-videos folder
		const { data, error } = await supabase.storage
			.from(STORAGE_BUCKET)
			.upload(`${finalFileName}`, file, {
				cacheControl: "3600",
				upsert: false,
			});

		console.log(data);

		if (error) throw error;

		// Get the public URL
		const { data: urlData } = supabase.storage
			.from(STORAGE_BUCKET)
			.getPublicUrl(`course-videos/${finalFileName}`);

		return { url: urlData.publicUrl, error: null };
	} catch (error) {
		console.error("Error uploading video:", error);
		throw error;
	}
};

// /**
//  * Uploads an image file to the course-images folder in Supabase storage
//  * @param file - The image file to upload
//  * @param fileName - Custom file name (optional)
//  * @returns The full URL to the uploaded image or error
//  */
// export const uploadCourseImage = async (
// 	file: File | Blob,
// 	fileName: string
// ): Promise<{ url: string; error: Error | null }> => {
// 	try {
// 		// Generate a unique file name if not provided
// 		const finalFileName = fileName;

// 		// Upload to the course-images folder
// 		const { data, error } = await supabase.storage
// 			.from(STORAGE_BUCKET)
// 			.upload(`${finalFileName}`, file, {
// 				cacheControl: "3600",
// 				upsert: false,
// 			});

// 		console.log(data);

// 		if (error) throw error;

// 		// Get the public URL
// 		const { data: urlData } = supabase.storage
// 			.from(STORAGE_BUCKET)
// 			.getPublicUrl(`${finalFileName}`);

// 		return { url: urlData.publicUrl, error: null };
// 	} catch (error) {
// 		console.error("Error uploading image:", error);
// 		throw error;
// 	}
// };
