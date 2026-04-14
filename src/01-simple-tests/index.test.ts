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
    expect(simpleCalculator({ a: 2, b: 3, action: Action.Multiply })).toBe(6);
    expect(simpleCalculator({ a: 0, b: 3, action: Action.Multiply })).toBe(0);
    expect(simpleCalculator({ a: 2, b: 0, action: Action.Multiply })).toBe(0);
    expect(
      simpleCalculator({ a: NaN, b: 3, action: Action.Multiply }),
    ).toBeNaN();
    expect(
      simpleCalculator({ a: 2, b: NaN, action: Action.Multiply }),
    ).toBeNaN();
    expect(
      simpleCalculator({ a: NaN, b: NaN, action: Action.Multiply }),
    ).toBeNaN();
    expect(
      simpleCalculator({ a: 2, b: Infinity, action: Action.Multiply }),
    ).toBe(Infinity);
    expect(
      simpleCalculator({ a: Infinity, b: Infinity, action: Action.Multiply }),
    ).toBe(Infinity);
    expect(
      simpleCalculator({ a: Infinity, b: 3, action: Action.Multiply }),
    ).toBe(Infinity);
    expect(
      simpleCalculator({ a: NaN, b: 0, action: Action.Multiply }),
    ).toBeNaN();
    expect(
      simpleCalculator({ a: Infinity, b: 0, action: Action.Multiply }),
    ).toBeNaN();
    expect(
      simpleCalculator({ a: 0, b: NaN, action: Action.Multiply }),
    ).toBeNaN();
    expect(
      simpleCalculator({ a: 0, b: Infinity, action: Action.Multiply }),
    ).toBeNaN();
  });

  test('should divide two numbers', () => {
    expect(simpleCalculator({ a: 6, b: 2, action: Action.Divide })).toBe(3);
    expect(simpleCalculator({ a: 6, b: 0, action: Action.Divide })).toBe(
      Infinity,
    );
    expect(simpleCalculator({ a: 0, b: 2, action: Action.Divide })).toBe(0);
    expect(simpleCalculator({ a: 0, b: 0, action: Action.Divide })).toBeNaN();
    expect(simpleCalculator({ a: Infinity, b: 0, action: Action.Divide })).toBe(
      Infinity,
    );
    expect(simpleCalculator({ a: NaN, b: 2, action: Action.Divide })).toBeNaN();
    expect(simpleCalculator({ a: 0, b: NaN, action: Action.Divide })).toBeNaN();
    expect(
      simpleCalculator({ a: NaN, b: NaN, action: Action.Divide }),
    ).toBeNaN();
    expect(simpleCalculator({ a: 6, b: Infinity, action: Action.Divide })).toBe(
      0,
    );
    expect(simpleCalculator({ a: Infinity, b: 2, action: Action.Divide })).toBe(
      Infinity,
    );
    expect(
      simpleCalculator({ a: Infinity, b: Infinity, action: Action.Divide }),
    ).toBeNaN();
  });

  test('should exponentiate two numbers', () => {
    expect(simpleCalculator({ a: 2, b: 3, action: Action.Exponentiate })).toBe(
      8,
    );
    expect(
      simpleCalculator({ a: Infinity, b: 0, action: Action.Exponentiate }),
    ).toBe(1);
    expect(simpleCalculator({ a: 0, b: 0, action: Action.Exponentiate })).toBe(
      1,
    );
    expect(
      simpleCalculator({ a: Infinity, b: -1, action: Action.Exponentiate }),
    ).toBe(0);
    expect(
      simpleCalculator({ a: 2, b: Infinity, action: Action.Exponentiate }),
    ).toBe(Infinity);
    expect(
      simpleCalculator({ a: 0, b: Infinity, action: Action.Exponentiate }),
    ).toBe(0);
    expect(
      simpleCalculator({
        a: Infinity,
        b: Infinity,
        action: Action.Exponentiate,
      }),
    ).toBe(Infinity);
    expect(
      simpleCalculator({ a: NaN, b: 0, action: Action.Exponentiate }),
    ).toBe(1);
    expect(
      simpleCalculator({ a: NaN, b: 3, action: Action.Exponentiate }),
    ).toBeNaN();
    expect(
      simpleCalculator({ a: 2, b: NaN, action: Action.Exponentiate }),
    ).toBeNaN();
    expect(
      simpleCalculator({ a: NaN, b: NaN, action: Action.Exponentiate }),
    ).toBeNaN();
    expect(
      simpleCalculator({ a: NaN, b: Infinity, action: Action.Exponentiate }),
    ).toBeNaN();
  });

  test('should return null for invalid action', () => {
    // Write your test here
  });

  test('should return null for invalid arguments', () => {
    // Write your test here
  });
});
