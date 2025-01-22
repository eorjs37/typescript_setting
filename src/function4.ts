function a(x: string): number {
  return 0;
}

type B = (x: string) => number | string;

//b가 a보다 넒은 타입
// a->b
let b: B = a;

function a1(x: string): number | string {
  return 0;
}

type B1 = (x: string) => number;
//a1이 b1보다 넓은 타입
//b1->a1
//let b1: B1 = a1;

function a2(x: string | number): number {
  return 0;
}

type B2 = (x: string) => number;
//a2가 b2보다 넓은 타입
//b2->a2
//T<a2>
let b3: B2 = a2;

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
const MyAddingMethod: SayMethod = {
  //SayMethod.say가 sayFunc보다 넓은 타입
  say: sayFunc,
};
export {};
