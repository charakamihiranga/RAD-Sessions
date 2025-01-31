// ====== Typescript classes ======
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// In TypeScript, a class is a blueprint for creating objects with specific properties and methods. 
// Classes allow you to define the structure and behavior of objects in a more organized and reusable way. 
// A class can contain properties (variables) and methods (functions) that define the characteristics and actions of the objects created from the class.
// TypeScript classes support features like inheritance, encapsulation, and polymorphism, which are fundamental concepts in object-oriented programming (OOP).
// In the provided code, the `Student` class has properties like `name`, `address`, and `id`, and methods to set and get these properties.
// The `setName`, `setAddress`, and `setId` methods are used to assign values to the properties, while the `getName`, `getAddress`, and `getId` methods are used to retrieve these values.
//
var Demo = /** @class */ (function () {
    function Demo(myVar) {
        this.myVar = myVar;
    }
    Demo.prototype.getMyVar = function () {
        return this.myVar;
    };
    Demo.prototype.setMyVar = function (str) {
        this.myVar = str;
    };
    return Demo;
}());
var demo = new Demo("Hello world");
console.log(demo);
var result = demo.getMyVar();
console.log(result);
var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.setId = function (id) {
        this.id = id;
    };
    Student.prototype.setName = function (name) {
        this.name = name;
    };
    Student.prototype.setAddress = function (address) {
        this.address = address;
    };
    Student.prototype.getId = function () {
        return this.id;
    };
    Student.prototype.getName = function () {
        return this.name;
    };
    Student.prototype.getAddress = function () {
        return this.address;
    };
    return Student;
}());
var student = new Student();
student.setId(1);
student.setName("Charaka");
student.setAddress("Matara");
console.log(student.getId());
console.log(student.getName());
console.log(student.getAddress());
var SimpleCustomer = /** @class */ (function () {
    function SimpleCustomer() {
    }
    return SimpleCustomer;
}());
var VIPCustomer = /** @class */ (function () {
    function VIPCustomer() {
    }
    return VIPCustomer;
}());
var Parent = /** @class */ (function () {
    function Parent(message) {
        console.log(message, 'from parent class');
    }
    Parent.prototype.myMethod = function (str) {
        console.log(str);
    };
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child(message) {
        var _this = _super.call(this, message) || this;
        _this.myMethod('hello');
        return _this;
    }
    return Child;
}(Parent));
var child1 = new Child("hello world");
// child1.myMethod('hello'); // protected only be accessed in subclass
