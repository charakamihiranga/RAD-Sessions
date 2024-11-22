/**
 * This function performs a specific task in TypeScript.
 * 
 * TypeScript functions are blocks of code designed to perform a particular task.
 * They are defined using the `function` keyword followed by the function name, 
 * a list of parameters enclosed in parentheses, and a block of code enclosed in curly braces.
 * 
 * Functions can accept parameters and return values. The type of each parameter and the return type 
 * can be explicitly specified to ensure type safety. TypeScript also supports optional parameters, 
 * default parameters, and rest parameters.
 * 
 * Example:
 * ```typescript
 * function add(a: number, b: number): number {
 *   return a + b;
 * }
 * ```
 * 
 * In the example above, the `add` function takes two parameters of type `number` and returns a value of type `number`.
 * 
 * TypeScript also supports arrow functions, which provide a shorter syntax for writing functions.
 * 
 * Example:
 * ```typescript
 * const multiply = (a: number, b: number): number => a * b;
 * ```
 * 
 * In this example, the `multiply` function is defined using arrow function syntax.
 * 
 * Functions are a fundamental building block in TypeScript and are used to encapsulate logic, 
 * promote code reuse, and improve code organization.
 */


// function add(x: number, y:number) : number{ //(parameters):number :- used to specify the return type of the function
//     if (x > 10) {
//         return x + y;
//     } else {
//         return x;
//     }
// }

// console.log(add(20, 10));

// with default parameters

function greet(name: string = 'World') {
    return `Hello, ${name}!`;
}

// console.log(greet()); // Output: Hello, World!
// console.log(greet('Charaka')); // Output: Hello, Charaka!

// calling function inside another function
// function calculate(
//     n1: number,
//     n2: number,
//     calcFn: (x: number, y: number) => number
// ){
//     const result = calcFn(n1, n2);
//     return result;
// }

//exercise 

// function calculate(
//     n1: number,
//     n2: number,
//     calcFn: calcFn
// ){
//     const result = calcFn(n1, n2);
//     return result;
// }

// type calcFn = (a: number, b: number) => number; // used to define the type of the function

// function subtract(a: number, b: number): number {
//     return a - b;
// }

// function multiply(a: number, b: number): number {
//     return a * b;
// }

// console.log('add: ',calculate(20, 20, add)); 
// console.log('subtract: ',calculate(10, 5, subtract));
// console.log('multiply; ',calculate(10, 5, multiply));


// Arrow functions

type calcFn = (a: number, b: number) => number;

const add = (a: number, b: number): number => {
    return a + b;
}

const subtract = (a: number, b: number): number => {
    return a - b;
}

const multiply = (a: number, b: number): number => {
    return a * b;
}

function calculate(
    n1: number,
    n2: number,
    calcFn: calcFn
){
    const result = calcFn(n1, n2);
    return result;
}

console.log('add: ',calculate(20, 20, add));
console.log('subtract: ',calculate(10, 5, subtract));
console.log('multiply; ',calculate(10, 5, multiply)); 

