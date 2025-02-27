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

function isMoney(param: Money | Liter): param is Money {
  if (param.__type === "money") {
    return true;
  } else {
    return false;
  }
}

function moneyOrLiter(param: Money | Liter) {
  if (isMoney(param)) {
    param;
  } else {
    param;
  }
}

export {};
