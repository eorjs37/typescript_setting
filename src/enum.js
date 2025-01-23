"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Level;
(function (Level) {
    Level[Level["NOVICE"] = 0] = "NOVICE";
    Level[Level["INTERMEDIATE"] = 1] = "INTERMEDIATE";
    Level[Level["ADVANCED"] = 2] = "ADVANCED";
    Level[Level["MATER"] = 3] = "MATER";
})(Level || (Level = {}));
function whatIsYourLeven(level) {
    console.log(Level[level]);
}
const myLevel = Level.ADVANCED;
whatIsYourLeven(myLevel);
var MONEY;
(function (MONEY) {
    MONEY[MONEY["WON"] = 0] = "WON";
    MONEY[MONEY["DOLLAR"] = 1] = "DOLLAR";
})(MONEY || (MONEY = {}));
MONEY.WON;
MONEY[MONEY.WON];
