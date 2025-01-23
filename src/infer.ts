type E1<T> = T extends (infer E)[] ? E : never;
type Str = E1<string[]>;
type NumOrBol = E1<(number | boolean)[]>;

type E2<T> = T extends infer E ? E : never;
type Str2 = E2<string>;
type Str3 = E1<string>;

type MyParameters<T> = T extends (...args: infer P) => any ? P : never;
type MyConstructorParamters<T> = T extends abstract new (
  ...args: infer P
) => any
  ? P
  : never;

type MyReturnType<T> = T extends (...args: any) => infer R ? R : any;
type MyInstanceType<T> = T extends abstract new (...args: any) => infer R
  ? R
  : any;

type P = MyParameters<(a: string, b: number) => string>;
type R = MyReturnType<(a: string, b: string) => string>;
type CP = MyConstructorParamters<new (a: string, b: string) => {}>;
type I = MyInstanceType<new (a: string, b: string) => number>;
export {};
