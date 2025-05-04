import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge Tailwind CSS classes safely
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format a date to a human-readable string
 */
export function formatDate(date: string | Date): string {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

/**
 * Format salary range to a readable string
 */
export function formatSalary(salaryRange: string): string {
  // Example input: "50000-80000"
  // Example output: "$50,000 - $80,000"
  const [min, max] = salaryRange.split('-');
  
  if (min && max) {
    return `$${parseInt(min).toLocaleString()} - $${parseInt(max).toLocaleString()}`;
  }
  
  return `$${parseInt(salaryRange).toLocaleString()}`;
}

/**
 * Truncate a string to a specified length
 */
export function truncate(str: string, length: number): string {
  if (str.length <= length) return str;
  return str.slice(0, length) + '...';
}

/**
 * Generate a random ID
 */
export function generateId(length = 6): string {
  return Math.random().toString(36).substring(2, 2 + length);
}