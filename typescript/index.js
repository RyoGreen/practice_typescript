var world = "world";
console.log(hello + world);
console.log(hello.length);
function increment(num) {
    return num + 1;
}
console.log(increment(2));
var BankAccount = /** @class */ (function () {
    function BankAccount(initialBalance, accountNumber) {
        this.balance = initialBalance;
        this.accountNumber = accountNumber;
    }
    BankAccount.prototype.deposit = function (amount) {
        this.balance += amount;
    };
    BankAccount.prototype.getBalance = function () {
        return this.balance;
    };
    return BankAccount;
}());
var product = {
    name: " aa",
    price: 100,
};
console.log(product.name);
console.log(product.price);
var increment2 = function (num) { return num + 1; };
function hello(person) {
    if (typeof person === "string") {
        console.log("Hello ".concat(person));
    }
}
function test() {
    console.log("test");
}
test();
