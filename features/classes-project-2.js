class BankAccount {
  constructor (amount) {
    this.balance = typeof amount === 'number' ? amount : 0;
  }
  
  deposit (amount) {
    if (typeof amount !== 'number') {
      return console.log(`${ amount } is not a number! No funds added.`);
    }

    return this.balance += amount;
  }

  set balance (val) {
    this._balance = val;
    this.balanceUpdatedAt = new Date();
  }

  get balance () {
    return this._balance;
  }
  
  withdraw (amount) {
    if (typeof amount !== 'number') {
      return console.log(`${ amount } is not a number! No funds withdrawn.`);
    }

    return this.balance -= amount;
  }
  
  printBalance () {
    console.log(`You're account balance is: ${ this.balance }. Last update on: ${ this.balanceUpdatedAt }`);
  }
};


var account = new BankAccount(100);
account.deposit(100);
account.withdraw(10);
account.printBalance(); // 90

var account2 = new BankAccount('fsdfs'); // default to zero
account2.deposit('adam');                // balance still 0
account2.withdraw(true);                 // balance still 0
account2.printBalance();