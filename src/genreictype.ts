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

function personFactoryD<N, A>(name: N, age: A) {
  return {
    type: "human",
    race: "yellow",
    name,
    age,
  };
}

interface Person2<N = string, A = number> {
  type: "human";
  race: "yellow";
  name: N;
  age: A;
}

type Pesron3 = Person2;
type Pesron4 = Person2<number>;
type Pesron5 = Person2;



function values<const T>(initial: T[]){
	return {
		hasValues(value: T) {
			return initial.includes(value)
		}
	}
}

const savedValue = values(["a","b","c"])
savedValue.hasValues("a")

interface VO{
	value: any;
}

const returnVo = <T extends VO>() => {
	return null
}
export {};
