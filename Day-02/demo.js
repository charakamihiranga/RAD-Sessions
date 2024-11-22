// #########Typescript Variables #########
// ======== Type Declaration =======
var x; // type declaration for variable
var y; // assigning never type to variable means it will never be assigned a value
var z = 1234; // Declares a variable 'z' that can hold a value of type number, string, or boolean.
// Initially, 'z' is assigned the number 1234.
z = "Hello World"; // Now, 'z' is assigned a string value
console.log(z);
// ======== Typescript Arrays =======
var ar1 = [1, 2, 3, 4, 5]; // Declares an array of numbers
var ar2 = ["Hello", "World"]; // Declares an array of strings
var ar3 = [1, 2, 3, "Hello", true]; // Declares an array of mixed types
var ar4 = [];
// let ar5 = any[]=[]; 
var ar6; // Declares an array of strings
ar6 = ["Hello", "World"];
function printarray(ar) {
    ar.forEach(function (element) {
        console.log(element);
    });
}
// printarray(ar2); // string [] not support
printarray(ar1);
