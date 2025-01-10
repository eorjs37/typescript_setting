//인터페이스 : typescript는 값의 형태에 초점을 맞추고 있으며, 이러한 것을 덕타이핑이라고 한다. 인터페이스는 이러한 타입들의 이름을 짓는 역할

// 인터페이스 선언
interface MusicInfo {
  musicId: string;
  musidName: string;
  artist: string;
}

function playMusic(param: MusicInfo) {
  console.log(`save musicId ${param.musicId}`);

  console.log(`play music ${param.musidName} / ${param.artist}`);
}

playMusic({
  musicId: "music_000",
  musidName: "음원1",
  artist: "가수1",
});

//인터페이스 선택적 프로퍼티
interface MusicInfo2 {
  musicId: string;
  musidName: string;
  artist?: string;
  playtime: number;
}

function playMusic2(param: MusicInfo2): string {
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

//읽기 전용 프로퍼티
interface MapPoint {
  readonly x: number;
  readonly y: number;
}

function DrawMap(param: MapPoint) {
  //Error 읽기전용이라서 수정할 경우 에러를 일으킨다
  //param.x = 1;
}

//초과 프로퍼티 검사
interface MusicInfo3 {
  musicId: string;
  musicName: string;
  playTime?: number;
}
function PlayAdMusic(param: MusicInfo3) {
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
} as MusicInfo3);

//함수 타입
interface PlayFunc {
  (src: string): boolean;
}

let mySearch: PlayFunc;
mySearch = function (src) {
  console.log("src : ", src);

  return true;
};

//인덱서블 타입 : 배열의 키에 타입을 정할 수 있다. 인덱스 서명 타입은 number,string만 제공
interface StringArray {
  //반환 타입도 필요
  [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Tom"];

class Animal {
  name: string | undefined;
}

class Dog extends Animal {
  breed: string | undefined;
}

interface NotOkay {
  // Error 숫자인덱스 시그니처와 문자열인덱스 시그니처의 반환타입이 동일해야됨
  [x: number]: Animal;
  //[x: string]: Dog;
}

interface ButtonInterface {
  onInit?(): void;
  onClick(): void;
}

class ButtonComponent implements ButtonInterface {
  type: string = "button";
  disabled: boolean = false;
  onInit(): void {
    console.log("init");
  }
  onClick(): void {
    console.log("click");
  }
}

// 인터페이스 타입으로 하는 객체 리터럴
const button: ButtonInterface = {
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

interface ButtonInterface2 {
  onInit?(): void;
  onClick(): void;
  [key: string]: any;
}

const button2: ButtonInterface2 = {
  type: "button",
  disabled: false,
  onClick() {
    console.log("click event");
  },
};

export {};
