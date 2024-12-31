//Type Assertions
let str: any = "someword";
const len: number = (str as string).length;
console.log(len);

export {};
