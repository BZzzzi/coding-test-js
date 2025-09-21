# 📘 백준 Node.js 입력 처리 방법 (fs 모듈 사용)

백준에서 Node.js(JavaScript)를 사용할 때는 `fs` 모듈을 이용한 입력 처리만 가능 <br/>
`readline`은 지원되지 않으므로, 아래 형식으로 입력을 받아야 한다.


## 1. 한 줄 입력 시

```js
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const num = Number(input[0]);

for (let i = 1; i <= num; i++) {
  console.log(i);
}
```


## 2. 여러 줄 입력 시

```js
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const count = Number(input[0]);

for (let i = 1; i <= count; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  console.log(a + b);
}
```

> `readFileSync` 경로를 백준 제출 시엔 '/dev/stdin'로 넣고 로컬에선 본인 input.txt 파일 경로를 넣으면 된다.
