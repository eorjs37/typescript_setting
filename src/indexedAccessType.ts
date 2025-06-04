const obj = {
  hello: "world",
  name: "choi",
  age: 32,
};
type Keys = keyof typeof obj;
type Values = typeof obj[Keys];
export {};
