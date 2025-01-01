"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printLabel(labeledObj) {
    console.log(labeledObj.label);
}
function printLabel2(labeledObj) {
    console.log(labeledObj.label);
}
//최소한의 프로퍼티만 만족하더라도 오류가 안생긴다
const myobj = { size: 10, label: "Size 10 Object" };
printLabel(myobj);
printLabel2(myobj);
function createSquare(config) {
    let newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
createSquare({ color: "Black" });
