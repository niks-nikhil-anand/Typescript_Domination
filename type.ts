//  Types in Tyepscript
// String , Number , Boolean 
// Null , undefined , Void 
// Object , Array , Tuples 
// Any , Never , unknown 

// syntax 
// let variableName:type = value 

// In typescript all types is in the lowercase 

// The Primitive: string , boolean , number 

let num: number = 999;

let isLoggedIn:boolean = true;

let isString: "This is Nikhil , leaning Typescript"

// here , we are doing redundant work , typescript automatically deducts the types of the variable , 
// so , its not a good practice.

// any - A special Type
// Typescript has a special type , any , that you can we use whenever you don't want any particulr value 
// to typeChecking error.

let hero;

function getHero(){
    return "thor"
}
hero = getHero();


// here , I don,t specify the type of "hero" var , and typescript can't refer from my context  the complier will typically 
// deafult to any;

// And you usally want to avoid this , though , because "any" isn't type checked .
// Use the complier flag "noImplicitAny" to flag any implicit any as an error.


