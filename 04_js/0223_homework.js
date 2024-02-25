console.log("connected!");

/* 함수선언문 형식
매개변수로 2개의 숫자 입력 받기
인자의 곱을 반환하는 함수 */
let num1 = Number(prompt("첫번째 숫자를 입력하세요."));
let num2 = Number(prompt("두번째 숫자를 입력하세요."));
function multifly(num1, num2) {
    return num1 * num2;
}


console.log(multifly(num1, num2));
alert(`${num1} 곱하기 ${num2}는 ${multifly(num1,num2)}점입니다!`)




/* 함수표현식 사용
매개변수로 하나의 숫자 입력 받기 
입력받은 수의 제곱을 콘솔에 출력하는 함수 */
let num3 = Number(prompt("제곱할 숫자를 입력하세요."));

const square = function(num3) { return num3 ** 2 };

console.log(square(num3));
alert(`${num3} 제곱은 ${square(num3)}점 입니다!`)


// let num1 = Number(prompt("첫번째 숫자를 입력하세요."));
// let num2 = Number(prompt("두번째 숫자를 입력하세요."));
// console.log(num1);
// console.log(num2);

// function multifly(num1, num2) {
//     return num1 * num2;
// }

// console.log("connected!");




// let avgScore2 = (mathScore2 + engScore2) / 2;

// console.log(multifly(num1,num2));
// alert(`${num1} 곱하기 ${num2}는 ${multifly}점 입니다!`);