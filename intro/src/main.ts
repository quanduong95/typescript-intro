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
let tuple1: [string, number] = ["string", 1];
let tuple2: [number, string] = [1, "this is a string"];
let mixed: [string, number] = ["string2", 3];

//this is valid because tuple1 and mixed both take the same type of values,
//but it could be invalid if we assign tuple1 with a different type tuple.
tuple1 = mixed;

//OBJECT data type
//1st way, this will implicitly declare the type for each object attribute.
const obj: object = {
  name: "Quan",
  age: 23,
};

//or using interface or type instead
type Person = {
  name: string;
  age: number;
  phoneNum: (number | string)[];
};

let person: Person = {
  name: "quan",
  age: 3,
  phoneNum: [23 || "123", "this is also a string", 2],
};

//optional => could be undefined
type Optional = {
  name?: string; // the name attribute is optional
  address: string;
};

let optional: Optional = {
  //note that there is no name attribute here but no error message
  address: "123 Big Horn Street",
};

let displayName = (person: Person): string => {
  return `Hello ${person.name}`;
};

//Type aliases:
type StringOrNumber = string | number;
type BooleanOrArray = boolean | number[] | (boolean | number)[];

// we can also do this:
type UserId = StringOrNumber;

let userId: UserId = "user id" || 2;


let boolOrArray2: BooleanOrArray = [2, 2];

//literal types:
let nameType: "John" | "Doe" | "Daven";

//nameType can only take one of the above types.
nameType = "Doe";

//function alias type:
type MathFunction = (a: number, b: number) => number;

let mathFunction: MathFunction = (a: number, b: number) => {
  return a + b;
};

//optional parameters
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c === "undefined") return a + b;
  return a + b + c;
};

//default parameters
const sumAll = (a: number = 1, b: number = 2, c?: number): number => {
  //default value of a and b  if not specified is 1 and 2 in all cases
  if (typeof c === "undefined") {
    return a + b;
  }
  return a + b + c;
};

sumAll(); // this returns 3 b/c a and b default values sum is 3 and c undefined


//type Assertions
type One = string
type Two = string | number
type Three = 'hello'

let a1: One = 'hello1';
let b1 = a1 as Two;
b1 = 2;


