/** =============== Typescript Objects =======================
 * TypeScript objects are collections of key-value pairs, where the keys are strings or symbols and the values can be of any type.
 * Objects in TypeScript are similar to objects in JavaScript, but with the added benefit of type checking.
 *
 * You can define the shape of an object using an interface or a type alias. This allows you to specify the types of the properties
 * that the object can have, making your code more predictable and easier to debug.
 *
 * Example of defining an object type using an interface:
 *
 * interface Person {
 *   name: string;
 *   age: number;
 *   isStudent: boolean;
 * }
 *
 * const person: Person = {
 *   name: "John Doe",
 *   age: 25,
 *   isStudent: true
 * };
 *
 * Example of defining an object type using a type alias:
 *
 * type Car = {
 *   make: string;
 *   model: string;
 *   year: number;
 * };
 *
 * const car: Car = {
 *   make: "Toyota",
 *   model: "Corolla",
 *   year: 2020
 * };
 *
 * By using interfaces or type aliases, you can ensure that objects conform to a specific structure, which helps prevent errors
 * and improves code readability.
 */
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var person = {
    fName: "Charaka",
    address: "Matara",
    tele: 123
};
console.log(person);
console.log(person.fName);
var obj = {
    a: 10,
    b: 20
};
var a = obj.a, b = obj.b;
console.log(a, " ", b);
var obj2 = {
    x: 10,
    y: 20,
    z: {
        d: 10,
        e: 20
    }
};
var x = obj2.x, y = obj2.y, z = obj2.z;
var _a = obj2.z, d = _a.d, e = _a.e;
console.log(x, " ", y, " ", z.d);
console.log(d, " ", e);
