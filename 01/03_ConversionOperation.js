let score = "33ABC"
let scoreNull= null;
let scoreUndefined; // undefined
let isLoggedIn1 = true; // boolean

console.log(typeof(score)); // string

let valueInNumber = Number(score); // convert string to number
let valueInNumberNull=Number(scoreNull); // convert null to number
let valueInNumberUndefined=Number(scoreUndefined); // convert undefined to number
let valueInNumberBoolean=Number(isLoggedIn1); // convert boolean to number

console.log(typeof(valueInNumber) + " " + valueInNumber); // number NaN
console.log(typeof(valueInNumberNull) + " " + valueInNumberNull); // number 0
console.log(typeof(valueInNumberUndefined) + " " + valueInNumberUndefined); // number NaN
console.log(typeof(valueInNumberBoolean) + " " + valueInNumberBoolean); // number 1

let isLoggedIn ="kapil";
let isLoggedInBoolean = Boolean(isLoggedIn); // convert number to boolean
console.log(typeof(isLoggedInBoolean) + " " + isLoggedInBoolean); // boolean true

// 1 => true
// 0 => false
// "" => false

let Marks = 99;
let MarksString = String(Marks); // convert number to string
console.log(typeof(MarksString) + " " + MarksString); // string 99