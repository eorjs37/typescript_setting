"use strict";
// 타입스크립트에서는 오류를 일으킴. 인터페이스에서는 생성자 시그니처를 못 쓰 되어 있음
// interface ClockConstructor {
//   new (hour: number, minute: number);
// }
Object.defineProperty(exports, "__esModule", { value: true });
class Clock {
    constructor(hour, minute) {
        console.log(`Clock set to ${hour}:${minute}`);
    }
    tick() {
        console.log("Tick tock...");
    }
}
//팩토리 함수
function createClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
