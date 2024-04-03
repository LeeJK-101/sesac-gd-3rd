// es6
// 바로 export 시키기

export const animals = ['cat', 'dog', 'rabbit'];

export function showAnimals() {
  animals.forEach((ani) => console.log(ani));
}

export const addAnimal = (newAni) => {
  // animals 배열에 인자로 전달받은 newAni를 추가한 후
  // 해당 배열을 반환하는 함수 만들기
  animals.push(newAni);
  return animals;

  //   기존 리스트는 유지하고 새로운리스트 만들기
  //   const newAnimalsArr= animals;
  //   newAnimalsArr.push(newAni);
  //   return newAnimalsArr // 계속 기준 배열을 쓰고 있기때문에 기존 배열에 +1 만 추가
};

addAnimal('chicken');
console.log(animals);
