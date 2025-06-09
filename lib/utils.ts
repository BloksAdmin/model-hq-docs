import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines multiple class names into a single string, resolving Tailwind CSS conflicts.
 *
 * This function uses `clsx` to conditionally join class names and `tailwind-merge`
 * to intelligently merge Tailwind CSS utility classes, ensuring that conflicting
 * utilities are overridden correctly.
 *
 * @param {...ClassValue[]} inputs - A list of class names or conditional class maps.
 *                                   Can include strings, arrays, or objects.
 * @returns {string} A string of combined and merged class names.
 *
 * @example
 * // Returns "bg-red-500 text-white p-4"
 * cn("bg-blue-500", "bg-red-500", "text-white", "p-4");
 *
 * @example
 * // Returns "text-green-500"
 * cn({ "text-red-500": false, "text-green-500": true });
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
