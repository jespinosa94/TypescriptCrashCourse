let myString: string;
let myNum: number;
let myBool: boolean;
let myVar: any;

/****** Arrays ******/
/*let strArr: string[];
let numArr: number[];
let boolArr: boolean[];*/
let strArr: Array<string>;
let numArr: Array<number>;
let boolArr: Array<boolean>;

/****** Tuples ******/
let strNumTuple: [string, number];

myString = 'Hello ' + 'World';
myString = myString.slice(0,3);
myNum = 0xf00d;
myBool = true;
myVar = true;

strArr = ['Hello', 'Wrold'];
numArr = [1, 2, 3];
boolArr = [true, false, false, true];

strNumTuple = ['Hello', 1, 5, 5, 3, 2]; 
//Una vez que se cumple el patrón definido para la variable se puede añadir lo que sea y no da error
//porque lo va a tratar como una unión

let myVoid: void = null;
let myUndefined: undefined = undefined;
let myNull: null = null;

console.log(myVoid);