import { NextResponse } from "next/server";
import { createPaystackTransaction } from "@/actions/createPaystackTransaction";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const url = await createPaystackTransaction({
      courseId: body.courseId,
      userId: body.clerkId,
      userEmail: body.email,
      firstName: body.firstName,
      lastName: body.lastName,
      imageUrl: body.imageUrl
    });
    console.log("Paystack transaction URL:", url);

    return NextResponse.json({ url });
  } catch (error) {
    console.error("Failed to create Paystack transaction:", error);
    return new NextResponse("Failed to initialize payment", { status: 500 });
  }
}
