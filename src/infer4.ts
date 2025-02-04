//Infer : 컨디셔널 타입에서 특정타입을 추론할때 사용, 주로 제네릭 타입의 내부타입을 추출하거나 변환할때 사용
type UnWrap<T> = T extends Promise<infer U> ? U : T;

type A = UnWrap<Promise<string>>;
type B = UnWrap<Promise<number>>;
type C = UnWrap<boolean>;

//
type El<T> = T extends (infer E)[] ? E : never;
type NumOrBool = El<(number | boolean)[]>;

type MyParmaters<T> = T extends (...args: infer P) => any ? P : never;
//파라미터 경우 튜플형태로 추출
type P1 = MyParmaters<(a: string, b: number) => string>;
type P2 = MyParmaters<(a: string) => string>;
const p2: P2 = ["1"];

//생성자방식의 파라미터
type MyConstructorParameters<T> = T extends abstract new (
  ...args: infer P
) => any
  ? P
  : never;
type CP = MyConstructorParameters<new (a: string, b: string) => {}>;

//함수반환 타입
type MyReturnType<T> = T extends (...args: any) => infer R ? R : never;
type R = MyReturnType<(a: string, b: string) => string>;

//인스턴스 타입
type MyInstanceType<T> = T extends abstract new (...args: any) => infer R
  ? R
  : never;

type I = MyInstanceType<new (a: string, b: string) => number>;

//
type MyPAndR<T> = T extends (...args: infer P) => infer R ? [P, R] : never;
type PR = MyPAndR<(a: string, b: number) => boolean>;

//Union
type Union<T> = T extends { a: infer U; b: infer U } ? U : never;
type Result1 = Union<{ a: 1 | 2; b: 2 | 3 }>;
const re1: Result1 = 1;
const re2: Result1 = 3;

// Intersection
type Intersection<T> = T extends {
  a: (pa: infer U) => void;
  b: (pb: infer U) => void;
}
  ? U
  : never;

type Result2 = Intersection<{ a(pa: 1 | 2): void; b(pb: 2 | 3): void }>;
export {};
