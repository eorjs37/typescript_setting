"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function values(initial) {
    return {
        hasValue(value) {
            return initial.includes(value);
        },
    };
}
values(["a", "b", "c"]);
function values2(initial) {
    return {
        hasValue(value) {
            return initial.includes(value);
        }
    };
}
values2(["a", "b", "c"]);
let n = ['hi'];
n = [123];
let a;
a = 1;
