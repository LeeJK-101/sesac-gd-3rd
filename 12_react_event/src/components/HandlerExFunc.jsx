import { useState } from 'react';
export default function HandlerExFunc() {
  const [msg, setMsg] = useState('Hello World!');

  const byeWorld = () => {
    setMsg('Goobye World!');
  };

  return (
    <>
      <h1>{msg}</h1>
      <button onClick={byeWorld}>클릭 </button>
    </>
  );
}
