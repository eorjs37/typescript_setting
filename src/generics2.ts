function identify<T>(args: T): T {
  return args;
}

let output = identify("ddd");
let outputnum = identify<number>(1);

//error
function loggingIdentity1<T>(arg: T): T {
  //T타입에는 length 속성이 없다. 사용할 경우 타입좁히기로 처리
  if (typeof arg === "string") {
    console.log(arg.length);
  }

  return arg;
}

function loggingIdentity<T>(arg: T[]): T[] {
  console.log(arg.length);

  return arg;
}

loggingIdentity([1, 2, 3]);

//제네릭 타입
function identity1<T>(arg: T): T {
  return arg;
}
let myIdentity: <T>(arg: T) => T = identity1;
// 타입변수명 변경 가능
let myIdentity2: <U>(arg: U) => U = identity1;
// 객체 리터럴 형식으로도 표현 가능
let myIdentity3: { <T>(arg: T): T } = identity1;

//제네릭 인터페이스
interface GenericIdentityFn {
  <T>(arg: T): T;
}

interface GenericIdentityFn1<T> {
  <T>(arg: T): T;
}

function identity2<T>(arg: T): T {
  return arg;
}
let myIdentity4: GenericIdentityFn = identity2;
let myIdentity5: GenericIdentityFn1<number> = identity2;

//제네릭 제약조건
//extends를 사용함으로써 제약을 건다
interface Lengthwise {
  length: number;
}

function loggingIdentity2<T extends Lengthwise>(args: T): T {
  console.log(args.length);

  return args;
}

//Number에는 length 속성이 존재 하지 않음
//loggingIdentity2(22);

loggingIdentity2("22");
export {};
