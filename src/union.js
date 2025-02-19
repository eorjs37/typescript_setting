"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        },
    };
}
const savedValue2 = values2(["a", "b", "c"]);
savedValue2.hasValue("a");
