// function add(x: string | number, y: string | number): string | number {
//   return x + y;
// }
function add(x: number, y: number): number;
function add(x: string, y: string): string;
function add(x: any, y: any): any {
  return x + y;
}

function example(callback: (error: Error, result: string) => void) {}
example(() => {});
example((e, r) => {});
example(() => true);
//add(1, '2')

function a(x: string): number {
  return 0;
}

type B = (x: string) => number | string;

//a함수를 b타입에 대입가능
//b가 a보다 넓은 타입
//a->b T<a> -> T<b>
let b: B = a;

function a1(x: string): number | string {
  return 0;
}

type B1 = (x: string) => number;

//a1함수가 b1보다 넓은 타입
//b->a T+
//let b1: B1 = a1;

function a2(x: string | number): number {
  return 0;
}

type B2 = (x: string) => number;

//a2가 b2가 더 넓은 타입
//b2->a2
//T<A> -> T<B>
//매개변수에서는 반공변성을 띈다
let b2: B2 = a2;

function a3(x: string): number {
  return 0;
}

type B3 = (x: string | number) => number;
//b3가 a3 보다 넓은 타입
//a3->b3
//T<b3> -> T<a3>
//let b3: B3 = a3;

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

export {};
