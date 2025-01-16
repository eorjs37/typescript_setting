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

//함수 표현식
const personFactoryE = <N, A>(name: N, age: A) => ({
  type: "human",
  race: "yellow",
  name,
  age,
});

//함수 선언문
function personFactoryD<N, A>(name: N, age: A) {
  return {
    type: "human",
    race: "yellow",
    name,
    age,
  };
}

class Person<N, A> {
  name: N;
  age: A;
  constructor(name: N, age: A) {
    this.name = name;
    this.age = age;
  }
  method<B>(param: B) {}
}

interface Person5<N, A> {
  type: "human";
  race: "yellow";
  name: N;
  age: A;
}

const personFactoryF = <N, A = unknown>(name: N, age: A): Person5<N, A> => {
  return {
    type: "human",
    race: "yellow",
    name,
    age,
  };
};

//타입추론이 가능하다
const zero = personFactoryF("zero", 11);

//상수 타입 매개변수
function values<T>(initial: T[]) {
  return {
    hasValue(value: T) {
      return initial.includes(value);
    },
  };
}

const savedValue = values(["a", "b", "c"]);
savedValue.hasValue("x");

function values2<const T>(initial: T[]) {
	return {
		hasValue(value: T) {
			return initial.includes(value)
		}
	}
}

const savedValue2 = values2(["a", "b", "c"])
//savedValue2.hasValue("x")

interface Example<A extends number, B = string>{
	a: A,
	b:B
}
//error
//type UseCase1 = Example<string,boolean>
type UseCase2 = Example<1, boolean>
type UseCase3 = Example<number>

interface Example2<A, B extends A>{
	a: A,
	b:B
}

//type UseCase4 = Example2<string, number>
type UseCase5 = Example2<string, 'hello'>
type UseCase6 = Example2<number, 123>


interface VO{
	value:any
}


function onlyBoolena(arg: true | false = true): true | false{
	return arg;
}
export {};
