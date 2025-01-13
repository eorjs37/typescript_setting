interface Money {
  amount: number;
  unit: string;
}

interface Liter {
  amount: number;
  unit: string;
}

const liter: Liter = { amount: 1, unit: "liter" };
const circle: Money = liter;
export {};
