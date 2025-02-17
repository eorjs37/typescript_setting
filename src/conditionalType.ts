//컨디션널 타입 : A extends B ? 참일때 타입 : 거짓일때 타입 , 컨디셔널 타입일때는, extends가 true / false을때 쓰인다
type A1 = string;

type B1 = A1 extends string ? true : false;

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

let x1: X;
const x2: XY = { x: 1, y: 2 };
let x3: XY;
//  넓은 타입 =좁은 타입
x1 = x2;
const x4: X = { x: 2 };

// Erro 좁은타입 = 넓은 타입 X
// x3 = x1;

// never와 함께 사용
type Start = string | number;

type New = Start extends string | number ? Start[] : never;
let n: New = ["hi"];
n = [123];

// 제네릭과 함께 쓰인다
type ChooseArray<A> = A extends string ? string[] : never;
type StringArray = ChooseArray<string>;
type Never = ChooseArray<number>;

// 매핑된 객체 타입에서 키가 never이면 해당속성 제거
type OmitByType<O, T> = {
  [K in keyof O as O[K] extends T ? never : K]: O[K];
};

type Result = OmitByType<
  {
    name: string;
    age: number;
    married: boolean;
    rich: string;
  },
  boolean
>;
export {};
