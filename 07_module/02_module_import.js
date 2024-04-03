// package.json에서 "type": "module"로 수정

// 02_module01.js 사용

import { flowers, getFlower, getFlowersLength } from './02_module01.js'; // 파일명 반드시 볼것

console.log(flowers);
getFlowersLength(); //콘솔로 출력하는 함수라 콘솔 필요 없음.
console.log(getFlower(0)); // console.log <--- log 빼먹었음
console.log(getFlower(12));

// 한 번에 export 한 변수, 함수등을 가져오는 방법
// *을 사용해 한 번에 가져오는 방법은 메모리 효율 , 처리 소도 측면에서 좋지 않음
// 되도록이면 사용할 변수명이나 메서드 명을 명시하는 것이 좋음.
import * as flower from './02_module01.js';
console.log(flower);

//메모리 효율 안좋은, 처리 속도 좋지 않음.
// 실행환경에서의 효율이 안좋음.
// 코드를 쓰는 사람입장에서는 편하지만
// 이런식으로 작성하지 않는게 좋다.

//----------------------------------------
// 02_module02.js 사용
import { showAnimals, addAnimal } from './02_module02.js';
showAnimals();
console.log(addAnimal('horse'));

//-------------------------------------------------------

// 03_module.js 사용
// import sayStatus from './03_module.js';

// sayStatus('sleepy');
// sayStatus('hungry');
// sayStatus('boring');
// sayStatus('happy');

// 한 번에 내보낸 sayStatus2 사용
import sayStatus2 from './03_module.js';

sayStatus2('sleepy');
sayStatus2('hungry');
sayStatus2('boring');
np;
