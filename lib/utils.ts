import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Function to handle image paths correctly in both dev and production
export function getImagePath(path: string): string {
  // If path already starts with http or data, it's an external URL or data URL
  if (path.startsWith('http') || path.startsWith('data:')) {
    return path;
  }
  
  // Ensure path starts with a slash
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  // In development, use the path as is
  // In production with static export, the path will be correct due to assetPrefix
  return normalizedPath;
}
