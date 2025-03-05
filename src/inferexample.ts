// 특정 타입 추론
type T1<T> = T extends (infer R)[] ? R : never;

// 배열 형태이면 배열요소의 타입(R)을 추론한다
type N1 = T1<number[]>; // number
type S1 = T1<string[]>; //string
type NumOrStr1 = T1<(string | number)[]>; // string | number
type Ne = T1<never>; // never

// 매개변수 추론
type MyP<T> = T extends (...args: infer R) => any ? R : never;
type MP = MyP<(a: string, b: number) => string>;

// 생성자 매개변수 추론
type MyConP<T> = T extends new (...args: infer R) => any ? R : never;
type MyConP1 = MyConP<new (a: string, b: number) => string>;

// 반환값 추론
type MyRe<T> = T extends (...args: any) => infer R ? R : never;
type M1 = MyRe<(a: string, b: string) => number>;

// 인스터스값 추론
type MyInst<T> = T extends new (...args: any) => infer R ? R : never;
type MI = MyInst<new (a: string, b: number) => number>;

interface User {
  name: string;
  age: number;
}

export {};
