value1 = document.getElementById('value1');
value2 = document.getElementById('value2');

math = document.getElementById('math');
function calculator() {
  switch (math) {
    case '+':
      value1 + value2;
      break;
    case '-':
      value1 - value2;
      break;
    case '*':
      value1 * value2;
      break;
    case '/':
      value1 / value2;
      break;
  }
}

document.getElementById('math');
