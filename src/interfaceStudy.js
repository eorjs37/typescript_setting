"use strict";
//인터페이스 : typescript는 값의 형태에 초점을 맞추고 있으며, 이러한 것을 덕타이핑이라고 한다. 인터페이스는 이러한 타입들의 이름을 짓는 역할
Object.defineProperty(exports, "__esModule", { value: true });
function playMusic(param) {
    console.log(`save musicId ${param.musicId}`);
    console.log(`play music ${param.musidName} / ${param.artist}`);
}
playMusic({
    musicId: "music_000",
    musidName: "음원1",
    artist: "가수1",
});
function playMusic2(param) {
    let str = "";
    str = `${param.musidName} ${param.artist}`;
    return str;
}
// artist를 넣지 않아도 정상적으로 동작한다
playMusic2({
    musicId: "music_000",
    musidName: "음원1",
    playtime: 10,
});
function DrawMap(param) {
    //Error 읽기전용이라서 수정할 경우 에러를 일으킨다
    //param.x = 1;
}
function PlayAdMusic(param) {
    //로직 처리
}
PlayAdMusic({
    musicId: "music_0000",
    musicName: "음원",
    //Error : 초과 프로퍼티
    //playsTime:123
});
//타입 단언을 통해 처리
PlayAdMusic({
    musicId: "music_0000",
    musicName: "음원",
    playsTime: 123,
});
let mySearch;
mySearch = function (src) {
    console.log("src : ", src);
    return true;
};
let myArray;
myArray = ["Bob", "Tom"];
class Animal {
}
class Dog extends Animal {
}
class ButtonComponent {
    constructor() {
        this.type = "button";
        this.disabled = false;
    }
    onInit() {
        console.log("init");
    }
    onClick() {
        console.log("click");
    }
}
// 인터페이스 타입으로 하는 객체 리터럴
const button = {
    /**
     * Error
     * type,disalbed가 존재하지 않음
     */
    // type: 'button',
    // disabled: false,
    onClick() {
        console.log("Click");
    },
};
const button2 = {
    type: "button",
    disabled: false,
    onClick() {
        console.log("click event");
    },
};
