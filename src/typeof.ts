function strOrNum(param: string | number) {
  if (typeof param === "string") {
    param;
  } else if (typeof param === "number") {
    param;
  } else {
    param;
  }
}

function strOrNummUndefined(param: string | null | undefined) {
  if (param === undefined) {
    param;
  } else if (param === null) {
    param;
  } else {
    param;
  }
}

class A {}
class B {}

function classAorB(param: A | B) {
  if (param instanceof A) {
    param;
  } else {
    param;
  }
}

interface X {
  width: number;
  height: number;
}

interface Y {
  length: number;
  center: number;
}

function objXorY(param: X | Y) {
  if ("width" in param) {
    param;
  } else {
    param;
  }
}

interface Money {
  __type: "money";
  amount: number;
  unit: string;
}

interface Liter {
  __type: "liter";
  amount: number;
  unit: string;
}

function moneyOrLiter(param: Money | Liter) {
  if (param.__type === "money") {
    param;
  } else {
    param;
  }
}

function isMoney(param: Money | Liter): param is Money {
  if (param.__type === "money") {
    return true;
  } else {
    return false;
  }
}
export {};
