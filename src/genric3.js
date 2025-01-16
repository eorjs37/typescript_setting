"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//함수 표현식
const personFactoryE = (name, age) => ({
    type: "human",
    race: "yellow",
    name,
    age,
});
//함수 선언문
function personFactoryD(name, age) {
    return {
        type: "human",
        race: "yellow",
        name,
        age,
    };
}
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    method(param) { }
}
const personFactoryF = (name, age) => {
    return {
        type: "human",
        race: "yellow",
        name,
        age,
    };
};
//타입추론이 가능하다
const zero = personFactoryF("zero", 11);
//상수 타입 매개변수
function values(initial) {
    return {
        hasValue(value) {
            return initial.includes(value);
        },
    };
}
const savedValue = values(["a", "b", "c"]);
savedValue.hasValue("x");
function values2(initial) {
    return {
        hasValue(value) {
            return initial.includes(value);
        }
    };
}
const savedValue2 = values2(["a", "b", "c"]);
function onlyBoolena(arg = true) {
    return arg;
}
