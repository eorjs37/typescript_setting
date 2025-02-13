type Animal = {
  name: string;
};

const obj = {
  hello: "world",
  name: "zero",
  age: 28,
};

type Keys = keyof typeof obj;
type Values = typeof obj[Keys];

//매핑된 객체
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
  [key in keyof Tuple]: Tuple[key];
};
export {};
