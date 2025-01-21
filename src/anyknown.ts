//any : 어떠한 값도 넣을 수 있고, 사용할 수 있다.

let anything: any;
anything = 1;
// anything의 대한 값을 사용할 수 있으나, 런타임시에 오류 날 가능성이 있음
anything.someMethod();
anything = false;
anything = { a: 1 };

// unknown : 어떠한 값도 넣을 수는 있으나, 사용할려고 하면 타입검사가 필요함
let unknownthing: unknown;
unknownthing = 1;
//Error : unknownthing 타입을 알 수 가 없으니 concat 사용시 에러

// 사용할려면, 타입을 확인후 사용
if (typeof unknownthing === "string") {
  unknownthing.concat("a");
}
export {};
