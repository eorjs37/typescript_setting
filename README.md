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
- number
- boolean
- object
- array
- tuple
- enum
- null
- undefined
- any
- void
- never

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
