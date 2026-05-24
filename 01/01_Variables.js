const accountId = 1234567890;
let accountName = "Kapil Yadav";

//use of let and var to declare variables
let isLoggedIn = true; 
var score = 100;
// const is used to declare variables that cannot be reassigned
const pi = 3.14;
// variables declared with var are function-scoped, while variables declared with let and const are block-scoped
if (true) {
    var score = 200; // this will overwrite the previous value of score 
    let isLoggedIn = false; // this will not affect the previous value of isLoggedIn
    console.log(score); // 200
    console.log(isLoggedIn); // false
}
