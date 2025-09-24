
/**
 * A static helper class for formatting dates.
 */
export class TextFormatter {
  /**
   * Formats a Text object to Title case.
   * @param input The Text object to format.
   * @returns A string representation of the title case.
   */
  static formatTitleCase(input: string): string {
    if (!input) {
      return ''; // Handle null, undefined, or empty strings
    }

    return input
      .toLowerCase() // Convert entire string to lowercase first for consistency
      .split(' ')    // Split the string into an array of words
      .map(word => {
        // For each word, capitalize its first letter
        if (word.length === 0) {
          return ''; // Handle empty strings that might result from multiple spaces
        }
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(' '); // Join the words back into a single string
  }

  /**
   * Checks if a given value is a valid Text object.
   * @param value The value to check.
   * @returns True if the value is a valid Text object, false otherwise.
   */
  static isValidText(value: any): boolean {
    return value instanceof Text;
  }

  /**
   * Checks if a given value is a valid Text object.
   * @param value The value to check.
   * @returns True if the value is a valid Text object, false otherwise.
   */
  static isEmptyString(value: any): boolean {
    return this.isValidText(value) && (value === null || value === undefined || value === '');
  }
  
}