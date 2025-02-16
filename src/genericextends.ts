interface Example<A extends number, B = string> {
  a: A;
  b: B;
}

//type UseCase1 = Example<string, boolean>
type UseCase2 = Example<1, string>;

interface Example2<A, B extends A> {
  a: A;
  b: B;
}

//type UseCase3 = Example2<string, number>;

interface VO {
  value: any;
}

// const returnVO = <T extends VO>(): T => {
// 	return { value :'test'}
// }

// function onlyBoolean<T extends boolean>(arg: T = false) {
// 	return arg;
// }
function onlyBoolean(arg: true | false = false): true | false {
  return arg;
}

type A1 = string;
type B1 = A1 extends string ? number : boolean;

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

type Result = "h1" extends string ? true : false;

type Start = string | number;
type New = Start extends string | number ? Start[] : never;
let n: New = [1, "1"];
export {};
