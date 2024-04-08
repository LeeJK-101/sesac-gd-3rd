// 함수형 컴포넌트에서 useState hook을 통해 state 사용 실습

import { useState } from 'react';

export default function FuncComponent() {
  const [number, setNumber] = useState(0);
  const increase = () => {
    setNumber(number + 1);
  };
  const decrease = () => {
    setNumber(number - 2);
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => increase()}> + 1 </button>
      <button onClick={() => decrease()}> - 2 </button>
    </div>
  );
}
