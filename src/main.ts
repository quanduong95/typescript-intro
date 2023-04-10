//declare two number variables
const a: number = 1;
const b: number = 2;

// union type declaration: either string or number
let album: string | number;

//assign it to a string value
album = "this is a string";
//reasign it to a number value, no error
album = 2;

// a variable has more than two types
let isActive: string | boolean | number;

// regular expression data type
let regExp: RegExp = /\w+/g;

//a function that take 2 numbers and returns a number
const sum = (a: number, b: number): number => {
  return a + b;
};

//string type array
let stringArray: string[] = ["one", "two", "three"];

//object type array
let objArray: object[] = [
  { name: "quan", age: 25 },
  { name: "long", age: 54 },
];

//mixed type array
let mixTypeArr: (string | number | boolean)[] = ["String", 32, true];

mixTypeArr.push(false);


//declaration of a tuple:
let tuple: [string, number] = ['string', 1];
 
