/**
 * Enums in TypeScript are a way of giving more friendly names to sets of numeric values.
 * They allow you to define a set of named constants, which can make your code more readable
 * and maintainable.
 *
 * There are two types of enums in TypeScript:
 * - Numeric enums: These are the default, where each member is assigned a numeric value.
 * - String enums: These allow you to assign string values to each member.
 *
 * Example of a numeric enum:
 * enum Direction {
 *   Up = 1,
 *   Down,
 *   Left,
 *   Right
 * }
 *
 * Example of a string enum:
 * enum Direction {
 *   Up = "UP",
 *   Down = "DOWN",
 *   Left = "LEFT",
 *   Right = "RIGHT"
 * }
 *
 * Enums can also be used for bit flags, where each member is a power of two, allowing you
 * to combine them using bitwise operators.
 *
 * TypeScript enums are a powerful feature that can help you write more expressive and
 * maintainable code.
 */
var small = 1;
var medium = 2;
var large = 3;
var mySize = "a" /* Size.SMALL */;
console.log(typeof mySize);
console.log("a" /* Size.SMALL */);
console.log("b" /* Size.MEDIUM */);
console.log("c" /* Size.LARGE */);
