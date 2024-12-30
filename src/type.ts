//문자열
let str:string = 'hello'
//숫자
let num:number = 123;
//불린
let bool:boolean = true;
//객체
let user:object = {name:'choi',age:32}
//배열
let arr:number[]= [1,2,3];
let arrgen:Array<number> = [1,2,3];
//튜플(배열의 길이는 고정되고, 각 요소의 타입이 지정되어있는 형식)
let tuple:[string,number] = ['1',2]
//정의되지 않는 타입은 오류
//tuple[5]=1;
//tuple[1].concat('1')

//enum
enum Avengers{
    Capt,
    IronMan, 
    Thor 
}

let hero:Avengers = Avengers.Capt;

//any(모든 타입에 사용할 수 있는 타입,any를 사용하면 타입추론이 힘듬)

//void(반환값이 없는 함수의 반환 타입)
function pringSomething():void{
    console.log('sth');
    
}
function pringSomething2():void{
    return;
}

//never(절대 발생하지 않는 값을 의미)