class Human {
  eat() {
    console.log("eat");
  }
  sleap() {
    console.log("sleap");
  }
}

class Employee extends Human {
  override sleap(): void {
    console.log("111");
  }
}

class Signature {
  [propname: string]: string | number | undefined;
  static [propname: string]: boolean;
}

class A {
  callbackWithThis(cb: (this: this) => void) {
    cb.call(this);
  }
}

interface PersonConstructor {
  new (name: string, age: number): {
    name: string;
    age: number;
  };
}

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

function createPerson(ctor: PersonConstructor, name: string, age: number) {
  return new ctor(name, age);
}
abstract class AbstractPerson {
  name: string;
  age: number;
  married: boolean = false;
  abstract value: number;

  constructor(name: string, age: number, married: boolean) {
    this.name = name;
    this.age = age;
    this.married = married;
  }

  sayName() {
    console.log(this.name);
  }

  abstract sayAge(): void;
  abstract sayMarried(): void;
}

class RealPerson extends AbstractPerson {
  override value: number;
  override sayAge(): void {
    throw new Error("Method not implemented.");
  }
  override sayMarried(): void {
    throw new Error("Method not implemented.");
  }
}
export {};
