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

/**
 * Truncates text to a specified length with customizable options
 * 
 * @param text - The text to truncate
 * @param options - Configuration options
 * @param options.length - Maximum length before truncation (default: 100)
 * @param options.suffix - String to append when truncated (default: "...")
 * @param options.preserveWords - Whether to preserve whole words (default: true)
 * @param options.position - Where to truncate ("end", "middle", or "start") (default: "end")
 * @returns The truncated text
 */
export function truncateText(
  text: string,
  options: {
    length?: number;
    suffix?: string;
    preserveWords?: boolean;
    position?: 'end' | 'middle' | 'start';
  } = {}
): string {
  const {
    length = 100,
    suffix = '...',
    preserveWords = true,
    position = 'end'
  } = options;

  if (text.length <= length) return text;

  switch (position) {
    case 'middle':
      return truncateMiddle(text, length, suffix, preserveWords);
    case 'start':
      return truncateStart(text, length, suffix, preserveWords);
    case 'end':
    default:
      return truncateEnd(text, length, suffix, preserveWords);
  }
}

function truncateEnd(text: string, length: number, suffix: string, preserveWords: boolean): string {
  if (!preserveWords) {
    return text.slice(0, length) + suffix;
  }

  const truncated = text.slice(0, length + 1);
  const lastSpace = truncated.lastIndexOf(' ');
  return (lastSpace > 0 ? truncated.slice(0, lastSpace) : truncated.slice(0, length)) + suffix;
}

function truncateStart(text: string, length: number, suffix: string, preserveWords: boolean): string {
  if (!preserveWords) {
    return suffix + text.slice(-length);
  }

  const truncated = text.slice(-(length + 1));
  const firstSpace = truncated.indexOf(' ');
  return suffix + (firstSpace > 0 ? truncated.slice(firstSpace + 1) : truncated.slice(1));
}

function truncateMiddle(text: string, length: number, suffix: string, preserveWords: boolean): string {
  if (length <= suffix.length) return suffix;

  const halfLength = Math.floor(length / 2) - suffix.length;
  let firstPart = text.slice(0, halfLength);
  let secondPart = text.slice(-halfLength);

  if (preserveWords) {
    const firstSpace = text.indexOf(' ', halfLength);
    const lastSpace = text.lastIndexOf(' ', text.length - halfLength);

    if (firstSpace !== -1 && lastSpace !== -1) {
      firstPart = text.slice(0, firstSpace);
      secondPart = text.slice(lastSpace + 1);
    }
  }

  return `${firstPart}${suffix}${secondPart}`;
}

/**
 * Formats a price in NGN without trailing .00
 * @param price - The price as a number or string
 * @returns Formatted price string (e.g., NGN 12,000)
 */
export function formatPrice(price: number | undefined): string {
  if (price === undefined) return "NGN 0";

  // Format with currency, then remove trailing .00 if present
  const formatted = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
  return formatted;
}