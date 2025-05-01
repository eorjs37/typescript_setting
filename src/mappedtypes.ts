interface Person {
  age: number;
  name: string;
  isAlive: boolean;
}

type PersonPartial = Partial<Person>;
const aPerson: PersonPartial = {};
const bPerson: PersonPartial = { age: 12 };

type Keys = "option1" | "option2";
type Flags = { [K in Keys]: boolean };

type Nullable<T> = { [P in keyof T]: T[P] | null };
type Partial1<T> = { [P in keyof T]?: T[P] };

type NullablePerson = Nullable<Person>;
type Partial1Person = Partial1<Person>;
export {};
