// type HellonAndHi = {
// 	[key : 'hello' : 'hi']:string
// }

type HellonAndHi = {
  [key in "hello" | "hi"]: string;
};

const test: HellonAndHi = {
  hello: "ss",
  hi: "",
};
console.log(test);

interface Original {
  name: string;
  age: number;
  married: boolean;
}

type CopyOriginal = {
  [key in keyof Original]: Original[key];
};

const test2: CopyOriginal = {
  name: "1",
  age: 11,
  married: false,
};

type Tuple = [1, 2, 3];
type KeyTuple = keyof Tuple;
type CopyTuple = {
  [key in keyof Tuple]: Tuple[key];
};
export {};
