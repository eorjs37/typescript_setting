const obj = {
  hello: "world",
  name: "zero",
  age: 33,
};

type Keys = keyof typeof obj;
type Values = typeof obj[Keys];

const a = "ehllo";
type A = typeof a;

type Predicate = (x: unknown) => boolean;
type K = ReturnType<Predicate>;

function f() {
  return {
    x: 10,
    y: 3,
  };
}

type K2 = ReturnType<typeof f>;

const test = {
  hello: "1",
  test: 2,
};
type TESTTYPE = keyof typeof test;
type K3 = keyof typeof test;
type TESTVALUES = typeof test[TESTTYPE];

type AnyKeys = keyof any;
type ArrayKeys = keyof [1, 2, 3];
let arr: ArrayKeys = "lastIndexOf";
arr = "length";
arr = "0";
arr = "1";
export {};
