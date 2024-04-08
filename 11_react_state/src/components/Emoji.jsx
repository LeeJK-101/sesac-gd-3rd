// 숫자 조정하고 숫자에 따라 이모지 바꾸기

import { useState } from 'react';

export default function Emoji() {
  const [number, setNumber] = useState(0);
  const increase = () => {
    setNumber(number + 1);
  };
  const decrease = () => {
    setNumber(number - 1);
  };

  return (
    <div>
      <h1>
        {number}
        {number > 7 ? ' 😘' : ' :( '}
      </h1>
      <button onClick={() => increase()}> + 1 </button>
      <button onClick={() => decrease()}> - 1 </button>
    </div>
  );
}
