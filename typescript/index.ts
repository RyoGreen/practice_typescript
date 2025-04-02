class BankAccount {
  private balance: number;
  public accountNumber: number;
  public accountType: AccountType;

  constructor(initialBalance: number, accountNumber: number, accountType: number) {
    switch (accountType) {
      case AccountType.Individual:
        this.accountType = AccountType.Individual;
        break;
      case AccountType.Company:
        this.accountType = AccountType.Company;
        break;
      default:
        this.accountType = AccountType.Other;
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
  Individual = 1,
  Company = 2,
  Other = 99,
}

function main() {
  let account = new BankAccount(100, 1234, AccountType.Individual);
  account.deposit(50);
  account.withdraw(10);
  console.log(account);
}

main();
