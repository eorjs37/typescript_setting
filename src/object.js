"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const str = "123";
const func2 = (value, unit) => value + unit;
const add = (x, y) => x + y;
const arr = ["3"];
const example = {
    one: "1",
    two: 2,
};
const ex1 = {
    test: "hello",
};
//자바스크립트 값을 쓸 수도 있음
var Ex;
(function (Ex) {
    Ex.a = "real";
})(Ex || (Ex = {}));
const a = Ex.a;
const example3 = {
    hello: "hi",
    wow: false,
};
//Error
// const example4: Example4 = {
//   hello: "hi",
//   why: "error",
// };
const obj = {
    hello: "hi",
    why: "not error",
};
const example_5 = obj;
const money = { amount: 1000, unit: "won", error: "not error" };
function addMoney(money, money2) {
    return {
        amount: money.amount + money2.amount,
        unit: "won",
    };
}
//Error
//addMoney(money,{amount:1000,unit:'won',error:'error'})
//spread
const _a = { prop: { nested: "hi", a: 1, b: true, c: "str" } }.prop, { nested } = _a, rest = __rest(_a, ["nested"]);
const spread = { a: "Hi", b: 123 };
const ob = Object.assign({}, spread);
const obj2 = {
    hello: "world",
    name: "zero",
    age: 28,
};
console.log(obj2["hello"]);
let arrkeys = "lastIndexOf";
arrkeys = "length";
arrkeys = "2";
//error
//arrkeys = "3";
arrkeys = 3;
