// Any is red flag in the function
// In case of vaibale type annotation is optional , it automatically deducts
// but in case of function , it compulsory


function addTwo(num: number) {
    return num + 2;
}
addTwo(6);


function toLower(letter: string) {
    letter.toLowerCase()
}

toLower("This is Nikhil Anand")


function SignUpUser(name: string, email: string, password: string) { }
SignUpUser("Nikhil", "nikhil@gmail.com", "Nikhil1roy")


// How to set the default value of arguments?
let LoginUser = (name: string, email: string, isPaid: boolean = false) => { }

LoginUser("Nikhil", "nikhil@gmail.com")


// Day 02


// Annotate the return type of the function

function sumTwoNumber(num1: number, num2: number): number {
    return num1 + num2;
    // return "hello world";
}


// Arrow function
const hero = (s: string): string => {
    return "thor"
}


const heros = ["thor", "spiderMan", "IronMan", "HawkEye"]
heros.map((hero) => {
    return `This is ${hero}`
})

// This is better syntax when you are collaborating with the team.
heros.map((hero: string): string => {
    return `This is ${hero} with the typescript annotation`
})




// Final Part of the functions
// Void represents the return value of functions which don't return a value
function consoleError(errorMsg: string): void {
    console.log(errorMsg)
}

// The Never Type represents values which are never observed .In a return type , this means that the functions 
// throws an exception or termination execution of the program.
// Recommend in the guideline of the Typescript Documentation
function handleError(errorMsg: string): never {
    throw new Error(errorMsg)
}
export { }

