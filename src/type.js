"use strict";
//문자열
let str = "hello";
//숫자
let num = 123;
//불린
let bool = true;
//객체
let user = { name: "choi", age: 32 };
//배열
let arr = [1, 2, 3];
let arrgen = [1, 2, 3];
//튜플(배열의 길이는 고정되고, 각 요소의 타입이 지정되어있는 형식)
let tuple = ["1", 2];
//정의되지 않는 타입은 오류
//tuple[5]=1;
//tuple[1].concat('1')
//enum
var Avengers;
(function (Avengers) {
    Avengers[Avengers["Capt"] = 0] = "Capt";
    Avengers[Avengers["IronMan"] = 1] = "IronMan";
    Avengers[Avengers["Thor"] = 2] = "Thor";
})(Avengers || (Avengers = {}));
let hero = Avengers.Capt;
//any(모든 타입에 사용할 수 있는 타입,any를 사용하면 타입추론이 힘듬)
//void(반환값이 없는 함수의 반환 타입)
function pringSomething() {
    console.log("sth");
}
function pringSomething2() {
    return;
}
//never(절대 발생하지 않는 값을 의미)
function invalid(message) {
    throw Error(message);
}
function callInvalid() {
    invalid("error");
    console.log("next");
}
callInvalid();
function infiniteLoop() {
    while (true) { }
    console.log("!");
}
function getShapeArea(shape) {
    switch (shape) {
        case "circle":
            return Math.PI * 1 * 1; // 예: 반지름이 1인 원
        case "square":
            return 1 * 1; // 예: 한 변이 1인 정사각형
        case "triangle":
            return 0.5 * 1 * 1; // 예: 밑변과 높이가 1인 삼각형
        case "hexagon":
            return 1;
        default:
            const _exhaustiveCheck = shape;
            throw Error(`Unhandled shape: ${_exhaustiveCheck}`);
    }
}
create({ prop: 0 });
create(null);
let anum = undefined;
anum = null;
//error
//create(1)
