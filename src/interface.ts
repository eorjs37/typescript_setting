function person(person:{name:string,age:number}){
    console.log(person.name,person.age);
}

const personObject = {
    name:"최대건",
    age:32
}

person(personObject)

// 인터페이스 생성
interface PersonInterface{
    name:string,
    age:number
}

function person2(person:PersonInterface){
    console.log(person.name,person.age);
}

person2(personObject)

//선택적프로퍼티
interface PersonInterface2{
    name?:string,
    age?:number
}

function person3(person:PersonInterface2): {fullName:String}{
    const newPerson = {
        fullName:""
    }
    if(person.name){
        newPerson.fullName += person.name
    }
    
    if(person.age){
        newPerson.fullName += "/"+person.age
    }
    return newPerson
}

person3({
    age:11
})

//
function person4(person:PersonInterface2): {fullName:String}{
    const newPerson = {
        fullName:""
    }

    return newPerson
}
person4({
    names:"",
    ages:11
} as PersonInterface2)

//함수타입
interface SearchFunc{
    (source:string,subString:string):boolean
}

let mySearchFunc:SearchFunc
mySearchFunc = function(source:string,subString:string){
    let result = source.search(subString)
    return result > -1
}

let mySearch:SearchFunc = function(src:string,sub:string){
    let result = src.search(sub)
    return result > -1
}

//인덱스블 타입
interface StringArray{
    [index:number]:string;
}
let myarray:StringArray
myarray = ["Bob","Fred"]
let myStr: string = myarray[0]
console.log(myStr);
