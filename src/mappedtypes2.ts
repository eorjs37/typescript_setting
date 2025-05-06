interface Person {
  name: string;
  age: number;
}
type Readonly1<T> = {
  readonly [P in keyof T]: T[P];
};

type Partial1<T> = {
  [P in keyof T]?: T[P];
};

type PersonReadOnly = Readonly1<Person>;
type PersonPartial = Partial1<Person>;

// 멤버추가
type PartialWithNewMember<T> = {
  [P in keyof T]?: T[P] & { newMember: boolean };
};
type PWM = PartialWithNewMember<Person>;

export {};
