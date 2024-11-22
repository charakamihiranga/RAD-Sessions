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
function greet(name) {
    if (name === void 0) { name = 'World'; }
    return "Hello, ".concat(name, "!");
}
var add = function (a, b) {
    return a + b;
};
var subtract = function (a, b) {
    return a - b;
};
var multiply = function (a, b) {
    return a * b;
};
function calculate(n1, n2, calcFn) {
    var result = calcFn(n1, n2);
    return result;
}
console.log('add: ', calculate(20, 20, add));
console.log('subtract: ', calculate(10, 5, subtract));
console.log('multiply; ', calculate(10, 5, multiply));
