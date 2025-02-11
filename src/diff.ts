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

type IsSubset<A, B> = A extends B ? true : false;

type R11 = IsSubset<string, string | number>;
type R21 = IsSubset<{ name: string; age: number }, { name: string }>;
type R3 = IsSubset<symbol, unknown>;

type Equal<A, B> = [A] extends [B] ? ([B] extends [A] ? true : false) : false;

type R12 = Equal<boolean, true | false>;

//any는 구별못함
type Equal2<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y
  ? 1
  : 2
  ? true
  : false;
export {};
