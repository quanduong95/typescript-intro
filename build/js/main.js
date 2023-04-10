"use strict";
//declare two number variables
const a = 1;
const b = 2;
// union type declaration: either string or number
let album;
//assign it to a string value
album = "this is a string";
//reasign it to a number value, no error
album = 2;
// a variable has more than two types
let isActive;
// regular expression data type
let regExp = /\w+/g;
//a function that take 2 numbers and returns a number
const sum = (a, b) => {
    return a + b;
};
//string type array
let stringArray = ["one", "two", "three"];
//object type array
let objArray = [
    { name: "quan", age: 25 },
    { name: "long", age: 54 },
];
//mixed type array
let mixTypeArr = ["String", 32, true];
mixTypeArr.push(false);
//declaration of a tuple:
let tuple = ['string', 1];
