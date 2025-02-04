type IsNever<T> = [T] extends [never] ? true : false;

type TT = IsNever<string>;

type IsAny<T> = string extends number & T ? true : false;

type IsArray<T> = IsNever<T> extends true
  ? false
  : T extends readonly unknown[]
  ? IsAny<T> extends true
    ? false
    : true
  : false;

//네버 타입
type IsNever2<T> = T extends never ? true : false;
type TT2 = IsNever2<never>;
type TT3 = IsNever<never>;
type TT4 = IsNever<string>;

//Any타입
type IsAny2<T> = string extends number & T ? true : false;
//
type A = number & any;
type B = number & unknown;

//배열 타입
type IsArray2<T> = IsNever<T> extends true
  ? false
  : T extends readonly unknown[]
  ? IsAny<T> extends true
    ? false
    : true
  : false;

type IsTuple<T> = IsNever<T> extends true
  ? false
  : T extends readonly unknown[]
  ? number extends T["length"]
    ? false
    : true
  : false;

const tuple: [a: number, b: number, c: number] = [1, 2, 3];
type isT = IsTuple<[a: number, b: number]>;
type isT2 = IsTuple<[]>;

type IsUnion<T, U = T> = IsNever<T> extends true
  ? false
  : T extends T
  ? [U] extends [T]
    ? false
    : true
  : false;
export {};
