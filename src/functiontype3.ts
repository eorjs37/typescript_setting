// function destruccturing({ prop: { nested: string } }) { }

function destruccturing({ prop: { nested } }: { prop: { nested: string } }) {}

function example1() {
  // console.log(this);
}

function example2(this: Window) {
  console.log(this);
}

function example3(this: Document, a: string, b: "this") {}
example3.call(document, "hello", "this");
export {};
