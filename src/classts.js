"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Human {
    eat() {
        console.log("eat");
    }
    sleap() {
        console.log("sleap");
    }
}
class Employee extends Human {
    sleap() {
        console.log("111");
    }
}
class Signature {
}
class A {
    callbackWithThis(cb) {
        cb.call(this);
    }
}
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
function createPerson(ctor, name, age) {
    return new ctor(name, age);
}
class AbstractPerson {
    constructor(name, age, married) {
        this.married = false;
        this.name = name;
        this.age = age;
        this.married = married;
    }
    sayName() {
        console.log(this.name);
    }
}
class RealPerson extends AbstractPerson {
    sayAge() {
        throw new Error("Method not implemented.");
    }
    sayMarried() {
        throw new Error("Method not implemented.");
    }
}
