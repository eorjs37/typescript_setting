interface Person<N, A> {
  type: "human";
  race: "yellow";
  name: N;
  age: A;
}

interface Zero extends Person<"choi", 32> {}
interface Zero1 extends Person<"choi", 34> {}

const personFactoryE = <N, A>(name: N, age: A) => ({
  type: "human",
  race: "yellow",
  name,
  age,
});
export {};
