type MyPaterial<T> = {
  [P in keyof T]?: T[P];
};

type Result = MyPaterial<{ a: string; b: number }>;

//객체에서 지정한 속성
type MyPick<T, K> = {
  [P in K extends keyof T ? K : never]: T[P];
};

type Result2 = MyPick<{ a: string; b: number; c: number }, "a" | "c">;

// T : a:string, b:number,c:number , a | c
// keyof T : a | b | c

const obj = {
  a: "dd",
  b: 1,
  c: 2,
};

type Test = keyof typeof obj;
export {};
