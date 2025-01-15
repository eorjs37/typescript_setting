interface Person1 {
  type: "human";
  race: "yello";
  name: "TEST1";
  age: 32;
}

interface Person2 {
  type: "human";
  race: "yello";
  name: "TEST2";
  age: 28;
}

//제네릭으로 중복 제거
interface PersonGenric<N, A> {
  type: "human";
  race: "yello";
  name: N;
  age: A;
}

interface Person3 extends PersonGenric<"choi", 32> {}
interface Person4 extends PersonGenric<"choi2", 28> {}
export {};
