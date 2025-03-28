class BankAccount {
  private balance: number;
  public accountNumber: number;
  public accountType: AccountType;

  constructor(initialBalance: number, accountNumber: number, accountType: AccountType) {
    this.balance = initialBalance;
    this.accountNumber = accountNumber;
    this.accountType = accountType;
  }

  public deposit(amount: number) {
    this.getBalance();
    this.balance += amount;
  }

  private getBalance(): number {
    return this.balance;
  }

  public withdraw(amount: number) {
    if (this.balance < amount) {
      throw new Error("Insufficient funds");
    }
    this.balance -= amount;
  }
}

enum AccountType {
  Individual = 1,
  Company = 2,
  Other = 99,
}
