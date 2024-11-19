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
