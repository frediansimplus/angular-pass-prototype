import { formatDate } from "@angular/common";

/**
 * A static helper class for formatting dates.
 */
export class DateFormatter {
  /**
   * Formats a Date object into a short string (e.g., "8/25/2025").
   * @param date The Date object to format.
   * @returns A string representation of the date.
   */
  static formatShortDate(date: Date): string {
    if (!(date instanceof Date) || isNaN(date.getTime())) {
      return 'Invalid Date';
    }
    return date.toLocaleDateString('en-US');
  }

  /**
   * Formats a Date object into a long string (e.g., "August 25, 2025").
   * @param date The Date object to format.
   * @returns A string representation of the date.
   */
  static formatLongDate(date: Date): string {
    if (!(date instanceof Date) || isNaN(date.getTime())) {
      return 'Invalid Date';
    }
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  static formatDateDMY(date: Date) {
    return formatDate(date, 'dd MMM yyyy', 'en-GB');
  }

  /**
   * Checks if a given value is a valid Date object.
   * @param value The value to check.
   * @returns True if the value is a valid Date object, false otherwise.
   */
  static isValidDate(value: any): boolean {
    return value instanceof Date && !isNaN(value.getTime());
  }
}