"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: "Nikhil",
    email: "niks.anand@gmail.com",
    isActive: true
};
function createUsers(name, email, dob) {
    console.log("Name - ".concat(name, " , email - ").concat(email, " , Date Of Birth - ").concat(dob));
}
createUsers("Nikhil", "nikhil@gmail.com", new Date("2025-6-03"));
// Syntax 
// function NameOfFUnction(arguments):{}{
//     return {}
// }
function createdUser(_a) {
    var name = _a.name, email = _a.email, isPaid = _a.isPaid;
    // Your logic here
}
function course() {
    return { name: "Nikhil", price: 999 };
}
// Odd Behaviour of typescript
function marvel(_a) {
    var name = _a.name, email = _a.email;
    console.log("Name of the Marvel hero: ".concat(name, " and email: ").concat(email));
}
var Hero = {
    name: "Thor",
    email: "thor@gmail.com",
    age: 200, // Extra properties will be ignored
};
// Correct function call
marvel(Hero);
