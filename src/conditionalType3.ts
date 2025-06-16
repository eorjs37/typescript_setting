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

type MapType = {
  name: string;
  age: number;
};

type MappingType = {
  [K in keyof MapType]: MapType[K];
};

const aa: MappingType = {
  name: "sss",
  age: 111,
};

type OmitByType3<O, T> = {
  [K in keyof O as O[K] extends T ? never : K]: O[K];
};
type OM3 = OmitByType3<MappingType, string>;

type ChooseArray1<A> = A extends string
  ? string[]
  : A extends boolean
  ? boolean[]
  : never;

type StringArray1 = ChooseArray1<string>;
type NeverArray1 = ChooseArray1<number>;

type Start1 = string | number;
type Result1 = Start extends string ? Start[] : never;

type Result2<Key> = Key extends string ? Key[] : never;
let n: Result2<Start1> = ["1"];

type IsString<T> = T extends string ? true : false;
type Result3 = IsString<"hi" | 3>;

type IsString2<T> = [T] extends [string] ? true : false;
type Result4 = IsString2<"hi" | 3>;

function test<T>(a: T) {
  type R<T> = T extends string ? T : T;
  // const b: R<T> = a;
}
export {};
