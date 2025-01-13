interface Zero {
  type: "human";
  race: "yellow";
  name: "zero";
  age: 28;
}

interface Nero {
  type: "human";
  race: "yellow";
  name: "nero";
  age: 32;
}

interface Person<N, A> {
  type: "human";
  race: "yellow";
  name: N;
  age: A;
}

interface Zero1 extends Person<"zero", 28> {}
interface Nero1 extends Person<"nero", 32> {}

interface Person2<N = string, A = number> {
  type: "human";
  race: "yellow";
  name: N;
  age: A;
}

type Person1 = Person2;
type Person3 = Person2<number>;
type Person4 = Person2<string, string>;

function values<T>(initial: T[]) {
  return {
    hasValue(value: T) {
      return initial.includes(value);
    },
  };
}
const savedValues = values(["a", "b", "c"]);
savedValues.hasValue("x");

interface Music<N, M> {
  type: "music";
  color: "black";
  name: N;
  musicId: M;
}

const musicFactoryE = <N, M = unknown>(name: N, musicId: M): Music<N, M> => ({
  type: "music",
  color: "black",
  name,
  musicId,
});

const test = musicFactoryE("music", 12);
export {};
