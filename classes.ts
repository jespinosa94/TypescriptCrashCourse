
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

/***** Inheritance ******/
/*
class Member extends User {
    id: number;

    constructor(id: number, name: string, email:string, age:number) {
        super(name, email, age);    //obligatorio, ejecuta el constructor padre
        this.id=id;
    }

    public payInvoice() {
        super.payInvoice();
    }
}

let mike: User = new Member(1, 'Mikel', 'mikey@gmail.com', 33);
mike.payInvoice();
*/


/** Con interfaces */
interface UserInterface {
    name: string;
    email: string;
    age: number;
    register();
    payInvoice();
}

class User implements UserInterface{
    //properties
    public name: string;
    public email: string;
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