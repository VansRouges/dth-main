'use server';

import axios from "axios";
import baseUrl from "@/lib/baseUrl";
import getCourseById from '@/sanity/lib/courses/getCourseById';

export async function createPaystackTransaction({courseId, userId, userEmail, firstName, lastName, imageUrl} : {
  courseId: string;
  userId: string;
  userEmail: string;
  firstName: string;
  lastName: string;
  imageUrl: string;
}) {
  const course = await getCourseById(courseId);
  if (!course) throw new Error("Course not found");

  const res = await axios.post(
    "https://api.paystack.co/transaction/initialize",
    {
      email: userEmail,
      amount: course?.price && Math.round(course.price * 100), // Paystack expects amount in kobo
      callback_url: `${baseUrl}/api/payment/callback?courseId=${course._id}`,
      metadata: {
        email: userEmail,
        courseId: course._id,
        clerkId: userId, // Assuming userId is the Clerk ID
        firstName,
        lastName,
        imageUrl,
      },
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_TEST_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
    }
  );
  console.log("Paystack transaction response:", res.data);

  return res.data.data.authorization_url;
}