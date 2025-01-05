//객체 타입에 이름을 붙이는 방법
//별칭
type A = string;
const str: A = "123";

type ValueWithUnit = (value: number, unit: string) => string;

const func2: ValueWithUnit = (value, unit) => value + unit;

// Person 별칭
type Person = {
  name: string;
  age: number;
  married: boolean;
};

//인터페이스
interface Person2 {
  name: string;
  age: number;
  married: boolean;
}

interface Func {
  (x: number, y: number): number;
}
const add: Func = (x, y) => x + y;

interface Arr {
  length: number;
  [key: number]: string;
}

const arr: Arr = ["3"];

//인터페이스와 별칭의 차이는 결합
interface Merge {
  one: string;
}

interface Merge {
  two: number;
}

const example: Merge = {
  one: "1",
  two: 2,
};

//네임스페이스(다른 인터페이스와 병합할 경우 의도치 않게 기존인터페이스가 변경될 위험이 존재)

namespace Example {
  export interface Inner {
    test: string;
  }
  export type test2 = number;
}

const ex1: Example.Inner = {
  test: "hello",
};

//자바스크립트 값을 쓸 수도 있음
namespace Ex {
  export const a = "real";
}

const a = Ex.a;

//네임스페이스 이름이 겹치는 경우 병합됨. 속성명이 같으면 오류를 일으킴
// namespace Example2{
//     export interface Inner{
//         test:string;
//     }
//     export type test2 = number
// }

// namespace Example2{
//     export interface Inner{
//         test1:boolean
//     }
//     export type test2 = number;
// }

//
interface Example3 {
  hello: string;
  world?: number;
  readonly wow: boolean;
  readonly multiple?: symbol;
}

const example3: Example3 = {
  hello: "hi",
  wow: false,
};

interface Example4 {
  hello: string;
}

//Error
// const example4: Example4 = {
//   hello: "hi",
//   why: "error",
// };

const obj = {
  hello: "hi",
  why: "not error",
};
const example_5: Example4 = obj;

//함수
interface Money {
  amount: number;
  unit: string;
}
const money = { amount: 1000, unit: "won", error: "not error" };
function addMoney(money: Money, money2: Money): Money {
  return {
    amount: money.amount + money2.amount,
    unit: "won",
  };
}

//Error
//addMoney(money,{amount:1000,unit:'won',error:'error'})

//spread
const {
  prop: { nested, ...rest },
} = { prop: { nested: "hi", a: 1, b: true, c: "str" } };
const spread = { a: "Hi", b: 123 };
const ob = { ...spread };

const obj2 = {
  hello: "world",
  name: "zero",
  age: 28,
};
console.log(obj2["hello"]);

type Keys = keyof typeof obj2;
type Values = typeof obj2[Keys];

type Keyss = keyof any;
type ArrayKeys = keyof [1, 2, 3];
let arrkeys: ArrayKeys = "lastIndexOf";
arrkeys = "length";
arrkeys = "2";
//error
//arrkeys = "3";
arrkeys = 3;
export {};
