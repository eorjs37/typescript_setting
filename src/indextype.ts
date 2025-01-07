// 속성 정의
type Animal = {
  name: string;
};

//특정속성 연동
type N1 = Animal["name"];

//속성 키 확인
const obj = {
  hello: "world",
  name: "zero",
  age: 28,
};

type Keys = keyof typeof obj;
type Values = typeof obj[Keys];

//any keyType
type AnyKeys = keyof any;
type ArrayKeys = keyof [1, 2, 3];
let a: ArrayKeys = "lastIndexOf";
//배열 키 정의 하면 number | 배열속성이름 | 배열인덱스
a = "lastIndexOf";
a = "length";
a = "1";
a = "0";
export {};
