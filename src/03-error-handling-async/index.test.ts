import {
  // throwError,
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
    // Write your test here
  });

  test('should throw error with default message if message is not provided', () => {
    // Write your test here
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
