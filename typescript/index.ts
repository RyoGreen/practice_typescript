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

let str = "hello";
str = str + "world";
console.log(str);

interface Score {
  math: number;
  science: number;
}

let studentOne: Score = {
  math: 100,
  science: 90,
};

let studentTwo: Score = {
  math: 80,
  science: 70,
};

type Color = "red" | "green" | "blue";

let loanColor: Color = "green";

function getHexColor(color: Color): string {
  switch (color) {
    case "red":
      return "red color";
    case "green":
      return "green color";
    case "blue":
      return "blue color";
  }
}

const map = new Map<string, number>();
map.set("one", 1);

if (map.has("one")) {
  console.log(map.get("one"));
}

for (const [key, value] of map) {
  console.log(key, value);
}
