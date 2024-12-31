//never 타입

//1.함수가 알수없는 이슈로 종료가 될때 반환타입으로 사용된다
function errorMessage(str: string): never {
  throw Error(str);
}
//2.불가능한 상태를 나타낼때
type COMMON = "common1" | "common2";

function commonFn(common: COMMON): number {
  switch (common) {
    case "common1":
      return 1;
    case "common2":
      return 2;
    default:
      // type COMMON이 common1,common2에 대한 조건식이 존재하고 그 외에는 추론이 되지않아
      // common이 never으로 타입이 추론되는것
      const err: never = common;
      throw Error(err);
  }
}
