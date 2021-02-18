// Accounts storage
var accountStorage = [];
// Constructor function for users
function User(name,age,location,gender,accNumber,passwd) {
    this.name = name;
    this.age = age;
    this.location = location;
    this.gender = gender;
    this.accNumber = accNumber;
    this.passwd = passwd;
    this.balance = 0;
    this.yaka = "yaka"
    this.water = "water";
    this.electricity = "electricity";
    this.tax = "tax";
    this.schoolFees = "schoolFees";
    this.createAccount = createAccount;
    this.accountBalance = accountBalance;
    this.deposit = deposit;
    this.withdraw = withdraw;
    this.deleteAccount = deleteAccount;
    this.payBills = payBills;
    this.transferMoney = transferMoney;
    this.find = find;
}
// Accounts creator function
function createAccount() {
    var user = [this]
    if(accountStorage.indexOf(user) < 0) {
        accountStorage.push(user);
        console.log(this.name + ", your account is created");
    } else {
        console.log("No account created");
    }
}
// Pay bills function
function payBills(billAmount,service) {
    if(this.balance >= billAmount && service == this.yaka) {
        console.log(`${this.name} payed Yaka of ${billAmount}`);
        return `Account balance is ${this.balance -= billAmount}`;
    } else if(this.balance >= billAmount && service == this.electricity) {
        console.log(`${this.name} payed Electricity of ${billAmount}`);
        return `Account balance is ${this.balance -= billAmount}`;
    } else if(this.balance >= billAmount && service == this.water) {
        console.log(`${this.name} payed Water of ${billAmount}`);
        return `Account balance is ${this.balance -= billAmount}`;
    } else if(this.balance >= billAmount && service == this.tax) {
        console.log(`${this.name} payed Tax of ${billAmount}`);
        return `Account balance is ${this.balance -= billAmount}`;
    } else if(this.balance >= billAmount) {
        console.log(`${this.name} payed School fees of ${billAmount}`);
        return `Account balance is ${this.balance -= billAmount}`;
    }
}

// Account balance function
function accountBalance() {
        return `${this.name} your account balance is : ${this.balance}.Shs`;
}

// Money despositing function
function deposit(amount) {
    return `${this.name}, you have deposited ${amount}\n${this.name}, your account balance is :${this.balance += amount}`;
}

// Withdraw money function
function withdraw(amount) {
    if (this.balance >= amount) {
        return `${this.name} you have withdrawn: ${amount}\n${this.name} your acount balance is: ${this.balance-=amount}`
    } else if(this.balance > amount) {
            return `No enough cash on your account :: Account balance is: ${this.balance}.Shs`;
    }
}

// Deleted user account function
function deleteAccount() {
    var username = this.name;
    var foundAcc = accountStorage.indexOf(accountStorage[username]);
    if(foundAcc != username) {
            accountStorage.splice(foundAcc,1);
            return `${this.name}, your account is deletd`;
        } else {
            return false;
    }
}

// Helper function for find data such as account names,account number etc...
function find(data) {
    var foundAt = accountStorage.indexOf(data);
    if(foundAt > -1) {
        return true;
    } else {
        return false;
    }
}

// Transfer money function from one account tot another
function transferMoney(from,amount) {
    from = this.accNumber;
    var foundAt = accountStorage.indexOf(accountStorage[from]);
    if (this.balance < amount && foundAt != from) {
        return 'insufficient balance';
    } else {
        this.balance += amount;
        return `${this.name},you have received ${amount}, now your account balance is: ${this.balance}`;
    }

}

// Constructor function instances
var user1 = new User("Bomboka Alex",45,"Kampala","F","071678","passwd");
var user2 = new User("Ronnie Kings",57,"Amuru","F","070678","passwd")
var user3 = new User("Ashiraf Kings",57,"Amuru","F","074678","passwd")
var user4 = new User("Ashiraf Kings",57,"Amuru","F","077678","passwd")
user1.createAccount();
user1.deposit(50000)
user2.createAccount();
console.log(user2.deposit(50000))
console.log(user2.withdraw(5999))
console.log(user2.transferMoney("071678",500))