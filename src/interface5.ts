type names = "firstName" | "lastName";
type NameTypes = {
  [key in names]: string;
};

const test: NameTypes = { firstName: "err", lastName: "111" };

// 1. 확장성
// Extends를 통해 확장이 가능
interface Person {
  name?: string;
  age: number;
}

interface Korea extends Person {
  name: string;
  region: string;
}

const korean: Korea = {
  name: "Choi Dae Geon",
  age: 33,
  region: "Ulsan",
};

type PersonType = {
  name?: string;
  age: number;
};

// & (intersection)을 사용해 타입을 확장
type KoreaType = PersonType & { region: string };
const koreanType: KoreaType = {
  name: "TEST",
  age: 33,
  region: "Ulsan",
};

// 2. 중복선언
interface Car {
  wheel: number;
  age: number;
  carName: string;
}
// 자동 병합됨
interface Car {
  test: string;
}

const car: Car = {
  wheel: 0,
  age: 0,
  carName: "",
  test: "",
};

type CarType = {
  wheel: number;
  age: number;
  carName: string;
};
// Error : 동일 이름 선언시 오류
// type CarType = {
//     test: string;
// }

// 3. 표현 가능 범위

// (객체 형태)
interface Broswer {
  name: "naver" | "chrome";
  age: number;
}

const br: Broswer = {
  name: "naver",
  age: 33,
};

// 유니온 , 튜플,기본타입
type Role = "admin" | "guest" | "master";
type Tuple = [string, number];

const role: Role = "admin";
const tu: Tuple = ["a", 1];

interface IndexSi {
  [key: string]: string;
}
export {};
