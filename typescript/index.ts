class BankAccount {
  private balance: number;
  public accountNumber: number;
  public accountType: AccountType;

  constructor(initialBalance: number, accountNumber: number, accountType: number) {
    switch (accountType) {
      case AccountType.INDIVIDUAL:
        this.accountType = AccountType.INDIVIDUAL;
        break;
      case AccountType.COMPANY:
        this.accountType = AccountType.COMPANY;
        break;
      default:
        this.accountType = AccountType.OTHER;
        break;
    }

    this.balance = initialBalance;
    this.accountNumber = accountNumber;
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
  INDIVIDUAL = 1,
  COMPANY = 2,
  OTHER = 99,
}

function main() {
  let account = new BankAccount(100, 1234, AccountType.INDIVIDUAL);
  account.deposit(50);
  account.withdraw(10);
  console.log(account);
}
