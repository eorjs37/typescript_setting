//매핑된 객체 타입
type HellonAndHi = {
  [key in "hello" | "hi"]: string;
};

interface Original {
  name: string;
  age: number;
  married: boolean;
}

type Copy = {
  [key in keyof Original]: Original[key];
};

type Tuple = [1, 2, 3];
type CopyTuple = {
  [Key in keyof Tuple]: Tuple[Key];
};

type Arr = number[];
type CopyArr = {
  [Key in keyof Arr]: Arr[Key];
};

type Copy2 = {
  [key in keyof Original as Capitalize<key>]: Original[key];
};
export {};
