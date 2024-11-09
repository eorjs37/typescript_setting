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

### 인터페이스
```
컴퓨터세상에서의 인터페이스는 상호간의 규칙이며, 타입스크립트에서는 여러가지 타입으로 이루어진 새로운 타입
```