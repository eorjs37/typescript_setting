"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//
function genricType(arg) {
    return arg;
}
//제네릭은 단일타입이 아닌 다양항 타입에 작동할 수 있도록 하는 기능이다
let output1 = genricType(1);
let output2 = genricType("1");
let output3 = genricType(false);
function genricType1(arg) {
    //단 any와 다른 점은 인자의 멤버가 없는 경우 오류를 일으킨다
    //console.log(arg.length);
    return arg;
}
//만약 쓰고 싶다면 length속성이 있는 것으로 변경한다(ex 배열형태)
function genricType2(arg) {
    console.log(arg.length);
    return arg;
}
//any타입은 타입쓰는것을 포기했다는 것이다
function anyType(arg) {
    console.log(arg.length);
    return arg;
}
//제네릭 타입
function genricType3(arg) {
    return arg;
}
//제네릭 함수 타입
let myFunction = genricType3;
myFunction(1);
//리터럴 타입
let myFunction2 = genricType3;
let myFunction3 = genricType3;
let myFunction4 = genricType3;
//제네릭 클래스
class GenericNumber {
}
let numberGenric = new GenericNumber();
numberGenric.zeroValue = 0;
numberGenric.add(1, 2);
//제네릭 타입 제한
function logFn(arg) {
    // 타입의 제한이 없기때문에, number 가 들어올경우 length 속성이 없어서 오류를 뱉음
    //console.log(arg.length)
    return arg;
}
// extends를 통해서 타입의 제한을 걸 수 있다.
function logFnConstraints(arg) {
    console.log(arg.length);
    return arg;
}
logFnConstraints("3");
//다른 곳에서 선언된 제네릭타입을 타입으로 선언가능
function getProperty(obj, key) {
    //
}
let x = { a: 1, b: 2, c: 3 };
getProperty(x, "a");
