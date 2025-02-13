type A = string | boolean;

type B = boolean | number;

type C = A & B;

type D = {} & (string | null);

type E = string & boolean;

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
      return initial.includes(value);
    },
  };
}
const savedValue2 = values2(["a", "b", "c"]);
savedValue2.hasValue("a");
export {};
