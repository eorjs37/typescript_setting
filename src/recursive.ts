type Recursive = {
  name: string;
  children: Recursive[];
};

const recur1: Recursive = {
  name: "test",
  children: [],
};

const recur2: Recursive = {
  name: "test2",
  children: [
    { name: "test2-1", children: [] },
    { name: "test2-2", children: [] },
  ],
};

type ElementType<T> = T extends any[] ? ElementType<T[number]> : T;

type InfiniteRecur<T> = { item: InfiniteRecur<T> };
type Unwrap<T> = T extends { item: infer U } ? Unwrap<U> : T;
//type Result = Unwrap<InfiniteRecur<any>>

type JSONType =
  | string
  | boolean
  | number
  | null
  | JSONType[]
  | { [key: string]: JSONType };

const b: JSONType = [1, false, { hi: "json" }];
const c: JSONType = {
  prop: null,
  arr: [{}],
};

type Reverse<T> = T extends [...infer L, infer R] ? [R, ...Reverse<L>] : [];
type FilpArguments<T> = T extends (...args: infer A) => infer R
  ? (...args: Reverse<A>) => R
  : never;

type Flipped = FilpArguments<(a: string, b: number, c: boolean) => string>;
export {};
