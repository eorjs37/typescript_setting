type Recursive = {
  name: string;
  children: Recursive[];
};

const recur1: Recursive = {
  name: "recur1",
  children: [],
};

const recur2: Recursive = {
  name: "recur2",
  children: [
    {
      name: "recur2-1",
      children: [],
    },
  ],
};

type ElementType<T> = T extends any[] ? ElementType<T[number]> : T;

type Test<T> = T extends any[] ? T : never;

const b: Test<string[]> = ["1"];
const c: Test<number[]> = [1];
export {};
