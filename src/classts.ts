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
export {};
