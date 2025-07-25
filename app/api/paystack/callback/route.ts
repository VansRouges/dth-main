import { NextResponse } from "next/server";
import axios from "axios";
import { createStudentIfNotExists } from "@/sanity/lib/student/createStudentIfNotExists";
import { createEnrollment } from "@/sanity/lib/student/createEnrollment";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const reference = searchParams.get("reference");
  const courseId = searchParams.get("courseId");

  if (!reference || !courseId) {
    return new NextResponse("Invalid callback parameters", { status: 400 });
  }

  const verifyRes = await axios.get(`https://api.paystack.co/transaction/verify/${reference}`, {
    headers: {
      Authorization: `Bearer ${process.env.PAYSTACK_TEST_SECRET_KEY}`,
    },
  });

  const data = verifyRes.data.data;
  if (data.status !== "success") {
    return new NextResponse("Payment verification failed", { status: 400 });
  }

  const email = data.customer.email;
  const clerkId = data.metadata.clerkId;
  const firstName = data.metadata.firstName;
  const lastName = data.metadata.lastName;
    const imageUrl = data.metadata.imageUrl;

  const student = await createStudentIfNotExists({
    email,
    clerkId,
    firstName,
    lastName,
    imageUrl
  });

  await createEnrollment({
    studentId: student._id,
    courseId,
    paymentId: reference,
    amount: data.amount,
  });

  return NextResponse.redirect(`${process.env.NEXT_PUBLIC_BASE_URL}/dashboard`);
}
