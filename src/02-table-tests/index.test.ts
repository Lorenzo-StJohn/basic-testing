import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 2, b: 3, action: Action.Add, expected: 5 },
  { a: 5, b: 3, action: Action.Subtract, expected: 2 },
  { a: 2, b: 3, action: Action.Multiply, expected: 6 },
  { a: 6, b: 2, action: Action.Divide, expected: 3 },
  { a: 2, b: 3, action: Action.Exponentiate, expected: 8 },
  { a: 2, b: 3, action: 'invalid', expected: null },
  { a: 'invalid', b: 'invalid', action: Action.Add, expected: null },
];

describe('simpleCalculator', () => {
  test.each(testCases)(
    'should return $expected when computing $a $action $b',
    ({ a, b, action, expected }) => {
      const result = simpleCalculator({ a, b, action });

      if (Number.isNaN(expected)) {
        expect(result).toBeNaN();
      } else {
        expect(result).toBe(expected);
      }
    },
  );
});
