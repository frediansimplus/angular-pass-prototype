import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
  standalone: false
})
export class CapitalizePipe implements PipeTransform {

  /**
   * Capitalizes the first letter of a string.
   * @param value The input string.
   * @returns The string with its first letter capitalized, or an empty string if input is null/undefined.
   */
  transform(value: string | null | undefined): string {
    if (!value) {
      return '';
    }
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  }
}
