 // GENERIC BANK ACCOUNT
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



// SUB-CLASS SAVINGS ACCOUNT
class SavingsAccount extends BankAccount {
  // Call parent function and extend
  deposit (amount) {
    if (super.deposit(amount)) {
      console.log(`Congratuations on making your deposit of: £${amount}`);
    }
  }

  // Override parent withdraw function
  withdraw (amount) {
    console.log(`
      You can't make a withdrawal on a savings account.
      Requested £${amount} was NOT withdrawn!
    `);
  }
};


var savingsAccount = new SavingsAccount(500);
savingsAccount.deposit(100); // consgrats on making your deposit of $
savingsAccount.printBalance();
savingsAccount.withdraw(25); // you cant make a withdrawal on savings account
savingsAccount.printBalance();

console.log('***');
var savingsAccount2 = new SavingsAccount(true);
savingsAccount2.deposit('love');
savingsAccount2.printBalance();