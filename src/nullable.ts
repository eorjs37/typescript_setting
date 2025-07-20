interface Person {
  name: string;
  age: number;
  country: string;
}

type OmitType = Omit<Person, "name"> | null;
const omit: OmitType = null;
export {};
