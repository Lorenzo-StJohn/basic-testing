import { getBankAccount, InsufficientFundsError } from '.';

describe('BankAccount', () => {
  let account: ReturnType<typeof getBankAccount>;
  const initialBalance = 100;

  beforeEach(() => {
    account = getBankAccount(initialBalance);
    jest.clearAllMocks();
  });

  test('should create account with initial balance', () => {
    expect(account.getBalance()).toBe(initialBalance);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    const withdrawAmount = initialBalance + 50;
    expect(() => account.withdraw(withdrawAmount)).toThrow(
      InsufficientFundsError,
    );
  });

  test('should throw error when transferring more than balance', () => {
    const toAccount = getBankAccount(50);
    const transferAmount = initialBalance + 50;
    expect(() => account.transfer(transferAmount, toAccount)).toThrow();
  });

  test('should throw error when transferring to the same account', () => {
    const transferAmount = 50;
    expect(() => account.transfer(transferAmount, account)).toThrow();
  });

  test('should deposit money', () => {
    const depositAmount = 50;
    const expectedBalance = initialBalance + depositAmount;
    expect(account.deposit(depositAmount).getBalance()).toBe(expectedBalance);
  });

  test('should withdraw money', () => {
    // Write your test here
  });

  test('should transfer money', () => {
    // Write your test here
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    // Write your tests here
  });

  test('should set new balance if fetchBalance returned number', async () => {
    // Write your tests here
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    // Write your tests here
  });
});
