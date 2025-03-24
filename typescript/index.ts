const world = "world";
console.log(hello + world);
console.log(hello.length);

function increment(num: number) {
  return num + 1;
}

console.log(increment(2));

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

const product = {
  name: " aa",
  price: 100,
};

console.log(product.name);
console.log(product.price);

const increment2 = (num: number) => num + 1;

function hello(person: string): void;
function hello(persons: string[]): void;
function hello(person: string | string[]): void {
  if (typeof person === "string") {
    console.log(`Hello ${person}`);
  }
}

function test(): void {
  console.log("test");
}

test();
