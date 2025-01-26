"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function rollDice() {
    return (Math.floor(Math.random() * 6) + 1);
}
const result = rollDice();
setupMap({ lng: -73.935242, lat: 40.73061, titleSize: 8 });
let pet = getSmallPet();
pet.layEggs();
function networkStatus(state) {
    switch (state.state) {
        case "loading":
            return "Downloading...";
        case "failed":
            return `Error ${state.code} downloading`;
        case "success":
            return `Downloaded ${state.response.title} - ${state.response.summary}`;
    }
    return "";
}
const handleArtistsResponse = (response) => {
    if (response.error) {
        console.error(response.error.message);
        return;
    }
    console.log(response.artworks);
};
class Person {
    constructor(name) {
        this.name = name;
    }
}
class ConsoleLogger {
    log(name) {
        console.log(`Hello, I'm ${name}.`);
    }
}
function extend(first, second) {
    const result = {};
    for (const prop in first) {
        if (first.hasOwnProperty(prop)) {
            result[prop] = first[prop];
        }
    }
    for (const prop in second) {
        if (second.hasOwnProperty(prop)) {
            result[prop] = second[prop];
        }
    }
    return result;
}
extend(new Person("choi"), ConsoleLogger.prototype);
