//생성자 시그니처
/**
 * @description 클래스나 생성자 함수가 객체를 생성할 때 사용할 수 있는 함수 형태를 정의한 것입니다.
 */
interface ClockConstructor{
    new (hour:number,minute:number):ClockInterFace
}

interface ClockInterFace{
    tick():void
}

function createClock(ctor:ClockConstructor,hour:number,minute:number):ClockInterFace{
    return new ctor(hour,minute)
}

class DigitalClock implements ClockInterFace{
    constructor(hour: number, minute: number) { }

    tick(): void {
        console.log("beep beep");
        
    }
}

class ValidClock implements ClockInterFace{
    constructor(hour: number, minute: number) { }

    tick(): void {
        console.log("valid clock ticking");
    }
}

let validclock = createClock(ValidClock,10,11)


export {}