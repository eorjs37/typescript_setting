"use strict";
function person(person) {
    console.log(person.name, person.age);
}
const personObject = {
    age: 32,
};
person(personObject);
function person2(person) {
    console.log(person.name, person.age);
}
person2(personObject);
function person3(person) {
    const newPerson = {
        fullName: "",
    };
    if (person.name) {
        newPerson.fullName += person.name;
    }
    if (person.age) {
        newPerson.fullName += "/" + person.age;
    }
    return newPerson;
}
person3({
    age: 11,
});
//
function person4(person) {
    const newPerson = {
        fullName: "",
    };
    return newPerson;
}
person4({
    names: "",
    ages: 11,
});
let mySearchFunc;
mySearchFunc = function (source, subString) {
    let result = source.search(subString);
    return result > -1;
};
let mySearch = function (src, sub) {
    let result = src.search(sub);
    return result > -1;
};
let myarray;
myarray = ["Bob", "Fred"];
let myStr = myarray[0];
console.log(myStr);
const diffNumber = function (a, b) {
    return a > b;
};
diffNumber(1, 2);
function createAplayz(obj) {
    let fullinfo = "";
    if (obj.age) {
        fullinfo += obj.age;
    }
    if (obj.name) {
        fullinfo += obj.name;
    }
    return { fullinfo };
}
createAplayz({
    name: "choidaegeon",
    age: 33,
});
//오류 : 프로퍼티 개수가 부족하면 오류가 나지
createAplayz({
    age: 20,
});
