//or
type A1 = string | number;
const a1: A1 = 1;
const a11: A1 = "1";

//and
type A2 = string & number;

type Diff<A, B> = Omit<A & B, keyof B>;
type R1 = Diff<
  { name: string; age: number },
  { name: string; married: boolean }
>;

type SymDiff<A, B> = Omit<A & B, keyof (A | B)>;
type R2 = SymDiff<
  { name: string; age: number },
  { name: string; married: boolean }
>;
export {};
