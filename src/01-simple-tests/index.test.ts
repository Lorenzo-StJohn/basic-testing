import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    expect(simpleCalculator({ a: 2, b: 3, action: Action.Add })).toBe(5);
    expect(simpleCalculator({ a: 2, b: Infinity, action: Action.Add })).toBe(
      Infinity,
    );
    expect(
      simpleCalculator({ a: Infinity, b: Infinity, action: Action.Add }),
    ).toBe(Infinity);
    expect(simpleCalculator({ a: Infinity, b: 3, action: Action.Add })).toBe(
      Infinity,
    );
    expect(
      simpleCalculator({ a: NaN, b: Infinity, action: Action.Add }),
    ).toBeNaN();
    expect(
      simpleCalculator({ a: Infinity, b: NaN, action: Action.Add }),
    ).toBeNaN();
    expect(simpleCalculator({ a: NaN, b: 3, action: Action.Add })).toBeNaN();
    expect(simpleCalculator({ a: 2, b: NaN, action: Action.Add })).toBeNaN();
    expect(simpleCalculator({ a: NaN, b: NaN, action: Action.Add })).toBeNaN();
  });

  test('should subtract two numbers', () => {
    expect(simpleCalculator({ a: 5, b: 3, action: Action.Subtract })).toBe(2);
    expect(
      simpleCalculator({ a: Infinity, b: 3, action: Action.Subtract }),
    ).toBe(Infinity);
    expect(
      simpleCalculator({ a: 5, b: Infinity, action: Action.Subtract }),
    ).toBe(-Infinity);
    expect(
      simpleCalculator({ a: Infinity, b: Infinity, action: Action.Subtract }),
    ).toBeNaN();
    expect(
      simpleCalculator({ a: NaN, b: Infinity, action: Action.Subtract }),
    ).toBeNaN();
    expect(
      simpleCalculator({ a: Infinity, b: NaN, action: Action.Subtract }),
    ).toBeNaN();
    expect(
      simpleCalculator({ a: NaN, b: 3, action: Action.Subtract }),
    ).toBeNaN();
    expect(
      simpleCalculator({ a: 5, b: NaN, action: Action.Subtract }),
    ).toBeNaN();
    expect(
      simpleCalculator({ a: NaN, b: NaN, action: Action.Subtract }),
    ).toBeNaN();
  });

  test('should multiply two numbers', () => {
    // Write your test here
  });

  test('should divide two numbers', () => {
    // Write your test here
  });

  test('should exponentiate two numbers', () => {
    // Write your test here
  });

  test('should return null for invalid action', () => {
    // Write your test here
  });

  test('should return null for invalid arguments', () => {
    // Write your test here
  });
});
