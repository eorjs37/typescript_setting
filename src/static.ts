// 타입스크립트에서는 오류를 일으킴. 인터페이스에서는 생성자 시그니처를 못 쓰 되어 있음
// interface ClockConstructor {
//   new (hour: number, minute: number);
// }

//생성 시그니처
//클래스의 생성자가 호출될때 매개변수의 형태와 타입을 정의

// 생성 시그니처를 정의한 인터페이스입니다
// hour,minute를 받고 ClockInterface타입의 객체를 리턴
interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
}

// tick라는 매서드 가진다.
interface ClockInterface {
  tick(): void;
}

class Clock implements ClockInterface {
  constructor(hour: number, minute: number) {
    console.log(`Clock set to ${hour}:${minute}`);
  }
  tick(): void {
    console.log("Tick tock...");
  }
}

//팩토리 함수
function createClock(
  ctor: ClockConstructor,
  hour: number,
  minute: number
): ClockInterface {
  return new ctor(hour, minute);
}
export {};
