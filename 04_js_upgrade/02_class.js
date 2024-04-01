class House {
  // constructor : 생성자 함수
  // house라는 클래스의 속성을 초기화
  constructor(name, age, window) {
    this.name = name; //이 클래스에는 name이라는 key를 가질 것이고, value는 생성자 함수에서 전달받은 name이다.
    this.age = age;
    this.window = window;
  }
  // 메서드
  consoleInfo() {
    console.log(
      `이 아파트의 이름은 ${this.name}이고, ${this.age}년 건축되었습니다.`
    );
  }
  consoleWindow() {
    console.log(`${this.name} 아파트의 창문은 ${this.window}개 입니다.`);
  }
}
// obj = { a: 1, b: 2 };
// obj.c = 3;
// console.log(obj);

// house 클래스를 사용해 오브젝트 만들기
const house1 = new House('고덕 그라시움', 2020, 10);
const house2 = new House('고덕 아르테온', 2018, 1);
const house3 = new House('리앤파크', 2024, 5);
const house4 = new House('고덕 래미안 힐스테이트', 2007, 20);
console.log(house1);
console.log(typeof house1);
house1.consoleInfo();
// 클래스는 자주 사용하지 않은데, 다른언어에서 클래스를 사용해서
// 자바스크립트에서도 클래스를 쓰는 사람이 있음.

//------------------------------------------

// 상속

class Apartment extends House {
  constructor(name, age, window, floor, password) {
    // super(상속받을 속성) : 인자로 작성된 부모의 속성 상속
    super(name, age, window);
    this.floor = floor; // Apartment 클래스에서 사용할 속성
    this.password = password;
  }
  consolePassword() {
    console.log(`이 아파트의 비밀번호 ${this.password}입니다🤫`);
  }

  // 오버라이딩 : 기존 메서드를 재정의
  consoleWindow() {
    console.log(
      `이 아파트의 창문은 모두 ${this.window} 개 이고, 총 ${
        this.floor
      }층이므로 모든 창문의 갯수는 ${this.window * this.floor}개 입니다.`
    );
  }
}

const apt1 = new Apartment('Ipark', 2017, 6, 20, 64516);

console.log(apt1);

apt1.consoleWindow(); // 새롭게 정의돈 메서드 사용
apt1.consolePassword(); // 새롭게 메서드 추가 가능
apt1.consoleInfo(); // 부모 메서드 그대로 사용 가능

// 내가 시도한 것.
// class Shape {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }
//   //메서드
//   getArea() {
//     size = width * height;
//     return size;
//   }
// }

// let rec1 = new Shape(3, 4);
// console.log(rec1.getArea());

// Shape 클래스 만들기 실습
class Shape {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  getArea() {
    return this.height * this.width;
  }
}
// rec1 -> 인스턴스
let rec1 = new Shape(3, 4);
console.log(rec1.getArea());

// 선택 실습 (원)
class Circle extends Shape {
  constructor(height, width, radius) {
    super(height, width);
    this.radius = radius;
  }

  getArea() {
    return (this.width / 2) ** 2 * this.radius;
  }
}

const cir = new Circle(5, 5, 3.14);
console.log(cir.getArea());
