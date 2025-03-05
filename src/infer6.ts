type G1<T> = T extends boolean[] ? boolean : never;
type G2<T> = T extends number[] ? number : never;

type R1 = G1<boolean[]>;
type R2 = G2<number[]>;

type El<T> = T extends (infer E)[] ? E : never;
type Str = El<string[]>;
type NumOrBool = El<(number | boolean)[]>;

// 매개변수 추론
type MyParameters<T> = T extends (...args: infer P) => any ? P : never;

type Mp = MyParameters<(a: string, b: number) => string>;
const mp1: Mp = ["1", 1];

// 생성자 매개변수 추론
type MyConstructorParameters<T> = T extends abstract new (
  ...args: infer P
) => any
  ? P
  : never;
type CP = MyConstructorParameters<new (a: string, b: number) => {}>;

// 반환값
type MyReturnType<T> = T extends (...args: any) => infer R ? R : any;
type MR = MyReturnType<(a: string, b: number) => number>;

// 인스턴스 타입
type MyInstanceType<T> = T extends abstract new (...args: any) => infer R
  ? R
  : any;

type I = MyInstanceType<new (a: string, b: number) => {}>;

// 서로다른 타입 변수 여러개 사용
type MyPAndR<T> = T extends (...args: infer P) => infer R ? [P, R] : never;
type MPAR = MyPAndR<(a: string, b: number) => number>;

// Union
type Union<T> = T extends { a: infer U; b: infer U } ? U : never;
type Result1 = Union<{ a: 1 | 2 | 3; b: 2 | 3 }>;

// Intersection
type Intersection<T> = T extends {
  a: (pa: infer U) => void;
  b: (pb: infer U) => void;
}
  ? U
  : never;

type Result2 = Intersection<{
  a(pa: 1 | 2): void;
  b(pb: 2 | 3): void;
}>;

// Union To Intersection
type UnionToIntersection<U> = (U extends any ? (p: U) => void : never) extends (
  p: infer I
) => void
  ? I
  : never;

type Result5 = UnionToIntersection<{ a: number } | { b: number }>;
// (p:{a:number}) => void
const result5: Result5 = {
  a: 1,
  b: 1,
};
export {};
