type Start = string | number;
type Result = Start extends string ? Start[] : never;

type Result2<Key> = Key extends string ? Key[] : never;
let n: Result2<Start> = ["h2"];
export {};
