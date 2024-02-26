console.log('connected!');

// for문
/*
 for (for문 내에서 사용할 변수 선언; 조건식 (어디까지 증가/감소할지 작성); 증감) {
    반복할 코드
 }
*/
// 증감식 스타일
// i + 1 = i / i += 1 / i++  -> 모두 동일함.
// i - 1 = i / i -= 1 / i--  -> 모두 동일함.
// i++: 변수 i에서 값을 꺼낸 뒤, 1을 더함
// i--: 변수 i에서 값을 꺼낸 뒤, 1을 뺌

// 5씩 늘리고 싶을 때 -> i += 5 -> i를 5씨 늘림

// let i = 0 안 쓰고, i = 0으로 써도 되지만 자바스크립트는 느슨하므로, 되도록 엄격하게 작성하려고 함.
// const로 안하는 이유 - 상수가 아니기 때문

for (let i = 0; i < 10; i += 3) {
  // console.log('안녕', i);
  console.log(`안녕 ${i}`);
}

// 1부터 5까지 1씩 증가하면서 출력하는 방법
// 1. i <=5
for (let i = 0; i <= 5; i++) {
  console.log(i);
}
// 2. i< 6
for (let i = 0; i < 6; i++) {
  console.log(i);
}

//5부터 1까지
for (let i = 5; i > 0; i -= 1) {
  console.log(i);
}

// 퀴즈. 1부터 n까지 모든 수를 더해 result로 콘솔에 찍기
let n = 10;
let result = 0;

for (let i = 1; i <= n; i++) {
  // result = result + i;
  result += i; // 더 짧게
}

console.log(result);

// for문과 배열 함께 사용하기
// 배열의  모든 요소 출력하기
let cafe = ['americano', 'latte', 'espresso', 'tea'];
console.log(cafe.length); // 배열의 길이를 출력, 4라고 출력

// 배열의 길이는 4, 4번째 항목의 인덱스값은 [3]이기 때문에
for (let i = 0; i < cafe.length; i++) {
  console.log('cafe.menu', cafe[i]);
  // i가 0일 때 cafe[0]
  // i가 1일 때 cafe[1]
  // i가 2일 때 cafe[2]
  // i가 3일 때 cafe[3]
  // i가 4일 때 하지 않아요! -> i가 4이기 때문 -> 조건식이 false이어서 for문
}

// 배열 요소의 총 합 구하기
let numArr = [99, 88, 77, 66, 55];
let numSum = 0;

for (let i = 0; i < numArr.length; i++) {
  // numSum = numSum + numArr[i];
  numSum += numArr[i];
}
console.log(numSum);

// for문과 if문 함께 사용
// 짝수만 출력
// 1. for문만 사용
for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}

// 2. if문과 함께 사용
for (let i = 2; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 2단만들기
// let j = Number(prompt('2-9단 중 쓰기'));
// console.log(`${j} 단`);
// for (let i = 1; i <= 9; i++) {
//   console.log(`${j} * ${i} = ${j * i}`);
//   {
//   }
// }

for (let i = 2; i <= 9; i++) {
  console.log(`---${i} 단---`);
  for (let j = 1; j <= 9; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}

// console.clear();

// // const number = 2;
// const number = Number(prompt('구구단을 계산할 숫자를 입력해주세요.'));
// console.log(number + '단');
// for (let i = 1; i < 10; i++) {
//   // console.log(number +' * '+ i + '=' + number * i);
//   console.log(`${number} * ${i} = ${number * i}`);
// }

// 이중 for문
for (let i = 2; i <= 9; i++) {
  console.log(`${i} 단`);
  for (let j = 1; j <= 9; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

// 이중 for문
for (let i = 2; i <= 9; i++) {
  console.log(`${i} 단`);
  for (let j = 1; j <= 9; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}
