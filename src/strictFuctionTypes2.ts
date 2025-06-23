function a(x: string): number {
  return 0;
}

type B = (x: string) => number | string;
// a함수를 b타입에 대입이 가능하다
// b가 a보다 넓은 타입을 가지고 있다.
// a는 number , b는 number | string
// a -> b(좁은 타입 -> 넓은 타입)
let b: B = a;

// 반대 상황
function a1(x: string): number | string {
  return 0;
}

type B1 = (x: string) => number;

// a1이 b1보다 넓은 타입을 가지고 있다
// b1 -> a1
// Error : a1이 넓은 타입이므로 b1에 대입이 불가능하다
// let b1: B1 = a1;

// 매개변수의 경우 반공변성을 가진다
function a2(x: string | number): number {
  return 0;
}

type B2 = (x: string) => number;

// 공변성을 가지면, a2가 b2보다 넓은 타입을 가짐
// b2 -> a2
// 공변성을 가진다면? Error가 나야됨. 넓은타입이 좁은타입에 대입이 불가능
// 매개변수는 반공변성을 가짐
let b2: B2 = a2;

function a3(x: string): number {
  return 0;
}

type B3 = (x: string | number) => number;

// a3 -> b3
// let b3: B3 = a3;

interface SayMethod {
  say(a: string | number): string;
}

interface SayFunction {
  say: (a: string | number) => string;
}

interface SayCall {
  say: {
    (a: string | number): string;
  };
}

const SayFunc = (a: string) => "hello";

export {};
