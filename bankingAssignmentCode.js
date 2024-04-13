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
  
    deposit(amount) {
      this._balance += amount;
      this._transactions.push(new Transaction('deposit', amount));
    }
  
    withdraw(amount) {
      if (amount > this._balance) {
        throw new Error('Insufficient funds');
      }
      this._balance -= amount;
      this._transactions.push(new Transaction('withdraw', amount));
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