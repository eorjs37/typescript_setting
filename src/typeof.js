"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function strOrNum(param) {
    if (typeof param === "string") {
        param;
    }
    else if (typeof param === "number") {
        param;
    }
    else {
        param;
    }
}
function strOrNummUndefined(param) {
    if (param === undefined) {
        param;
    }
    else if (param === null) {
        param;
    }
    else {
        param;
    }
}
class A {
}
class B {
}
function classAorB(param) {
    if (param instanceof A) {
        param;
    }
    else {
        param;
    }
}
function objXorY(param) {
    if ("width" in param) {
        param;
    }
    else {
        param;
    }
}
function moneyOrLiter(param) {
    if (param.__type === "money") {
        param;
    }
    else {
        param;
    }
}
function isMoney(param) {
    if (param.__type === "money") {
        return true;
    }
    else {
        return false;
    }
}
