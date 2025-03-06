"use strict";
// Any is red flag in the function
// In case of vaibale type annotation is optional , it automatically deducts
// but in case of function , it compulsory
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
addTwo(6);
function toLower(letter) {
    letter.toLowerCase();
}
toLower("This is Nikhil Anand");
function SignUpUser(name, email, password) { }
SignUpUser("Nikhil", "nikhil@gmail.com", "Nikhil1roy");
// How to set the default value of arguments?
var LoginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
LoginUser("Nikhil", "nikhil@gmail.com");
// Day 02
// Annotate the return type of the function
function sumTwoNumber(num1, num2) {
    return num1 + num2;
    // return "hello world";
}
// Arrow function
var hero = function (s) {
    return "thor";
};
var heros = ["thor", "spiderMan", "IronMan", "HawkEye"];
heros.map(function (hero) {
    return "This is ".concat(hero);
});
// This is better syntax when you are collaborating with the team.
heros.map(function (hero) {
    return "This is ".concat(hero, " with the typescript annotation");
});
// Final Part of the functions
// Void represents the return value of functions which don't return a value
function consoleError(errorMsg) {
    console.log(errorMsg);
}
// The Never Type represents values which are never observed .In a return type , this means that the functions 
// throws an exception or termination execution of the program.
// Recommend in the guideline of the Typescript Documentation
function handleError(errorMsg) {
    throw new Error(errorMsg);
}
