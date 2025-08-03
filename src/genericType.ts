type IsNever<T> = [T] extends [never] ? true : false;
type T = IsNever<never>;

type IsNever2<T> = T extends string ? true : false;
type T2 = IsNever2<never>;

function test<T extends [T] extends [string] ? string : never>(a: T) {
  type R<T> = [T] extends [string] ? T : T;
  const b: R<T> = a;
  console.log(b);
}

function test2<T extends [T] extends [string] ? string : never>(a: T) {
  type R<T> = [T] extends [string] ? T : T;
  const b: R<T> = a;
}
export {};
