class BankAccount {
  private balance: number;
  public accountNumber: number;

  constructor(initialBalance: number, accountNumber: number) {
    this.balance = initialBalance;
    this.accountNumber = accountNumber;
  }

  public deposit(amount: number) {
    this.balance += amount;
  }

  protected getBalance(): number {
    return this.balance;
  }
}
