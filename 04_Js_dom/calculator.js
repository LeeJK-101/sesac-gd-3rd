


console.log('connected')

const calculate = document.getElementById('calculate');
const reset = document.getElementById('reset');

calculate.addEventListener('click', function calculator() {
  const value1 = parseFloat(document.getElementById('value1').value);
  const value2 = parseFloat(document.getElementById('value2').value);
  const math = document.getElementById('math').value;
  const result = document.getElementById('result');

  switch (math) {
    case '+':
      result.value = value1 + value2;
      break;
    case '-':
      result.value = value1 - value2;
      break;
    case '*':
      result.value = value1 * value2;
      break;
    case '/':
      result.value = value1 / value2;
      break;
    default:
      alert('+, -, /, * 중에 하나를 입력하세요')
  }
})

reset.addEventListener('click', () => {
  document.getElementById('value1').value = '';
  document.getElementById('value2').value = '';
  document.getElementById('math').value = '';
  document.getElementById('result').value = '';
})







// console.log('connected')

// const value1 = document.getElementById('value1').value;
// const value2 = document.getElementById('value2').value;

// const math = document.getElementById('math').value;
// const result = document.getElementById('result').value;

// const calculate = document.getElementById('calculate');
// const reset = document.getElementById('reset');
// console.log(value1)
// console.log(value2)
// console.log(math)


// calculate.addEventListener('click', function calculator() {
//   switch (math) {
//     case '+':
//       return result.value = value1 + value2;
//       break;
//     case '-':
//       return result.value = value1 - value2;
//       break;
//     case '*':
//       return result.value = value1 * value2;
//       break;
//     case '/':
//       return result.value = value1 / value2;
//       break;
//     default :
//     alert('+, -, /, * 중에 하나를 입력하세요')
//   }
// })


// reset.addEventListener('click', () =>{
//   value1.value = '';
//   value2.value = '';
//   math.value = '';
//   result.value = '';
// })

// //document.getElementById('math');


