//함수 타입
function add(x: number, y: number): number {
  return x + y;
}

let myAdd = function (x: number, y: number): number {
  return x + y;
};

//전체 함수 타입 작성
// 함수 타입의 경우 매개변수 타입과 반환 타입이 존재
let myAdd2: (x: number, y: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};

//매개변수들의 타입이 올바르게 되어있다면,함수타입에 이름이 다르더라도 유효하다
let myAdd3: (baseValue: number, increment: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};

//선택적 매개변수
function buildName(firstName: string, lastName?: string) {
  if (lastName) {
    return firstName + " " + lastName;
  } else {
    return firstName;
  }
}

let result1 = buildName("Bob");
let result2 = buildName("Bob", "Adams");

//기본 초기화 매개변수
// 기본값을 정의하고 싶을때 사용된다

function buildName2(firstName: string, lastName = "CHOI") {
  return firstName + " " + lastName;
}
let buildName2Result1 = buildName2("Bob");
let buildName2Result2 = buildName2("Bob", "TEST");
let buildName2Result3 = buildName2("Bob", undefined);

// 나머지 매개변수
// 필수 1개와 다수의 매개변수를 받을때
function buildName3(firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ");
}

let employeeName = buildName3("Joseph", "Name1", "Name2", "Name3");

// this
let deck = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),
};

interface ChannelInfo {
  musicurl: string;
  musicId: string;
}

interface MusicInfo {
  artist: string;
  musicname: string;
  musicId: string;
  makeStreaming(this: MusicInfo): () => ChannelInfo;
}

const straming: MusicInfo = {
  artist: "아티스트",
  musicname: "음악명",
  musicId: "music0000",
  makeStreaming: function (this: MusicInfo) {
    return () => {
      /**
       * 복잡한 로직....
       */
      return {
        musicId: "musicid",
        musicurl: "musicUrl",
      };
    };
  },
};

const fn = straming.makeStreaming();
const { musicId, musicurl } = fn();

interface UIElement {
  addClickListener(onclick: (this: void, e: Event) => void): void;
}

class Handler {
  info: string;
  onClickBad = (e: Event) => {
    console.log("clicked!");
    this.info = e.BUBBLING_PHASE as unknown as string;
  };
}

class uiElement implements UIElement {
  addClickListener(onclick: (this: void, e: Event) => void): void {
    //throw new Error("Method not implemented.");
  }
}
const h = new Handler();
const uielement = new uiElement();
uielement.addClickListener(h.onClickBad);

const suits = ["hearts", "spades", "clubs", "diamonds"];
// function pickCard(x: { suit: string; card: number; }[]): number;
// function pickCard(x: number): {suit: string; card: number; };
export {};
