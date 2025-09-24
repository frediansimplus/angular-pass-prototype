import { CapitalizePipe } from './capitalize-pipe';

describe('CapitalizePipe', () => {
  let pipe: CapitalizePipe;

  beforeEach(() => {
    pipe = new CapitalizePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should capitalize the first letter of a word and lowercase the rest', () => {
    expect(pipe.transform('hello')).toBe('Hello');
    expect(pipe.transform('WORLD')).toBe('World');
    expect(pipe.transform('aNgUlAr')).toBe('Angular');
  });

  it('should handle single-letter words', () => {
    expect(pipe.transform('a')).toBe('A');
    expect(pipe.transform('Z')).toBe('Z');
  });

  it('should return an empty string for an empty input', () => {
    expect(pipe.transform('')).toBe('');
  });

  it('should return an empty string for null input', () => {
    expect(pipe.transform(null)).toBe('');
  });

  it('should return an empty string for undefined input', () => {
    expect(pipe.transform(undefined)).toBe('');
  });

  it('should handle strings with leading/trailing spaces correctly (after trimming might be needed in real use, but pipe directly processes)', () => {
    // Note: The pipe itself doesn't trim. If trimming is desired, it should be done before passing to the pipe or within the pipe.
    expect(pipe.transform('  test  ')).toBe('  test  '); // Original behavior
    expect(pipe.transform('  TEST  ')).toBe('  test  ');
  });

});
