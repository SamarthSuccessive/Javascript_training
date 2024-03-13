// 1. Create a class BankAccount with properties balance and owner and methods deposit(), withdraw(), and displayBalance().


class BankAccount{
    owner;
    balance;
    constructor(owner,balance)
    {
        this.balance=balance;
        this.owner=owner;
    }
    deposit(money){
        this.balance=this.balance+money;
    }

    withdraw(money)
    {
        if(this.balance>=money)
        {
            this.balance=this.balance-money;
        }
        else{
            console.log("Insufficient Balance");
        }
    }

    displayBalance()
    {
        return this.balance;
    }
}

const Person=new BankAccount("Samarth",100000);
console.log(Person.owner);
console.log(Person.displayBalance());
Person.deposit(200000);
console.log(Person.balance);
