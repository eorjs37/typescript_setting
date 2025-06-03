/**
 * 인터페이스의 단점은 남이 만든 인터페이스명과 겹칠경우 병합이됨
 */
interface Merge {
  one: string;
}
// 오류 : 인터페이스 속성이 같은경우, 타입도 같아야함
// interface Merge{
// 	one:number
// }

namespace Example {
  export interface Inner {
    test: string;
  }
  export type test2 = number;
}
const ex1: Example.Inner = {
  test: "test",
};
const ex2: Example.test2 = 1;

namespace Example2 {
  export type test2 = number;
}

const ex3: Example2.test2 = 123;

export {};
