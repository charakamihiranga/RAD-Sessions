// #########Typescript Variables #########
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// ======== Type Declaration =======
var x; // type declaration for variable
var y; // assigning never type to variable means it will never be assigned a value
var z = 1234; // Declares a variable 'z' that can hold a value of type number, string, or boolean.
// Initially, 'z' is assigned the number 1234.
z = "Hello World"; // Now, 'z' is assigned a string value
// console.log(z); 
// ======== Typescript Arrays =======
var ar1 = [1, 2, 3, 4, 5]; // Declares an array of numbers
var ar2 = ["Hello", "World"]; // Declares an array of strings
var ar3 = [1, 2, 3, "Hello", true]; // Declares an array of mixed types
var ar4 = [];
// let ar4 =[1,2,3] // cannot declare empty array and assign values later
var ar5 = []; // Declares an array of any type
var ar6; // Declares an array of strings
ar6 = ["Hello", "World"];
function printarray(ar) {
    ar.forEach(function (element) {
        console.log(element);
    });
}
// printarray(ar2); // string [] not support
// printarray(ar1);
// merge two arrays
var ar7 = ['a', 'b', 'c'];
var ar8 = ['d', 'e', 'f'];
// ar7.push(...ar8);
// console.log(ar7);
var ar9 = __spreadArray(__spreadArray([], ar7, true), ar8, true);
console.log(ar9);
