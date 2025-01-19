"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let n = ["hi"];
n = [123];
let n1 = ["hi"];
let n2 = ["hi"];
function test(a) {
    const b = a;
}
function example(a, b, c = false) { }
example("hi", 123, true);
example("hi", 123);
example("hi");
function example1(a, ...b) { }
example1("hi", 123, 4, 5, 6);
//function example2(...a: string[],b:number) {}
function example3(...args) { }
example3(1, "1", false);
function example4() {
    console.log(this);
}
function example5(a, b) { }
//example5('hello', 'this')
example5.call(document, "hello", "this");
