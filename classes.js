/*
class User {
    //properties
    private name: string;
    private email: string;
    public age: number;

    //constructor
    constructor(name: string, email:string, age:number) {
        this.name=name;
        this.email=email;
        this.age=age;
        console.log('User created successfully: ' + this.name);
    }

    //methods
    public register() {
        console.log(this.name + ' is now registered');
    }
    public payInvoice() {
        console.log(this.name + ' paid invoice');
    }
}

let john = new User('John', 'johhnyBoy@gmail.com', 22);

console.log(john.age);
john.register();
*/
var User = (function () {
    //constructor
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log('User created successfully: ' + this.name);
    }
    //methods
    User.prototype.register = function () {
        console.log(this.name + ' is now registered');
    };
    User.prototype.payInvoice = function () {
        console.log(this.name + ' paid invoice');
    };
    return User;
}());
var john = new User('John', 'johhnyBoy@gmail.com', 22);
console.log(john.age);
john.register();
