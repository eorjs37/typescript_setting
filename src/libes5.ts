type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

type Result = MyPick<{ a: string; b: number; c: number }, "a" | "c">;

const obj = {
  red: "apple",
  yellow: "banana",
  green: "cucumber",
};
type Fruit = typeof obj;

function fn(num: number, str: string): string {
  return num.toString();
}
type fn_type = typeof fn;
type T1 = {
  name: string;
  age: number;
  married: boolean;
};
type union = keyof T1;
const a: union = "name";

type T2 = {
  a: string;
  b: number;
  c: number;
};

type KeyT2 = keyof T2;
//
const a1: KeyT2 = "a";

type Test<T, K extends keyof T> = {};
type R1 = Test<T2, "a" | "c">;

type A1<T, K extends T> = {};
// type A1<T, K extends T ? T : never> = {};
//const aa: A1<string, "1"> = "1";

//const bb: A1<string, number>

export {};
