"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createPerson(person) {
    console.log(person.name);
}
//name,age보다 초과한 경우 에러를 일으키지 않음
const person = {
    name: "choi",
    age: 30,
    test: "Ss",
};
//최소한의 프로퍼티만 있는지 확인(name)
createPerson(person);
function createAnimal(animal) {
    let total = 0;
    if (animal.hand) {
        total += animal.hand;
    }
    //오류 - 인터페이스의 속하지 않는 프로퍼티를 사용할 경우 오류를 일으킴
    // if (animal.hands) {
    // }
    if (animal.legs) {
        total += animal.legs;
    }
    return { total };
}
createAnimal({
    legs: 10,
});
function createKorea(korea) { }
createKorea({
    born: "",
    age: 30,
});
//오류 - 프로퍼티가 존재 하지않아 오류
//createKorea({ borns: "", age: 30 });
//타입단언으로 해결
createKorea({ borns: "", age: 30 });
let mySearch = function (source, substring) {
    let result = source.search(substring);
    return result > -1;
};
//매개 변수이름이 같을 필요는 없음
mySearch = function (src, sub) {
    let result = src.search(sub);
    return result > -1;
};
//이미 타입이 SearchFunc이기 때문에,타입 추론도 가능하다
mySearch = function (src, sub) {
    let result = src.search(sub);
    return result > -1;
};
let myArray;
myArray = ["1", "2"];
let myStr = myArray[0];
class Animals {
}
class Dog extends Animals {
}
class Clock {
    constructor(h, m) {
        this.currentTime = new Date();
    }
    setDate(d) {
        this.currentTime = d;
    }
}
function createClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
class DigitalClock {
    constructor(h, m) {
    }
    tick() {
        console.log("beep beep");
    }
}
class AnalogClock {
    constructor(h, m) {
    }
    tick() {
        console.log("tick tock");
    }
}
let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);
let squareex = {};
squareex.color = "black";
squareex.sideLength = 10;
function getCounter() {
    let counter = (function (start) { });
    console.log(counter);
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}
let c = getCounter();
c(19);
c.reset();
c.interval = 5.0;
/*======================= 클래스를 확장한 인터페이스 =======================*/
class Control {
}
class Button extends Control {
    select() { }
}
class TextBox extends Control {
    select() { }
}
class Image extends Control {
    select() { }
}
class Location {
}
