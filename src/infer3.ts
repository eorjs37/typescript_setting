//Infer : 타입추로기능을 극한까지 활용하는 기능
//T가 배열(E[])이면 E를 추출
type El<T> = T extends (infer E)[] ? E : never;
type Str = El<string[]>;
type NumOrBool = El<(number | boolean)[]>;

type MyParmaters<T> = T extends (...args: infer P) => any ? P : never;
type P = MyParmaters<(a: string, b: string) => string>;

type MyConstructorParameters<T> = T extends abstract new (
  ...args: infer P
) => any
  ? P
  : never;

type CP = MyConstructorParameters<new (a: string, b: string) => {}>;

type MyReturnType<T> = T extends (...args: any) => infer R ? R : any;
type R = MyReturnType<(a: string, b: number) => string>;

type MyInstanceType<T> = T extends abstract new (...args: any) => infer R
  ? R
  : any;

type I = MyInstanceType<new (a: string, b: string) => {}>;

//
type MyPAndR<T> = T extends (...args: infer P) => infer R ? [P, R] : never;
type PR = MyPAndR<(a: string, b: number) => string>;

//
type Union<T> = T extends { a: infer U; b: infer U } ? U : never;
type Result1 = Union<{ a: 1 | 2; b: 2 | 3 }>;

type Intersection<T> = T extends {
  a: (pa: infer U) => void;
  b: (pb: infer U) => void;
}
  ? U
  : never;

type Result2 = Intersection<{ a(pa: 1 | 2): void; b(pb: 2 | 3): void }>;

//
type UnionToIntersection<U> = (U extends any ? (p: U) => void : never) extends (
  p: infer I
) => void
  ? I
  : never;

type Result5 = UnionToIntersection<{ a: number } | { b: string }>;
type Result6 = UnionToIntersection<boolean | true>;
export {};
