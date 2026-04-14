import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Add, expected: 4 },
  { a: 3, b: 2, action: Action.Add, expected: 5 },
  { a: 2, b: Infinity, action: Action.Add, expected: Infinity },
  { a: Infinity, b: Infinity, action: Action.Add, expected: Infinity },
  { a: Infinity, b: 3, action: Action.Add, expected: Infinity },
  { a: NaN, b: Infinity, action: Action.Add, expected: NaN },
  { a: Infinity, b: NaN, action: Action.Add, expected: NaN },
  { a: NaN, b: 3, action: Action.Add, expected: NaN },
  { a: 2, b: NaN, action: Action.Add, expected: NaN },
  { a: NaN, b: NaN, action: Action.Add, expected: NaN },

  { a: 5, b: 3, action: Action.Subtract, expected: 2 },
  { a: Infinity, b: 3, action: Action.Subtract, expected: Infinity },
  { a: 5, b: Infinity, action: Action.Subtract, expected: -Infinity },
  { a: Infinity, b: Infinity, action: Action.Subtract, expected: NaN },
  { a: NaN, b: Infinity, action: Action.Subtract, expected: NaN },
  { a: Infinity, b: NaN, action: Action.Subtract, expected: NaN },
  { a: NaN, b: 3, action: Action.Subtract, expected: NaN },
  { a: 5, b: NaN, action: Action.Subtract, expected: NaN },
  { a: NaN, b: NaN, action: Action.Subtract, expected: NaN },

  { a: 2, b: 3, action: Action.Multiply, expected: 6 },
  { a: 0, b: 3, action: Action.Multiply, expected: 0 },
  { a: 2, b: 0, action: Action.Multiply, expected: 0 },
  { a: NaN, b: 3, action: Action.Multiply, expected: NaN },
  { a: 2, b: NaN, action: Action.Multiply, expected: NaN },
  { a: NaN, b: NaN, action: Action.Multiply, expected: NaN },
  { a: 2, b: Infinity, action: Action.Multiply, expected: Infinity },
  { a: Infinity, b: Infinity, action: Action.Multiply, expected: Infinity },
  { a: Infinity, b: 3, action: Action.Multiply, expected: Infinity },
  { a: NaN, b: 0, action: Action.Multiply, expected: NaN },
  { a: Infinity, b: 0, action: Action.Multiply, expected: NaN },
  { a: 0, b: NaN, action: Action.Multiply, expected: NaN },
  { a: 0, b: Infinity, action: Action.Multiply, expected: NaN },

  { a: 6, b: 2, action: Action.Divide, expected: 3 },
  { a: 6, b: 0, action: Action.Divide, expected: Infinity },
  { a: 0, b: 2, action: Action.Divide, expected: 0 },
  { a: 0, b: 0, action: Action.Divide, expected: NaN },
  { a: Infinity, b: 0, action: Action.Divide, expected: Infinity },
  { a: NaN, b: 2, action: Action.Divide, expected: NaN },
  { a: 0, b: NaN, action: Action.Divide, expected: NaN },
  { a: NaN, b: NaN, action: Action.Divide, expected: NaN },
  { a: 6, b: Infinity, action: Action.Divide, expected: 0 },
  { a: Infinity, b: 2, action: Action.Divide, expected: Infinity },
  { a: Infinity, b: Infinity, action: Action.Divide, expected: NaN },

  { a: 2, b: 3, action: Action.Exponentiate, expected: 8 },
  { a: Infinity, b: 0, action: Action.Exponentiate, expected: 1 },
  { a: 0, b: 0, action: Action.Exponentiate, expected: 1 },
  { a: Infinity, b: -1, action: Action.Exponentiate, expected: 0 },
  { a: 2, b: Infinity, action: Action.Exponentiate, expected: Infinity },
  { a: 0, b: Infinity, action: Action.Exponentiate, expected: 0 },
  {
    a: Infinity,
    b: Infinity,
    action: Action.Exponentiate,
    expected: Infinity,
  },
  { a: NaN, b: 0, action: Action.Exponentiate, expected: 1 },
  { a: NaN, b: 3, action: Action.Exponentiate, expected: NaN },
  { a: 2, b: NaN, action: Action.Exponentiate, expected: NaN },
  { a: NaN, b: NaN, action: Action.Exponentiate, expected: NaN },
  { a: NaN, b: Infinity, action: Action.Exponentiate, expected: NaN },

  { a: 2, b: 3, action: 'meow', expected: null },
  { a: 2, b: 3, action: [], expected: null },
  { a: 2, b: 3, action: true, expected: null },

  { a: 2, b: null, action: Action.Add, expected: null },
  { a: null, b: 3, action: Action.Divide, expected: null },
  { a: null, b: null, action: Action.Exponentiate, expected: null },
  { a: true, b: 3, action: Action.Multiply, expected: null },
  { a: 2, b: true, action: Action.Subtract, expected: null },
  { a: true, b: true, action: Action.Add, expected: null },
  { a: 2, b: '3', action: Action.Divide, expected: null },
  { a: '2', b: 3, action: Action.Exponentiate, expected: null },
  { a: '2', b: '3', action: Action.Multiply, expected: null },
  { a: [2], b: '3', action: Action.Subtract, expected: null },
  { a: 2, b: [3], action: Action.Add, expected: null },
  { a: [2], b: [3], action: Action.Divide, expected: null },
  { a: { a: 2 }, b: 3, action: Action.Exponentiate, expected: null },
  { a: 2, b: { b: 3 }, action: Action.Multiply, expected: null },
  { a: { a: 2 }, b: { b: 3 }, action: Action.Subtract, expected: null },
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
