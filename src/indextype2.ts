function pluck<T, K extends keyof T>(o: T, propertyNames: K[]): T[K][] {
  return propertyNames.map((n) => o[n]);
}

interface Car {
  manufacturer: string;
  model: string;
  year: number;
}
let taxi: Car = {
  manufacturer: "Toyota",
  model: "Camry",
  year: 2014,
};

let makeAndModel: string[] = pluck(taxi, ["manufacturer", "model"]);
let modelYear = pluck(taxi, ["model", "year"]);
// keyOf 객체 타입의 키들을 유니온 타입추출
type Person = {
  name: string;
  age: number;
};

type PersonKeys = keyof Person;

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

let person: Person = {
  name: "choi",
  age: 32,
};
const value = getProperty(person, "name");
console.log(value);

interface Dictionary<T> {
  [key: string]: T;
}

let keys: keyof Dictionary<number>;

interface Props {
  name: string;
  [key: string]: string;
}
export {};
