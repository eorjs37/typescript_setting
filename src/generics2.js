"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function identify(args) {
    return args;
}
let output = identify("ddd");
let outputnum = identify(1);
//error
function loggingIdentity1(arg) {
    //T타입에는 length 속성이 없다. 사용할 경우 타입좁히기로 처리
    if (typeof arg === "string") {
        console.log(arg.length);
    }
    return arg;
}
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
loggingIdentity([1, 2, 3]);
//제네릭 타입
function identity1(arg) {
    return arg;
}
let myIdentity = identity1;
// 타입변수명 변경 가능
let myIdentity2 = identity1;
// 객체 리터럴 형식으로도 표현 가능
let myIdentity3 = identity1;
function identity2(arg) {
    return arg;
}
let myIdentity4 = identity2;
let myIdentity5 = identity2;
function loggingIdentity2(args) {
    console.log(args.length);
    return args;
}
//Number에는 length 속성이 존재 하지 않음
//loggingIdentity2(22);
loggingIdentity2("22");
