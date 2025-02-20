type MyExclude<T, U> = T extends U ? never : T;
type Result = MyExclude<1 | "2" | 3, string>;

type MyExtract<T, U> = T extends U ? T : never;
type Reult1 = MyExtract<1 | "2" | 3, string>;

type MyOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
type Result2 = MyOmit<{ a: "1"; b: 2; c: true }, "a" | "c">;

type MyNonNullable<T> = T extends null | undefined ? never : T;
type Result3 = MyNonNullable<string | number | null | undefined>;

type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
type Result4 = Optional<{ a: "hi"; b: 123 }, "a">;

//
type MyParameters<T extends (...args: any) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;

// ThisType
// const obj = {
//   data: {
//     money: 0,
// 	},
// 	methods: {
// 		addMoney(amount: number) {
// 			this.money+=amount
// 		},
// 		useMoney(amount: number) {
// 			this.money-=amount
// 		}
// 	}
// };
type Data = { money: number };
type Methods = {
  addMoney(this: Data & Methods, amount: number): void;
  useMoney(this: Data & Methods, amount: number): void;
};
type Obj = {
  data: Data;
  methods: Methods;
};

const obj: Obj = {
  data: {
    money: 0,
  },
  methods: {
    addMoney(amount) {
      this.money += amount;
    },
    useMoney(amount) {
      this.money -= amount;
    },
  },
};

type Data2 = { money: number };
type Methods2 = {
  addMoney(amount: number): void;
  useMoney(amount: number): void;
};

type Obj2 = {
  data: Data;
  methods: Methods & ThisType<Data & Methods>;
};

const obj2: Obj2 = {
  data: {
    money: 0,
  },
  methods: {
    addMoney(amount) {
      this.money += amount;
    },
    useMoney(amount) {
      this.money -= amount;
    },
  },
};

interface Array<T> {
  myForEach(callback: () => void): void;
}
export {};
