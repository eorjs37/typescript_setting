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
export {};
