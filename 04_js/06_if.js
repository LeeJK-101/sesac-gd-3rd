console.log('connected');

// **** 는 주석 해제해야 작동
/* 
조건문
- 어떤 조건에 따라 논리 구조를 나눔
- 각 조건에 '분기'라고 함
- 조건에 따라 서로 다른 문장을 실행*/
/*
  if문의 기본 구조
  if(조건) {
      조건이 참인 경우 실행될 코드
  }
  조건이 참이면 코드블록(중괄호 내용이 실행됨.
*/
// 조건이 하나만 있는 경우
if (5 > 3) {
  console.log('5는 3보다 큽니다.');
}

// 만약 조건이 false라면 해당 코드 블럭이 실행되지 않고 넘어감
if (5 > 7) {
  console.log('조건이 false이므로 이 코드블럭은 실행되지 않고 넘어감.');
}

// let number = Number(prompt('숫자를 입력해주세요.')); // 입력받은 값을 number 타입으로 강제로 형변환을
// console.log(number);

// 입력받은 수가 10가 클 때 if 다음의 코드블럭을 실행
// 입력받은 수가 10가 작거나 같을 때 else문의 코드블럭을 실행
//
// if (number > 10) {
//   console.log('입력받은 수가 10보다 큽니다.');
// } else {
//   console.log('입력받은 수가 10보다 작습니다.');
// }

// else if문
// if else문에 다른 조건을 추가하는 형식
// else문은 하나만 사용 가능. 하지만 else if문은 여러개 사용 가능
// 여러개의 분기로 나누고 싶으면 else if를 여러개 사용해서 조건을 많이 작성할 수 있습니다.

// if (number > 10) {
//   console.log('입력받은 수가 10보다 큽니다.');
// } else if (number === 10) {
//   //웬만하면 비교시 ===(3개짜리)를 쓸 것.
//   console.log('입력받은 수가 10입니다.');
// } else {
//   console.log('입력받은 수가 10보다 작습니다.');
// }

console.log('----------------------');
//console.clear(); // 콘솔 클리어

// 성적 계산하는 프로그램
const score = Number(prompt('성적을 입력해주시요.')); // ****

// 조건이 true가 나온다면 해당 코드블럭을 실행하고, 나머지 조건문은 실행되지 않음
// 위의 조건을 통과하고 다음 조건문을 실행하는 경우 위의 조건들이 모두 false였음을 잊지 않기
if (score > 100) {
  // 100점 초과의 점수는 없으므로 잘못된 입력으로 처리
  console.log('점수가 잘못 입력되었습니다.');
} else if (score >= 90) {
  // score가 100 ~ 90점 사이의 점수일 때 실행
  console.log('A');
} else if (score >= 80) {
  // score가 89 ~ 80점 사이의 점수일 때 실행
  console.log('B');
} else if (score >= 70) {
  // score가 79 ~ 70점 사이의 점수일 때 실행
  console.log('C');
} else if (score >= 60) {
  // score가 69 ~ 60점 사이의 점수일 때 실행
  console.log('D');
} else {
  // 60점 미만의 점수는 F로 처리
  console.log('F');
}

// 실행

// 만족하는 분기를 찾았기 때문에 이후 else if는 읽지 않음

const age = Number(prompt('나이 입력해주시요.')); // ****

if (age >= 20) {
  console.log('성인');
} else if (age >= 17) {
  console.log('고등학생');
} else if (age >= 14) {
  console.log('중학생');
} else if (age >= 8) {
  console.log('초등학생');
} else if (age >= 0) {
  console.log('유아');
} else {
  console.log('음수값이 들어왔습니다.');
}

// 다른 방법
if (age < 0) {
  console.log('음수 값이 들어왔습니다.');
} else if (age < 8) {
  // age가 0보다 크거나  같으면서 8보다 작은 경우
  console.log('유아');
} else if (age < 14) {
  console.log('초등학생');
} else if (age < 17) {
  console.log('중학생');
} else if (age < 20) {
  console.log('고등학생');
} else if (age < 150) {
  console.log('성인');
} else if (age >= 150) {
  console.log('나이로 들어올 수 없는 값이 입력되었습니다.');
} else {
  console.log('음수값이 들어왔습니다.');
}

// 다른 방식
// if (age >= 150 && age <0) {
//     console.log('나이로 들어올 수 없는 값이 입력되었습니다. ')
// } ...
//

//조건문은 최대한 많이 거를 수 있는 조건문에 처음으로 올 것

