// #########Typescript Variables #########

// ======== Type Declaration =======
let x : string; // type declaration for variable
let y : never; // assigning never type to variable means it will never be assigned a value
let z : number | string | boolean = 1234; // Declares a variable 'z' that can hold a value of type number, string, or boolean.
// Initially, 'z' is assigned the number 1234.
z = "Hello World"; // Now, 'z' is assigned a string value

console.log(z); 

// ======== Typescript Arrays =======

let ar1 = [1, 2, 3, 4, 5]; // Declares an array of numbers
let ar2 = ["Hello", "World"]; // Declares an array of strings
let ar3 = [1, 2, 3, "Hello", true]; // Declares an array of mixed types
