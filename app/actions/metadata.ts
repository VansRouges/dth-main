"use server";
import { clerkClient } from "@clerk/nextjs/server";

interface UpdateMetadataParams {
  userId: string;
  metadata: {
    role?: "admin" | "user" | "instructor";
    about?: string;
    skill?: string;
    gender?: string;
    country?: string;
    interested?: string;
    currentJob?: string;
  };
}

export async function updateUserMetadata({ userId, metadata }: UpdateMetadataParams): Promise<void> {
  const client = await clerkClient();

  try {
    // Update the user's publicMetadata
    const res = await client.users.updateUser(userId, {
      publicMetadata: metadata,
    });
    console.log({ message: "Metadata updated successfully", metadata: res.publicMetadata });
  } catch (err) {
    throw new Error(`Failed to update metadata: ${err instanceof Error ? err.message : String(err)}`);
  }
}