console.log('----------------------');

// 조건문 중첩하기
// 조건문 안에 조건문 작성 가능

// 조건문 함수로 구현
const userId = 'user01';
const userPw = '1234qwer';

// 조건문 함수로 구현
/**
 * 입력받은 아이디와 비밀번호가 맞는 확인 후 적절한 알림창을 띄움
 */
function loginUser() {
  const inputId = prompt('아이디를 입력해주세요');
  const inputPw = prompt('비밀번호를 입력해주세요');

  if (userId === inputId) {
    if (userPw === inputPw) {
      console.log('로그인 성공!');
      alert(`안녕하세요, ${userId}님`);
    } else {
      console.log('로그인 실패!');
      alert('비밀번호를 다시 입력해주세요.');
    }
  } else if (inputId === '') {
    alert('아이디가 입력되지 않았습니다.');
  } else {
    alert('아이디를 다시 입력해주세요.');
  }
}

// loginUser(); // ****

// swtich문
// swtich의 괄호 안과 case의 조건으로 비교식이 들어갈 수 없음.
/*
1. 변수 x의 값과 첫 번째 case문의 값 3을 비교
2. 두 값이 동일하다면: (콜론) 뒤의 코드가 실행
3. break문을 통해 해당 스코프에서 빠져나옴
4. 만약 첫 번째 case문의 값과 x가 다르다면 다음 case문의 값과 비교
5. 모든 case문의 값과 x값이 다르다면 default문 다음의 코드가 실행
*/
// break는 필수 작성
// default문 생략 가능
let x = 5;

// switch문의 괄호 안에는 조건이 아닌 값이 들어감
// case에도 조건이 아닌 값을 작성

switch (x) {
  case 3:
    console.log('x는 3입니다.');
    break;
  case 4:
    console.log('x는 4입니다.');
    // break 작성하지 않으면 case 4를 실행하고 싶을 때 case 5까지 모두 실행됨
    // 해당 스코프를 빠져나가지 못하는 것.
    // 원하는 코드가 실행된 이후 꼭 break 사용해 스코프를 빠져나올 수 이도록 작성
    break;
  case 5:
    console.log('x는 5입니다.');
    break;
  default:
    console.log('x는 3,4,5가 아닌 다른 값입니다. ');
}

// if문으로 작성한 성적 계산하는 프로그램 switch문 사용하도록 수정
let number = 100;

// 이럴 땐 점수를 10으로 나눈 몫을 찾아와 number로 전달, case 값도 변경

// number를 10으로 나누고 정수로 만듬
switch (parseInt(number / 10)) {
  //case 10:, case 9: 이 두 개는 A의 값이 출력됨.
  case 10:
  case 9:
    console.log('A');
    break;
  case 8:
    console.log('B');
    break;
  case 7:
    console.log('C');
    break;
  case 6:
    console.log('D');
    break;
  default:
    console.log('F');
    break;
}

//삼항 연산자
// 조건식 ? 조건이 참 일때 실행될 코드 : 조건이 거짓일 때 실행될 코드

// 홀수, 짝수 판별하기
let num = 5;

if (num % 2 === 1) {
  console.log('홀수');
} else {
  console.log('짝수');
}

//data state를 순회하면서 h2 요소에 각 값을 보여주고 연산자

// 얘는 확인할 수 없음.
num = 1;
num % 2 === 1 ? '홀수' : '짝수';

// 콘솔로 출력하려면 1번째 방법
let result = num % 2 === 1 ? '홀수' : '짝수';
console.log(result);

let fruit = 'banana';
console.log(fruit === 'banana' ? '바나나' : '바나나가 아닙니다. ');

let isLoggedIn = true;
isLoggedIn === true
  ? console.log('로그인 유저입니다.')
  : console.log('로그인하지 않은 유저입니다.');

//data state를 순회하면서 h2 요소에 각 값을 보여주고 연산자인 경우 다음과 같이 중첩해서 쓰지 않는다.
//쉽게 이해할 수 있는 것을 삼항연산자를 쓸 것.
isLoggedIn === true
  ? number > 10
    ? '로그인한 유저인데, number 값이 10보다 큼'
    : '로그인한 유저인데, number 값이 10보다 작음'
  : '로그인하지 않은 유저';

//키와 밸류를 가진 것이 객체,

// 삼항연산자 실습
// 오전 / 오후 출력하기
let now = new Date().getHours();
console.log(now);

console.log(now < 12 ? '오전' : '오후');
