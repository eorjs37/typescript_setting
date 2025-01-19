type A1 = string;
type B1 = A1 extends string ? number : boolean;

type A2 = number;
type B2 = A2 extends string ? number : boolean;

interface X {
  x: number;
}

interface XY {
  x: number;
  y: number;
}
interface YX extends X {
  y: number;
}

type A = XY extends X ? string : number;
type B = YX extends X ? string : number;

type Start = string | number;
type New = Start extends string | number ? Start[] : never;
let n: New = ["hi"];
n = [123];

type ChossArray<A> = A extends string ? string[] : never;
type StringArray = ChossArray<string>;
type Never = ChossArray<number>;

//Never가 string의 하위타입
type Result = never extends string ? true : false;

type OmitByType<O, T> = {
  [K in keyof O as O[K] extends T ? never : K]: O[K];
};
type Result1 = OmitByType<
  {
    name: string;
    age: number;
    married: boolean;
    rich: boolean;
  },
  boolean
>;
type A3 = string;
type B3 = A1 extends string ? number : boolean;
type B4 = {
  t: number;
  f: boolean;
}[A3 extends string ? "t" : "f"];

type Start2 = string | number;
type Result2<Key> = Key extends string ? Key[] : never;
let n1: Result2<Start> = ["hi"];

type Start3 = string | number | boolean;
type Result3<Key> = Key extends string | boolean ? Key[] : never;
let n2: Result3<Start3> = ["hi"];
//n2 = [true]

type IsString<T> = T extends string ? true : false;
type Result4 = IsString<"hi" | 3>;

type IsNever<T> = [T] extends [never] ? true : false;
type T = IsNever<never>;
type F = IsNever<"never">;

function test<T extends [T] extends [string] ? string : never>(a: T) {
  type R<T> = [T] extends [string] ? T : T;
  const b: R<T> = a;
}

function example(a: string, b?: number, c = false) {}
example("hi", 123, true);
example("hi", 123);
example("hi");

function example1(a: string, ...b: number[]) {}
example1("hi", 123, 4, 5, 6);
//function example2(...a: string[],b:number) {}
function example3(...args: [number, string, boolean]) {}
example3(1, "1", false);

function example4(this: Window) {
  console.log(this);
}

function example5(this: Document, a: string, b: "this") {}
//example5('hello', 'this')
example5.call(document, "hello", "this");
export {};
