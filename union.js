// Union is type of combination of two or more that two types of data .
// use inPlace of any
var score = 44;
score = 55;
score = "55";
var newUser = {
    name: "Nikhil",
    id: 1234
};
newUser = {
    username: "hello@",
    id: 1234
};
function getIdDB(id) {
    console.log(id);
}
getIdDB(4);
getIdDB("78");
function getDB(id) {
    if (typeof id === "string")
        id.toLocaleLowerCase();
    console.log(id);
}
// Array
var data1 = ["ab", "bc", "cd"];
var data2 = [1, 2, 3];
// const data3: number[] | string[] = [1, "2"] wrong 
// Either a array of Number or array of String
var data3 = [1, 2, 3];
var data4 = ["1", "2", "3"];
// If u include more than one type of data types in an array , 
var data5 = [1, "2", true];
// Literal type of assignments 
var pi = 3.14;
// pi = 3.15  not possible 
var seatAllotment;
seatAllotment = "aisle";
// seatAllotment = "crew" not possible
