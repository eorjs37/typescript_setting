type A = {
  a1: string;
} & { b: number };

const a: A = { a1: "1", b: 1 };
export {};
