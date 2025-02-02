//
function genricType<T>(arg: T): T {
  return arg;
}

//제네릭은 단일타입이 아닌 다양항 타입에 작동할 수 있도록 하는 기능이다
let output1 = genricType(1);
let output2 = genricType("1");
let output3 = genricType(false);

function genricType1<T>(arg: T): T {
  //단 any와 다른 점은 인자의 멤버가 없는 경우 오류를 일으킨다
  //console.log(arg.length);

  return arg;
}
//만약 쓰고 싶다면 length속성이 있는 것으로 변경한다(ex 배열형태)
function genricType2<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg;
}

//any타입은 타입쓰는것을 포기했다는 것이다
function anyType(arg: any): any {
  console.log(arg.length);

  return arg;
}

//제네릭 타입
function genricType3<T>(arg: T): T {
  return arg;
}

//제네릭 함수 타입
let myFunction: <T>(arg: T) => T = genricType3;
myFunction(1);

//리터럴 타입
let myFunction2: { <T>(arg: T): T } = genricType3;

//인터페이스 제네릭
interface GenericFn {
  <T>(arg: T): T;
}

let myFunction3: GenericFn = genricType3;
interface GenericTypeFn<T> {
  (arg: T): T;
}
let myFunction4: GenericTypeFn<number> = genricType3;

//제네릭 클래스
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

let numberGenric = new GenericNumber<number>();
numberGenric.zeroValue = 0;
numberGenric.add(1, 2);

//제네릭 타입 제한
function logFn<T>(arg: T): T {
  // 타입의 제한이 없기때문에, number 가 들어올경우 length 속성이 없어서 오류를 뱉음
  //console.log(arg.length)
  return arg;
}

//length 타입 제한 걸기
interface Lengthwise {
  length: number;
}

// extends를 통해서 타입의 제한을 걸 수 있다.
function logFnConstraints<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);

  return arg;
}

logFnConstraints("3");

//다른 곳에서 선언된 제네릭타입을 타입으로 선언가능
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  //
}

let x = { a: 1, b: 2, c: 3 };
getProperty(x, "a");
//T의 object의 사용되지 않는 key값을 사용할 수 없도록 제한을 걸어둔다
//getProperty(x,"d")

export {};
