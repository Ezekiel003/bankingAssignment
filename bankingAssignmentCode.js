class Transaction {
  constructor(type, amount) {
    this._type = type;
    this._amount = amount;
    this._timestamp = new Date();
  }

  get type() {
    return this._type;
  }

  set type(value) {
    this._type = value;
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    this._amount = value;
  }

  get timestamp() {
    return this._timestamp;
  }

  set timestamp(value) {
    this._timestamp = value;
  }
}

class BankAccount {
  constructor() {
    this._accountNumber = Math.floor(Math.random() * 1000000000);
    this._firstName = '';
    this._lastName = '';
    this._accountHolder = '';
    this._balance = 0;
    this._transactions = [];
    this.transaction_amounts = [];
  }

  get accountNumber() {
    return this._accountNumber;
  }

  set accountNumber(value) {
    this._accountNumber = value;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    this._lastName = value;
  }

  get accountHolder() {
    return this._accountHolder;
  }

  set accountHolder(value) {
    this._accountHolder = value;
  }

  get balance() {
    return this._balance;
  }

  set balance(value) {
    this._balance = value;
  }

  get transactions() {
    return this._transactions;
  }

  set transactions(value) {
    this._transactions = value;
  }
 get transaction_limit(){
    let sum = 0;
      this.transaction_amounts.forEach((amounts)=>{
        sum += amounts
      })
    return sum;
  }
  deposit(amount) {
    this._balance += amount;
    this._transactions.push(new Transaction('deposit', amount));
    // this.transaction_amounts.push(amount);
  }

  withdraw(amount) {
    if (amount > this._balance) {
      throw new Error('Insufficient funds');
    }
    this._balance -= amount;
    this._transactions.push(new Transaction('withdraw', amount));
    this.transaction_amounts.push(amount);
  }
  
  transfer(amount, toAccount) {
    try{
      let today = new Date();
      if(this.transaction_limit >= 10000 && today){
        throw Error('Transaction limit exceeded')
      }
      if(amount + this.transaction_limit > 10000 && today){
        let available_amount = 10000 - this.transaction_limit;
        throw Error('You can\'t transfer ' + amount +" available amount to transfer is "+ available_amount)
      }
      if (amount > this._balance) {
        throw new Error('Insufficient funds');
      }
      this._balance -= amount;
      this._transactions.push(new Transaction('transfer', amount));
      toAccount._balance += amount;
      toAccount._transactions.push(new Transaction('transfer', amount));
      this.transaction_amounts.push(amount);
    }catch(e){
      console.log(e.message)
    }
  }


  getTransactions() {
    return this._transactions;
  }

  setAccountHolder(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._accountHolder = `${firstName} ${lastName}`;
  }

}
const newAccount = new BankAccount() // create 1st account

newAccount.setAccountHolder("Oja","Daddy") //set the account holder ,name and last name
console.log(newAccount)
newAccount.deposit(2000)//deposit 2000 to users account
newAccount.deposit(3000)//deposit 3000 to users account
newAccount.withdraw(2500) //withdraw 2500 from users account
console.log(newAccount.getTransactions()); 

const new_transfer_account =  new BankAccount()

newAccount.transfer(2500, new_transfer_account)
console.log(new_transfer_account.getTransactions());
console.log(newAccount.balance);
newAccount.deposit(5000)
console.log(newAccount.balance);

newAccount.transfer(2500, new_transfer_account)
console.log(new_transfer_account.getTransactions());
console.log(newAccount.balance);
newAccount.deposit(5000)
console.log(newAccount.transaction_amounts);
newAccount.transfer(2000,new_transfer_account)
console.log(newAccount.transaction_amounts);
console.log(newAccount.transaction_limit); //  to view daily transaction amount
newAccount.transfer(2000,new_transfer_account) // responsible to transfermoney to new account
newAccount.transfer(1000,new_transfer_account)
console.log(newAccount.transaction_limit)
newAccount.transfer(1000,new_transfer_account)
console.log(newAccount.transaction_limit)
newAccount.transfer(500,new_transfer_account)
console.log(newAccount.transaction_limit)
newAccount.transfer(500,new_transfer_account)
console.log(newAccount.transaction_limit)
newAccount.transfer(500,new_transfer_account)
console.log(newAccount.transaction_limit)