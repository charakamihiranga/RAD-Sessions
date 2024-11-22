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
