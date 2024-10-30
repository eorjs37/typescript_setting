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
