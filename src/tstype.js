"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 문자열
let str = "string";
//숫자
let num = 123;
//불린
let bool = false;
//object
let obj = { a: 1 };
//array : 제네릭 형태로 선언도 가능하다
let numarray = [1, 2, 3];
let numarray2 = [1, 2, 3];
//tuple : 고정된 배열에서 각각의 요소에 타입을 정의
let tuple = ["str", 1, false];
//tuple error : 각 요소에 선언된 타입과 다를 경우 에러를 뱉는다
//let tupleError: [string, number, boolean] = ["str", 1, "1"];
//enum : 열거형으로, 상수들의 집합
var COMMON;
(function (COMMON) {
    COMMON[COMMON["USER"] = 0] = "USER";
    COMMON[COMMON["GUEST"] = 1] = "GUEST";
    COMMON[COMMON["MASTER"] = 2] = "MASTER";
})(COMMON || (COMMON = {}));
//null : 값이 없는 형태
let valuenull = null;
//undefined : 값이 할당되지 않는 상태
let valueUndefined = undefined;
//any : 모든 타입을 혀용(되도록이면 쓰지 않는것을 권장)
let anything;
anything = 1;
anything = true;
anything = "str";
//void : 함수에서 쓰이며 리턴값이 없는 경우
function func() {
    console.log("call func");
    //error 일으킴
    //return 1;
}
//never : 보통 함수에서 사용되며, 에러를 일으킬때 사용
function errorFunc() {
    throw Error("ERROR");
}
//unknwon : 알려지지 않는 타입이며, 어느 타입이든 들어갈 수 있다. 다만 다른 타입에 unknown 값을 넣을 경우 에러를 일으킴
let un;
un = 1;
un = 2;
un = bool;
un = anything;
