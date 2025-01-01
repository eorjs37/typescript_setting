"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
class DigitalClock {
    constructor(hour, minute) { }
    tick() {
        console.log("beep beep");
    }
}
class ValidClock {
    constructor(hour, minute) { }
    tick() {
        console.log("valid clock ticking");
    }
}
let validclock = createClock(ValidClock, 10, 11);
