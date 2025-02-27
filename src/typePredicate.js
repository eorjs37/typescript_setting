"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isMoney(param) {
    if (param.__type === "money") {
        return true;
    }
    else {
        return false;
    }
}
function moneyOrLiter(param) {
    if (isMoney(param)) {
        param;
    }
    else {
        param;
    }
}
