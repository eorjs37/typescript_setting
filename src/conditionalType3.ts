type A1 = string;
type B1 = A1 extends string ? number : boolean;

interface X {
  x: number;
}

interface XY {
  x: number;
  y: number;
}

interface YX extends X {
  y: number;
}

type A = XY extends X ? string : number;
type B = YX extends X ? string : number;

type Start = string | number;
type New = Start extends string | number ? Start[] : never;

type ChooseArray<A> = A extends string ? string[] : never;
type StringArray = ChooseArray<string>;
type Never = ChooseArray<number>;

type OmitByType<O, T> = {
  [K in keyof O as O[K] extends T ? never : K]: O[K];
};

type Result = OmitByType<
  {
    name: string;
    age: number;
    married: boolean;
    rich: boolean;
  },
  boolean
>;

type OmitByType2<O, T> = {
  [K in keyof O as O[K] extends T ? never : K]: O[K];
};

export {};
