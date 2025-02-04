// | 연산자는 합집합
let strOrNum: string | number = "hello";
strOrNum = 123;

// & 합집합
type nev = string & number;

let a2: unknown;
a2 = 1;
a2 = "h";

type A = string | boolean;
type B = number | boolean;
type C = A & B;

type D = {} & (string | null);
type E = string & boolean;

type F = unknown | {};
type G = never & {};

export {};
