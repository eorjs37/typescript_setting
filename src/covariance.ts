function a(x: string): number {
  return 1;
}

type B = (x: string) => number | string;
// type B가 a보다 넓은 타입이기 때문에 a->B(작은 범위 -> 큰범위)
// 좁은범위에서 넓은 범위로 대입이 가능하다
let b: B = a;

function a1(x: string): number | string {
  return 0;
}

type B1 = (x: string) => number;
// 반환값에 대해서는 항상 공변성을 가진다
// let b1: B1 = a1;

// 매개변수에 대해서는 반공변성을 가진다
function a2(x: string | number): number {
  return 1;
}

type B2 = (x: string) => number;

let b2: B2 = a2;

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

const sayFunc = (a: string) => "hello";
export {};
