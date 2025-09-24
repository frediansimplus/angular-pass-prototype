import { DateFormatter } from './date-formatter';

describe('DateFormatter Helper', () => {
  const validTestDate = new Date('2025-08-25T10:00:00Z'); // Consistent valid test date
  const invalidDate = new Date('invalid string'); // An invalid date object

  it('should format a valid date into a short string', () => {
    expect(DateFormatter.formatShortDate(validTestDate)).toEqual('8/25/2025');
  });

  it('should format a valid date into a long string', () => {
    expect(DateFormatter.formatLongDate(validTestDate)).toEqual('August 25, 2025');
  });

  it('should return "Invalid Date" for an invalid date object in short format', () => {
    expect(DateFormatter.formatShortDate(invalidDate)).toEqual('Invalid Date');
  });

  it('should return "Invalid Date" for an invalid date object in long format', () => {
    expect(DateFormatter.formatLongDate(invalidDate)).toEqual('Invalid Date');
  });

  it('should return "Invalid Date" for null input in short format', () => {
    expect(DateFormatter.formatShortDate(null as any)).toEqual('Invalid Date');
  });

  it('should return "Invalid Date" for undefined input in long format', () => {
    expect(DateFormatter.formatLongDate(undefined as any)).toEqual('Invalid Date');
  });

  it('should correctly identify a valid date', () => {
    expect(DateFormatter.isValidDate(validTestDate)).toBeTrue();
  });

  it('should correctly identify an invalid date object', () => {
    expect(DateFormatter.isValidDate(invalidDate)).toBeFalse();
  });

  it('should correctly identify non-Date inputs as invalid', () => {
    expect(DateFormatter.isValidDate('2025-01-01')).toBeFalse();
    expect(DateFormatter.isValidDate(12345)).toBeFalse();
    expect(DateFormatter.isValidDate({})).toBeFalse();
    expect(DateFormatter.isValidDate(null)).toBeFalse();
    expect(DateFormatter.isValidDate(undefined)).toBeFalse();
  });
});
