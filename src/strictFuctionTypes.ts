function a(x: string): number {
  return 0;
}

type B = (x: string) => number | string;
let b: B = a;

function a1(x: string): number | string {
  return 0;
}

type B1 = (x: string) => number;
// Error
// let b1: B1 = a1;

function a2(x: string): number {
  return 0;
}
//
type B2 = (x: number | string) => number;
// let b2: B2 = a2;
export {};
