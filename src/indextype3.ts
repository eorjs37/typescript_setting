type Person = { age: number; name: string; alive: boolean };
type Age = Person["age"];

const MyArray = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
];

type Person1 = typeof MyArray[number];

const objSalary = {
  bouns: 200,
  pay: 2000,
  allowance: 100,
  incentive: 100,
};

function totalSalary(salary: { [key: string]: number }) {
  let total = 0;
  for (const key in salary) {
    total += salary[key];
  }
  return total;
}

// 인덱스 시그니처 : 속성이름과 개수가 정해지 않거나, 동적으로 결정할때
interface UserAges<T> {
  [username: string]: T;
}

const ages: UserAges<number | boolean> = {
  alice: 30,
  isAlive: false,
};

interface Dictionary<T> {
  [key: string]: T;
}

let keys: keyof Dictionary<number>;
let value: Dictionary<number>["foo"];

export {};
