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
interface Response<T> {
  data: T;
  status: number;
}

function apiDummy<T>(url: string): Promise<Response<T>> {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => ({ data, status: 200 }));
}
export {};
