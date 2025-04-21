import { User } from "@clerk/nextjs/server";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function checkAdminAccess(user: User | null) {
  if (!user) return false;
  
  // Check publicMetadata.role for admin access
  const role = user.publicMetadata?.role;
  return role === "admin";
}