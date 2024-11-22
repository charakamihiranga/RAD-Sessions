// ====== Typescript classes ======

// In TypeScript, a class is a blueprint for creating objects with specific properties and methods. 
// Classes allow you to define the structure and behavior of objects in a more organized and reusable way. 
// A class can contain properties (variables) and methods (functions) that define the characteristics and actions of the objects created from the class.
// TypeScript classes support features like inheritance, encapsulation, and polymorphism, which are fundamental concepts in object-oriented programming (OOP).
// In the provided code, the `Student` class has properties like `name`, `address`, and `id`, and methods to set and get these properties.
// The `setName`, `setAddress`, and `setId` methods are used to assign values to the properties, while the `getName`, `getAddress`, and `getId` methods are used to retrieve these values.
//


class Demo{
    private myVar : string

    constructor(myVar : string){
        this.myVar = myVar;
    }

    getMyVar() : string {
        return this.myVar;
    }

    setMyVar(str: string): void{
        this.myVar = str;
    }

}

const demo = new Demo("Hello world");

console.log(demo);

const result = demo.getMyVar();
console.log(result);

class Student{

    private id: number;
    private name: string;
    private address: string;

    setId(id:number):void{
        this.id = id;
    }
    setName(name:string):void{
        this.name = name;
    }
    setAddress(address:string):void{
        this.address = address;
    }

    getId():number{
        return this.id;
    }
    getName():string{
        return this.name;
    }
    getAddress():string{
        return this.address;
    }

}

const student = new Student();

student.setId(1);
student.setName("Charaka");
student.setAddress("Matara");

console.log(student.getId());
console.log(student.getName());
console.log(student.getAddress());

// ts  interface
interface Icustomer {
    id : number,
    name : string,
    tel : string
}

class SimpleCustomer implements Icustomer{
    id : number;
    name : string;
    tel : string;
}
class VIPCustomer implements Icustomer{
    id : number;
    name : string;
    tel : string;
    membershipNumber: string;
}