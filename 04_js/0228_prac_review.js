// -------------------------------------------------------------
// 실습 1. 0 ~ 100 숫자 중 2 또는 5의 배수 총 합계 구하기
// for 문
let pracSum = 0;

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0 || i % 5 === 0) {
    pracSum += i;
  }
}

console.log(pracSum);

// while 문
let pracNum = 0;
let pracSum2 = 0;

while (pracNum <= 100) {
  if (pracNum % 2 === 0 || pracNum % 5 === 0) pracSum2 += pracNum;

  pracNum++;
}

console.log(pracSum2);

// 실습 2. 13의 배수이면서 홀수 찾기
let input = Number(prompt('숫자를 입력해주세요.'));

for (let i = 0; i <= input; i++) {
  if (i % 13 === 0 && i % 2 === 1) {
    console.log(i);
  }
}

// 실습 3. 이중 for문을 사용해 구구단 출력
// i는 구구단의 단, j는 단에 곱해줄 수
for (let i = 2; i <= 9; i++) {
  console.log(`---${i} 단---`);
  for (let j = 1; j <= 9; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}
