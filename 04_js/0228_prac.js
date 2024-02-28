// 합계 구하기
// 0 ~ 100의 숫자 중에서 2 또는 5의 배수 총합 구하기
// 나머지 연산자 % 를 사용
// 5 % 3 -> 2 (5를 3으로 나눈 나머지만 2의 값을 반환)

console.log('for문 합계-------------------------');

// 실습 1. 합계 구하기
// for 문

let pracSum = 0;

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0 || i % 5 === 0) {
    pracSum += i;
  }
}

console.log('while문 합계-------------------------');
// while문

let pracNum = 0;
let pracSum2 = 0;

while (pracNum <= 100) {
  if (pracNum % 2 === 0 || pracNum % 5 === 0) pracSum2 += pracNum;

  pracNum++;
}
console.log(pracSum2);

console.log('13의 배수이면서 홀수 찾기-------------------------');

// 실습 2. 13의 배수이면서 홀수 찾기 (for문이 흔히 작성)
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
