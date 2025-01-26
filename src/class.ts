class Animal {
  move(distanceInMeters: number = 0) {
    console.log(`Animal moved ${distanceInMeters}m.`);
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof! Woof!");
  }
}
const dog = new Dog();

dog.bark();
dog.move(10);

class Aniaml2 {
  name: string;
  constructor(theName: string) {
    this.name = theName;
  }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

class Snake extends Aniaml2 {
  constructor(name: string) {
    super(name);
  }
  override move(distanceInMeters = 5): void {
    console.log("Slithering...");
    super.move(distanceInMeters);
  }
}

class Horse extends Aniaml2 {
  constructor(name: string) {
    super(name);
  }
  override move(distanceInMeters = 45): void {
    console.log("Galloping...");

    super.move(distanceInMeters);
  }
  hoserRun() {}
}

let sam = new Snake("Sammy the pyThon");
let tom = new Horse("Tommy the Palomino");
sam.move();
tom.move(34);
tom?.hoserRun();

class Person {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Employee extends Person {
  private department: string;
  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }
  getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}

const howred = new Employee("Howard", "Sales");
howred.getElevatorPitch();
//error
//howred.name

class Octopus {
  readonly name: string;
  readonly numberOfLegs: number = 8;
  constructor(theName: string) {
    this.name = theName;
  }
}
let dad = new Octopus("Man with the 8 strong legs");
//error
//dad.name ='ddd'
export {};
