/*======================= 초과 프로퍼티 검사 =======================*/
//name,age선언
interface Person {
  name: string;
  age: number;
}

function createPerson(person: Person) {
  console.log(person.name);
}

//name,age보다 초과한 경우 에러를 일으키지 않음
const person = {
  name: "choi",
  age: 30,
  test: "Ss",
};

//최소한의 프로퍼티만 있는지 확인(name)
createPerson(person);

//선택적 프로퍼티
//인터페이스의 속하지 않는 프로퍼티를 사용할 경우 오류를 일으킴
interface Animal {
  legs?: number;
  hand?: number;
}

function createAnimal(animal: Animal): { total: number } {
  let total = 0;

  if (animal.hand) {
    total += animal.hand;
  }

  //오류 - 인터페이스의 속하지 않는 프로퍼티를 사용할 경우 오류를 일으킴
  // if (animal.hands) {

  // }

  if (animal.legs) {
    total += animal.legs;
  }
  return { total };
}
createAnimal({
  legs: 10,
});

// 선택적 프로퍼티 + 일반 인터페이스의 초과 프로퍼티
// born(선택),age(선택)
interface Korea {
  born?: string;
  age?: number;
}

function createKorea(korea: Korea) {}

createKorea({
  born: "",
  age: 30,
});

//오류 - 프로퍼티가 존재 하지않아 오류
//createKorea({ borns: "", age: 30 });

//타입단언으로 해결
createKorea({ borns: "", age: 30 } as Korea);

// 추가 프로퍼티를 사용할 경우 오류를 일으킴
// createKorea({
// 	born: "",
// 	age: 30,
// 	test:""
// })

/*======================= 함수 타입 =======================*/
interface SearchFunc {
  (source: string, substring: string): boolean;
}
let mySearch: SearchFunc = function (source: string, substring: string) {
  let result = source.search(substring);
  return result > -1;
};

//매개 변수이름이 같을 필요는 없음
mySearch = function (src: string, sub: string): boolean {
  let result = src.search(sub);
  return result > -1;
};

//이미 타입이 SearchFunc이기 때문에,타입 추론도 가능하다
mySearch = function (src, sub) {
  let result = src.search(sub);
  return result > -1;
};

/*======================= 인덱서블 타입 =======================*/

interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ["1", "2"];
let myStr: string = myArray[0];

class Animals {
  name!: string;
}
class Dog extends Animals {
  breed!: string;
}

//인덱스블 타입이 선언된 즉시, 인터페이스 안의 모든 타입이 인덱스 타입으로 변환됨
interface NotOkay {
  name: string;
  //[x: number]: Animal;
  age: number;
  //[x: string]: Dog;
}
/*======================= 클래스 타입 (Class Types) =======================*/
interface ClockInterFace {
  currentTime: Date;
  setDate(d: Date): void;
}

class Clock implements ClockInterFace {
  currentTime: Date = new Date();
  constructor(h: number, m: number) {}
  setDate(d: Date): void {
    this.currentTime = d;
  }
}
//
export {};
