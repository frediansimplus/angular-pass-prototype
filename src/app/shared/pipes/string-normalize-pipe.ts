import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringNormalize',
  standalone: false
})
export class StringNormalizePipe implements PipeTransform {

  /**
   * Normalize the empty string to default -.
   * @param value The input string.
   * @returns The string with normalize when its empty string.
   */
  transform(value: string | null | undefined): string {
    if (!value) {
      return '-';
    }

    return value;
  }
}
