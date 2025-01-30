type MyParameters<T> = T extends (...args: infer P) => any ? P : never;
type P = MyParameters<(a: string, b: string) => string>;

type MyConstructorParamters<T> = T extends abstract new (
  ...args: infer P
) => any
  ? P
  : never;

type CP = MyConstructorParamters<new (a: string, b: string) => {}>;

type MyReturnType<T> = T extends (...args: any) => infer R ? R : any;
type R = MyReturnType<(a: string, b: string) => string>;

type MyInstanceType<T> = T extends abstract new (...args: any) => infer R
  ? R
  : any;

type I = MyInstanceType<new (a: string, b: string) => {}>;

type MyPandR<T> = T extends (...args: infer P) => infer R ? [P, R] : never;
type PR = MyPandR<(a: string, b: string) => string>;

type Num<T> = T extends { a: infer P } ? P : never;
type numT = Num<{ a: number }>;

type Union<T> = T extends { a: infer U; b: infer U } ? U : never;
type Result1 = Union<{ a: 1 | 2; b: 2 | 3 }>;

type Intersection<T> = T extends {
  a: (pa: infer U) => void;
  b: (pb: infer U) => void;
}
  ? U
  : never;

type Result2 = Intersection<{ a(pa: 1 | 2): void; b(pb: 2 | 3): void }>;

type UnionToIntersection<U> = (U extends any ? (p: U) => void : never) extends (
  p: infer I
) => void
  ? I
  : never;

type Result5 = UnionToIntersection<{ a: number } | { b: number }>;
type Result6 = UnionToIntersection<boolean | true>;
export {};
