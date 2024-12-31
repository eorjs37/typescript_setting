//문자열
let str: string = "hello";
//숫자
let num: number = 123;
//불린
let bool: boolean = true;
//객체
let user: object = { name: "choi", age: 32 };
//배열
let arr: number[] = [1, 2, 3];
let arrgen: Array<number> = [1, 2, 3];
//튜플(배열의 길이는 고정되고, 각 요소의 타입이 지정되어있는 형식)
let tuple: [string, number] = ["1", 2];
//정의되지 않는 타입은 오류
//tuple[5]=1;
//tuple[1].concat('1')

//enum
enum Avengers {
  Capt,
  IronMan,
  Thor,
}

let hero: Avengers = Avengers.Capt;

//any(모든 타입에 사용할 수 있는 타입,any를 사용하면 타입추론이 힘듬)

//void(반환값이 없는 함수의 반환 타입)
function pringSomething(): void {
  console.log("sth");
}
function pringSomething2(): void {
  return;
}

//never(절대 발생하지 않는 값을 의미)
function invalid(message: string): never {
  throw Error(message);
}

function callInvalid() {
  invalid("error");
  console.log("next");
}

callInvalid();

function infiniteLoop(): never {
  while (true) {}
  console.log("!");
}
type Shape = "circle" | "square" | "triangle" | "hexagon";

function getShapeArea(shape: Shape): number {
  switch (shape) {
    case "circle":
      return Math.PI * 1 * 1; // 예: 반지름이 1인 원
    case "square":
      return 1 * 1; // 예: 한 변이 1인 정사각형
    case "triangle":
      return 0.5 * 1 * 1; // 예: 밑변과 높이가 1인 삼각형
    case "hexagon":
      return 1;
    default:
      const _exhaustiveCheck: never = shape;
      throw Error(`Unhandled shape: ${_exhaustiveCheck}`);
  }
}

//object타입 : 원시타입이 아닌타입
declare function create(o: object | null): void;
create({ prop: 0 });
create(null);

//error
//create(1)
