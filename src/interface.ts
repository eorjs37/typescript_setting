//인터페이스 : 값의 형태에 초점을 맞추고 있다. 이런 타입의 형태에 이름을 짓고 코드안의 계약을 정의
interface LabeledValue{
    label:string;
}


function printLabel(labeledObj:{label:string}){
    console.log(labeledObj.label);
}

function printLabel2(labeledObj:LabeledValue){
    console.log(labeledObj.label);
    
}
//최소한의 프로퍼티만 만족하더라도 오류가 안생긴다
const myobj = {size:10,label:"Size 10 Object"}
printLabel(myobj)
printLabel2(myobj)



//선택적 프로퍼티
interface SquareConfig{
    color?:string;
    width?:number;
}

function createSquare(config:SquareConfig):{color:string,area:number}{
    let newSquare = {color:"white",area:100}
    if(config.color){
        newSquare.color = config.color
    }

    if(config.width){
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
createSquare({color:"Black"})

//읽기 전용 프로퍼티
interface Point{
    readonly x:number;
    readonly y:number;
}

export {}