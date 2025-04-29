"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function pluck(o, propertyNames) {
    return propertyNames.map((n) => o[n]);
}
let taxi = {
    manufacturer: "Toyota",
    model: "Camry",
    year: 2014,
};
let makeAndModel = pluck(taxi, ["manufacturer", "model"]);
let modelYear = pluck(taxi, ["model", "year"]);
function getProperty(obj, key) {
    return obj[key];
}
let person = {
    name: "choi",
    age: 32,
};
const value = getProperty(person, "name");
console.log(value);
