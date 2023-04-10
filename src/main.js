//declare two number variables
var a = 1;
var b = 2;
// union type declaration: either string or number
var album;
//assign it to a string value
album = "this is a string";
//reasign it to a number value, no error
album = 2;
// a variable has more than two types
var isActive;
// regular expression data type
var regExp = /\w+/g;
//a function that take 2 numbers and returns a number
var sum = function (a, b) {
    return a + b;
};
//string type array
var stringArray = ["one", "two", "three"];
//object type array
var objArray = [
    { name: "quan", age: 25 },
    { name: "long", age: 54 },
];
//mixed type array
var mixTypeArr = ["String", 32, true];
mixTypeArr.push(false);
//declaration of a tuple:
var tuple1 = ["string", 1];
var tuple2 = [1, "this is a string"];
var mixed = ["string2", 3];
//this is valid because tuple1 and mixed both take the same type of values,
//but it could be invalid if we assign tuple1 with a different type tuple.
tuple1 = mixed;
//OBJECT data type
//1st way, this will implicitly declare the type for each object attribute.
var obj = {
    name: "Quan",
    age: 23,
};
var person = {
    name: "quan",
    age: 3,
    phoneNum: [23 || "123", "this is also a string", 2],
};
var optional = {
    //note that there is no name attribute here but no error message
    address: "123 Big Horn Street",
};
var displayName = function (person) {
    return "Hello ".concat(person.name);
};
var userId = "user id" || 2;
var boolOrArray2 = [2, 2];
//literal types:
var nameType;
//nameType can only take one of the above types.
nameType = "Doe";
var mathFunction = function (a, b) {
    return a + b;
};
//optional parameters
var addAll = function (a, b, c) {
    if (typeof c === "undefined")
        return a + b;
    return a + b + c;
};
//default parameters
var sumAll = function (a, b, c) {
    if (a === void 0) { a = 1; }
    if (b === void 0) { b = 2; }
    //default value of a and b  if not specified is 1 and 2 in all cases
    if (typeof c === "undefined") {
        return a + b;
    }
    return a + b + c;
};
sumAll(); // this returns 3 b/c a and b default values sum is 3 and c undefined
