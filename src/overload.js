"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(x, y) {
    return x + y;
}
function example(callback) { }
example(() => { });
example((e, r) => { });
example(() => true);
//add(1, '2')
function a(x) {
    return 0;
}
//a함수를 b타입에 대입가능
//b가 a보다 넓은 타입
//a->b T<a> -> T<b>
let b = a;
function a1(x) {
    return 0;
}
//a1함수가 b1보다 넓은 타입
//b->a T+
//let b1: B1 = a1;
function a2(x) {
    return 0;
}
//a2가 b2가 더 넓은 타입
//b2->a2
//T<A> -> T<B>
//매개변수에서는 반공변성을 띈다
let b2 = a2;
function a3(x) {
    return 0;
}
