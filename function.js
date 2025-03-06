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
