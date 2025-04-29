"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function padLeft(value, padding) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw Error(`Expected string or number, got ${padding}`);
}
function getSmallPet() {
    return {
        layEggs() { },
        swim() { },
    };
}
let pet = getSmallPet();
if (pet.fly) {
    pet.fly();
}
/* 사용자-정의 타입 가드 (User-Defined Type Guards)  */
// 타입 서술어 사용하기
function isFish(pet1) {
    return pet1.swim !== undefined;
}
if (isFish(pet)) {
    pet.swim();
}
else {
    pet.fly();
}
// in 연산자 사용하기
function move(pet) {
    if ("swim" in pet) {
        return pet.swim();
    }
    return pet.fly();
}
class SpaceRepeatingPadder {
    constructor(numSpaces) {
        this.numSpaces = numSpaces;
        this.numSpaces = numSpaces;
    }
    getPaddingString() {
        return Array(this.numSpaces + 1).join(" ");
    }
}
class StringPadder {
    constructor(value) {
        this.value = value;
    }
    getPaddingString() {
        return this.value;
    }
}
function getRandomPadder() {
    return Math.random() < 0.5
        ? new SpaceRepeatingPadder(4)
        : new StringPadder("  ");
}
// 타입은 'SpaceRepeatingPadder | StringPadder' 입니다
let padder = getRandomPadder();
if (padder instanceof SpaceRepeatingPadder) {
    padder;
}
if (padder instanceof StringPadder) {
    padder;
}
// 타입 가드와 타입 단언 (Type guards and type assertions)
function f(sn) {
    if (sn == null) {
        return "default";
    }
    else {
        return sn;
    }
}
// 선택적 매개변수와 프로퍼티
function f1(x, y) {
    return x + (y || 0);
}
f1(1, 2);
f1(1);
f1(1, undefined);
// f1(1, null); // strictNullChecks 체크함으로써, number | undefined에 할당 될 수 없다
// 타입가드와 타입단언
function f2(sn) {
    return sn || "default";
}
function getName(n) {
    if (typeof n === "string") {
        return n;
    }
    else {
        return n();
    }
}
const container = {
    value: {
        name: "",
        age: 30,
    },
};
var people = {
    name: "John",
    next: { name: "Doe", next: null },
};
var s = people.name;
var s1 = people.next.name;
var s2 = people.next.next.name;
