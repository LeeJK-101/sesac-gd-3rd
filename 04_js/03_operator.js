console.log("connected!");

// 대입 연산자
// =
// 변수에 값을 할당할 때 사용하는 연산자
let a = 1;
const b = "1";

// 비교 연산자
// ==, !=
// 피연산자의 값이 같은지 비교
// 타입이 달라도 괜찮음 -> 값만 비교하기 때문
// 피연산자는 a, b같은 연산자의

//=, ==, !=; (연산자)
//a = b; (a,b 피연산자)

console.log(1 == 1); // true
console.log(1 == 2); // false
console.log(1 == "1"); // true (타입은 비교하지 않음.)

console.log(1 != 1); // -> 1과 1이 같지 않다! => 거짓 => false
console.log(1 != 2); // true
console.log(1 != "1"); // false

// ===, !==
// 피연산자의 값과 타입을 모두 비교
// 엄격한 동등 연산자
console.log("----------------------------------");
console.log(1 === 1); // true
console.log(1 === 2); // false
console.log(1 === "1"); // false -> 숫자 1과 문자 1은 다른 타입(타입까지 비교)
console.log(1 !== 1); // -> 숫자 1과 숫자 1은 같지 않다! => 거짓 => false
console.log(1 !== 2); // -> 숫자 1과 숫자 2는 같지 않다! => 참 => true
console.log(1 !== "1"); // -> 숫자 1과 문자 1은 같지 않다! => 참 => true

// 크기 비교
// >, >=, <. <=
console.log("----------------------------------");
console.log(2 > 1); // -> 2는 1보다 크다 -> true
console.log(1 >= 1); // -> 1는 1보다 크거나 같다 -> true
console.log(2 < 1); // 2는 1보다 작다 -> false
console.log(1 <= 1); // -> 1는 1보다 작거나 같다 -> true

// 산술 연산자
// +, -. **, /,   %(나머지), **(제곱)
console.log("----------------------------------");
console.log(1 + 2); // 3
console.log(1 - 2); // -1
console.log(1 * 2); // 2
console.log(1 / 2); //0.5

// 나머지 연산자
console.log(1 % 2); // -> 몫:0, 나머지:1 -> 1
console.log(8 % 3); // -> 몫:2, 나머지:2 -> 2
console.log(8 % 5); // -> 몫:1, 나머지:3 -> 3

// 제곱 연산자
console.log(1 ** 2); // 1

// 연산자 예시
// num%2 -> 홀수 짝수 감별
// num%10 -> 100점 만점 점수를 10점대로 나누기

console.log("----------------------------------");

// 논리 연산자
// !, &&, ||
console.log(!true); //false
console.log(!false); //true
console.log(!!true); // -> true -> !때문에 false -> !! 때문에 true -> true
console.log(!!false); //false
console.log(true && true); // true
console.log(1 < 2 && 1 < 5); // true
console.log(1 > 2 && 1 < 5); // false

console.log(true || true); // true
console.log(true || false); // true
console.log(1 > 2 || 1 < 5); // true
console.log(1 > 2 || 1 > 5); // false

// 논리 연산자로 여러개 비교할 수 있다.
// 다만 코드는 실행했을 때 런타임이 짧아야 해서 너무 길게 쓰지 않는게 좋다.

// 연산자 응용
console.log(!(2 > 1));
console.log(2 > 1 && -2 < 1);
console.log((2 > 1 && -2 < 1) || 5 > 3);

console.log("----------------------------------");

// Quiz
// 코드 결과 작성

console.log(3 <= 1); // false
console.log(7 == "7"); // true
console.log(-10 >= -11); // true

console.log("----------------------------------");
