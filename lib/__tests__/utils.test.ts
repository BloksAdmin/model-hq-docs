import { cn } from '../utils';

describe('cn utility function', () => {
  it('should combine class names', () => {
    expect(cn('foo', 'bar')).toBe('foo bar');
  });

  it('should handle conditional classes', () => {
    expect(cn('foo', { bar: true, baz: false })).toBe('foo bar');
  });

  it('should handle mixed conditional and regular classes', () => {
    expect(cn('foo', { bar: true, qux: true }, 'baz', { quux: false })).toBe('foo bar qux baz');
  });

  it('should return an empty string for no inputs', () => {
    expect(cn()).toBe('');
  });

  it('should handle falsy values in conditional classes', () => {
    const showBar = false;
    const showBaz = true;
    expect(cn('foo', { bar: showBar, baz: showBaz })).toBe('foo baz');
  });

  it('should merge Tailwind CSS classes correctly (simple override)', () => {
    expect(cn('p-4', 'p-2')).toBe('p-2');
  });

  it('should merge Tailwind CSS classes correctly (conflicting)', () => {
    expect(cn('bg-red-500', 'bg-blue-500')).toBe('bg-blue-500');
  });

  it('should handle arrays of class names', () => {
    expect(cn(['foo', 'bar'], ['baz'])).toBe('foo bar baz');
  });

  it('should handle mixed arrays and conditional classes', () => {
    expect(cn(['foo'], { bar: true }, 'baz')).toBe('foo bar baz');
  });
});
