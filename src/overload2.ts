// 다양한 인수의 개수, 타입을 받을 수 있도록 하는것
function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}

const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);

function len(s: string): number;
function len(arr: any[]): number;
function len(x: any) {
  return x.length;
}

len("");
len([0]);
// 한가지 타입만 들어갈 수 있다. hello | number[] 은 허용하지 않는다
// len(Math.random() > 0.5 ? 'hello' : [0])
export {};
