import {
  throwError,
  // throwCustomError,
  resolveValue,
  // MyAwesomeError,
  // rejectCustomError,
} from './index';

describe('resolveValue', () => {
  test('should resolve provided value', async () => {
    const primitiveValue = 5;
    const objectValue = { value: 5 };
    const [primitiveResult, objectResult] = await Promise.all([
      resolveValue(primitiveValue),
      resolveValue(objectValue),
    ]);
    expect(primitiveResult).toBe(primitiveValue);
    expect(objectResult).toBe(objectValue);
  });
});

describe('throwError', () => {
  test('should throw error with provided message', () => {
    const msg = 'Provided message';
    expect(() => throwError(msg)).toThrow(msg);
  });

  test('should throw error with default message if message is not provided', () => {
    const msg = 'Oops!';
    expect(() => throwError()).toThrow(msg);
  });
});

describe('throwCustomError', () => {
  test('should throw custom error', () => {
    // Write your test here
  });
});

describe('rejectCustomError', () => {
  test('should reject custom error', async () => {
    // Write your test here
  });
});
