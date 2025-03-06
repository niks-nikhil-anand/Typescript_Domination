// Union is type of combination of two or more that two types of data .
// use inPlace of any

let score: number | string = 44

score = 55
score = "55"

type User = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

let newUser:User | Admin = {
    name: "Nikhil",
    id: 1234
}

newUser = {
    username: "hello@",
    id: 1234
}


function getIdDB(id:string | number):void{
    console.log(id)
}

getIdDB(4)
getIdDB("78")

function getDB(id: string | number):void{
    if(typeof id === "string") id.toLocaleLowerCase()
    console.log(id)
}

// Array

const data1: string[] = ["ab" , "bc" , "cd"];
const data2: number[] = [1 , 2, 3]

// const data3: number[] | string[] = [1, "2"] wrong 
// Either a array of Number or array of String

const data3: number[] | string[] = [1 , 2 , 3]
const data4: number[] | string[] = ["1" , "2" , "3"]

// If u include more than one type of data types in an array , 

const data5: (number | string | boolean)[] = [1 , "2" , true]


// Literal type of assignments 
const pi:3.14 = 3.14;

// pi = 3.15  not possible 


let seatAllotment: "aisle" | "window" | "middle"

seatAllotment = "aisle"

// seatAllotment = "crew" not possible

