import { supabase } from '@/supabase/supabase';
import formidable from 'formidable';
import { NextApiRequest, NextApiResponse } from 'next';

export const config = {
  api: {
    bodyParser: false, // Disable default body parsing (we'll use `formidable`)
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // 1. Authenticate the request (optional but recommended)
//   const session = await getServerSession(req, res, authOptions);
//   if (!session) {
//     return res.status(401).json({ error: 'Unauthorized' });
//   }

  // 2. Parse the uploaded file using `formidable`
  const formData = await new Promise<{ file: formidable.File }>((resolve, reject) => {
    const form = new formidable.IncomingForm();
    form.parse(req, (err, fields, files) => {
      if (err) return reject(err);
      const file = Array.isArray(files.file) ? files.file[0] : files.file;
      resolve({ file: file as formidable.File });
    });
  });

  // 3. Upload to Supabase Storage
  try {
    const filePath = `course-videos/${Date.now()}-${formData.file.originalFilename}`;
    const { error } = await supabase.storage
      .from('course-content')
      .upload(filePath, formData.file);

    if (error) throw error;

    // 4. Return the public URL
    const { data: { publicUrl } } = supabase.storage
      .from('course-content')
      .getPublicUrl(filePath);

    res.status(200).json({ url: publicUrl });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ error: 'Upload failed' });
  }
}