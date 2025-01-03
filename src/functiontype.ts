function add(x: number, y: number): number {
  return x + y;
}

let myadd = function (x: number, y: number): number {
  return x + y;
};

//함수 타입 붙이기
let myadd2: (x: number, y: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};

// 함수 타입의 매개변수의 타입이 Number라면, 매개변수명은 바뀌어도 상관없다.
let myadd3: (baseValue: number, increment: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};

// myAdd4는 전체 함수 타입을 가집니다
// 오른쪽에 매개변수타입과 반환타입을 정하면, myaAdd4의 함수 타입이 정해진다
let myAdd4 = function (x: number, y: number): number {
  return x + y;
};
// 왼쪽의 함수타입을 정할 경우, 오른쪽의 x,y이 number으로 정해진다.
let myAdd5: (baseValue: number, increment: number) => number = function (x, y) {
  return x + y;
};

function buildName(firstName: string, lastName?: string) {
  if (lastName) {
    return firstName + " " + lastName;
  } else {
    return firstName;
  }
}

buildName("choi"); //동작
//에러 :많은 변수
//buildName("choi","dae","geon") //에러
buildName("choi", "dae");

export {};
