"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const b = {
    value: "1",
};
const d = {
    value: "1",
};
/* 특정 타입을 갖도록 설정 */
function makePerson(person) {
    console.log(person.age, person.name);
}
const person1 = {
    name: "choi",
    age: 32,
};
makePerson(person1);
// error : Person의 형태와 같지가 않다
// makePerson({
// 	name:'kim'
// })
/* 유니온 허용 */
function logging(log) {
    console.log(log);
}
logging(1);
logging("1");
//error : boolean은 logging의 유니온 타입에 존재하지 않는다
// logging(false);
/* 객체의 키로 제약걸기 */
function getProperty(obj, key) {
    return obj[key];
}
getProperty({ a: 1, b: 2 }, "a");
function apiDummy(url) {
    return fetch(url)
        .then((response) => response.json())
        .then((data) => ({ data, status: 200 }));
}
