console.log('connected!');
// 1. 1 ~ 100 까지의 배열을 for 문을 사용해서 만들기

console.log('1 ~ 100 까지의 배열 ');
let numbers = [];
for (let i = 1; i <= 100; i++) {
  numbers.push(i);
}
console.log('numbers:', numbers);

// 2. 해당 배열의 합 구하기
//  for 문
numbersSum = 0;

for (let i = 0; i < 100; i++) {
  numbersSum += numbers[i];
}
console.log('numbersSum:', numbersSum);

//  For of 문

let numbersSum2 = 0;
for (let i of numbers) {
  numbersSum2 += i;
}
console.log('numbersSum2:', numbersSum2);

//  forEach 문
let numbersSum3 = 0;
numbers.forEach(function (num) {
  numbersSum3 += num;
});
console.log('numbersSum3:', numbersSum3);
