"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function a(x) {
    return 0;
}
//b가 a보다 넒은 타입
// a->b
let b = a;
function a1(x) {
    return 0;
}
//a1이 b1보다 넓은 타입
//b1->a1
//let b1: B1 = a1;
function a2(x) {
    return 0;
}
//a2가 b2보다 넓은 타입
//b2->a2
//T<a2>
let b3 = a2;
const sayFunc = (a) => "hello";
const MyAddingMethod = {
    //SayMethod.say가 sayFunc보다 넓은 타입
    say: sayFunc,
};
