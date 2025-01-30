# typescript 시작

## 설치 명렁

```bash
npm install typescript --save-dev
```

## tsconfig.json 생성

### package.json

```json
{
  "name": "typescript-setting",
  "version": "1.0.0",
  "main": "index.js",
  "devDependencies": {
    "typescript": "^5.6.3"
  },
  "scripts": {
    "tsc-init": "tsc --init" // 명령어 등록
  },
  "author": "CHOI DAE GEON",
  "license": "ISC"
}
```

### 명령어 실행

```bash
npm run tsc-init
```

### 기본타입

- string

```typescript
// 문자열
let str: string = "string";
```

- number

```typescript
// 문자열
let num: number = 123;
```

- boolean

```typescript
//불린
let bool: boolean = false;
```

- object

```typescript
//object
let obj: object = { a: 1 };
```

- array

```typescript
//array : 제네릭 형태로 선언도 가능하다
let numarray: number[] = [1, 2, 3];
let numarray2: Array<number> = [1, 2, 3];
```

- tuple

```typescript
//tuple : 고정된 배열에서 각각의 요소에 타입을 정의
let tuple: [string, number, boolean] = ["str", 1, false];
//tuple error : 각 요소에 선언된 타입과 다를 경우 에러를 뱉는다
//let tupleError: [string, number, boolean] = ["str", 1, "1"];
```

- enum

```typescript
//enum : 열거형으로, 상수들의 집합
enum COMMON {
  USER,
  GUEST,
  MASTER,
}
```

- null

```typescript
//null : 값이 없는 형태
let valuenull: null = null;
```

- undefined

```typescript
//undefined : 값이 할당되지 않는 상태
let valueUndefined: undefined = undefined;
```

- any

```typescript
//any : 모든 타입을 혀용(되도록이면 쓰지 않는것을 권장)
let anything: any;
anything = 1;
anything = true;
anything = "str";
```

- void

```typescript
//void : 함수에서 쓰이며 리턴값이 없는 경우
function func(): void {
  console.log("call func");

  //error 일으킴
  //return 1;
}
```

- never

```typescript
//never : 보통 함수에서 사용되며, 에러를 일으킬때 사용
function errorFunc(): never {
  throw Error("ERROR");
}
```

- unknwon

```typescript
//unknwon : 알려지지 않는 타입이며, 어느 타입이든 들어갈 수 있다. 다만 다른 타입에 unknown 값을 넣을 경우 에러를 일으킴
let un: unknown;
un = 1;
un = 2;
un = bool;
un = anything;

//error : unknown값을 넣을 경우 에러를 일으킴
//num = un;
```

### 타입단언(Type assertions)

```
any로 선언된데이터를 as를 통해 변환한다.
해당변수에 대한 타입이 확신이 있을대 사용.
```

```typescript
//Type Assertions
let str: any = "someword";
const len: number = (str as string).length;
console.log(len);
```

### 인터페이스

```
컴퓨터세상에서의 인터페이스는 상호간의 규칙이며, 타입스크립트에서는 여러가지 타입으로 이루어진 새로운 타입
여러가지의 프로퍼티와 메소드들로 이루어질수 있음.
클래스와 차이는 인스턴스를 새로 생성하지 않음
```

## 제네릭

```
재사용할 수 있도록 제공하는 기능이며, 단일 타입이 아닌 다양한 타입에 작동할 수 있도록 작성
```
