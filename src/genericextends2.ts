/* 제네릭에서 제약을 걸려면 extends 를 통해 제약을 걸 수 있다. */
// T가 string이어야 한다
type A<T extends string> = {
  value: T;
};

// error : number는 string이 될 수 없다
// type C = A<number>
// string extends string이 때문에 오류가 뜨지 않는다
type B = A<string>;
const b: B = {
  value: "1",
};
type D = A<"1" | "2">;
const d: D = {
  value: "1",
};

interface Person {
  name: string;
  age: number;
}

/* 특정 타입을 갖도록 설정 */
function makePerson<T extends Person>(person: T) {
  console.log(person.age, person.name);
}

const person1: Person = {
  name: "choi",
  age: 32,
};

makePerson(person1);
// error : Person의 형태와 같지가 않다
// makePerson({
// 	name:'kim'
// })

/* 유니온 허용 */
function logging<T extends string | number>(log: T) {
  console.log(log);
}
logging(1);
logging("1");
//error : boolean은 logging의 유니온 타입에 존재하지 않는다
// logging(false);

/* 객체의 키로 제약걸기 */
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

getProperty({ a: 1, b: 2 }, "a");

/* 응답값 제네릭 활용하기 */
/**
 * api를 요청했을때 결과 값이 아래와 같다고 가정한다
 * {
 *   status:200,
 *   data:{
 *  	 resultCd:'0000',
 *     result:[
 *     		{
 *   				name:'choi',
 *          age:33,
 *        }
 *     ]
 *   }
 * }
 *
 *
 * 여기서, status,data, resultCd은 원시타입으로 받으나, reulst는 어떤 요청이냐에따라 형태가 변경될 수 있다.
 */

// response라는 인터페이스를 선언하고 status : number, data: T 로 선언함으로써 data를 제네릭으로 선언하게 한다
interface Response<T> {
  data: T;
  status: number;
}

// Result라는 인터페이스를 선언하고 Response의 제네릭 부분에 들어가는 곳 즉 data의 들어가는 곳이다.
// resultCd : string와 , result:T으로 선언함으로써 result는 다양한 타입이 올 수 있도록 한다.
interface Result<T> {
  resultCd: string;
  result: T;
}

// List라는 선언하고, Result의 제네릭에 대입할 수 있는 부분이다. name,age를 받도록 되어있다.
interface List {
  name: string;
  age: number;
}

function apiDummy<T>(url: string): Promise<Response<T>> {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => ({ data, status: 200 }));
}

// 최종적으로 형태는 아래와 같이 받을 수 있다
/* {
 *   status:200, // number
 *   data:{ // T => Result<T>
 *  	 resultCd:'0000', // string
 *     result:[  T => List
 *     		{
 *   				name:'choi',
 *          age:33,
 *        }
 *     ]
 *   }
 * }
 *
 */

apiDummy<Result<List[]>>("/test/api").then((res) => {
  const { result } = res.data;
  result.forEach((item) => {});
});
export {};
