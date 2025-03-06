const user = {
    name : "Nikhil",
    email : "niks.anand@gmail.com",
    isActive : true
}

function createUsers(name:string , email:string , dob:Date):void{
    console.log(`Name - ${name} , email - ${email} , Date Of Birth - ${dob}`) 
}

createUsers("Nikhil" , "nikhil@gmail.com" , new Date("2025-6-03"))

// Syntax 
// function NameOfFUnction(arguments):{}{
//     return {}
// }

function createdUser({ name, email, isPaid }: { name: string, email: string, isPaid: boolean }) {
    // Your logic here
}

function course():{name:string , price:number}{
    return {name:"Nikhil" , price:999}
}

// Odd Behaviour of typescript

function marvel({ name, email }: { name: string; email: string }) {
    console.log(`Name of the Marvel hero: ${name} and email: ${email}`);
}

const Hero = {
    name: "Thor",
    email: "thor@gmail.com",
    age: 200, // Extra properties will be ignored
};

// Correct function call
marvel(Hero);



export {}
