function values<T>(initial: T[]) {
  return {
    hasValue(value: T) {
      return initial.includes(value);
    },
  };
}

values(["a", "b", "c"]);


function values2<const T>(initial: T[]) {
	return {
		hasValue(value: T) {
			return initial.includes(value)
		}
	}
}

values2(["a","b","c"])

interface Example<A extends number, B = string>{
	a: A,
	b: B
}

//Error
//type UseCase1 = Example<string, boolean>
type UseCase2 = Example<1, boolean>
type UseCase3 = Example<number>

interface VO{
	value: any;
}

// const returnVO = <T extends VO>(): T => {
// 	return {
// 		value:'test'
// 	}
// }

// function onlyBoolean<T extends boolean>(arg: T = false):T {
// 		return false
// }

type Start = string | number;
type New = Start extends string | number ? Start[] : never;
let n:New = ['hi']
n = [123]


type ChosseArray<A> = A extends string ? string[] : never;
type StringArray = ChosseArray<string>;
type Never = ChosseArray<number>


let a: unknown;
a = 1;

type OmitByType<O, T> = {
	[K in keyof O as O[K] extends T ? never : K] :O[K]
}

type Result = OmitByType<{
	name: string,
	age: number,
	married: boolean,
	rich:boolean
},boolean>

export {};
