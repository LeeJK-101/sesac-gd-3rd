import { useState } from 'react';
export default function EventColor() {
  const [textColor, setTextColor] = useState({
    color: 'black',
    text: '검정색 글씨',
  });

  return (
    <>
      <h1 style={{ color: textColor.color }}>{textColor.text}</h1>
      <button
        onClick={() => {
          setTextColor({ color: 'red', text: '빨간색 글씨' });
        }}
      >
        {' '}
        빨간색{' '}
      </button>
      <button
        onClick={() => {
          setTextColor({ color: 'blue', text: '파란색 글씨' });
        }}
      >
        {' '}
        파란색{' '}
      </button>
    </>
  );
}
