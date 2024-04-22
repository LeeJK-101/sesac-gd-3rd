import { useState, useReducer } from 'react';

const reducer = (prevState, action) => {
  console.log('dispatch 호출 시 reducer 동작함');
  console.log(prevState, action);

  switch (action.type) {
    case 'deposit':
      return Number(prevState) + Number(action.payload);
    case 'withdraw':
      return Number(prevState) - Number(action.payload);
    case 'withdrawAll':
      return Number(prevState) - Number(prevState);
    default:
      return Number(prevState);
  }
};

export default function Bank() {
  // 출금하고 입금할 값 -> 입력 받을 예정
  const [number, setNumber] = useState(0);

  // const [스테이트, 디스페치] = useReducer(리듀서, 스테이트의 초기값)
  const [money, dispatch] = useReducer(reducer, 0);
  return (
    <>
      <h2>bank state redux로 관리하기</h2>
      <div>잔고 {money.toLocaleString()}</div>
      <input
        type='number'
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        step='1000'
      />
      <button
        onClick={() => {
          dispatch({ type: 'deposit', payload: number });
        }}
      >
        입금
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'withdraw', payload: number });
        }}
      >
        출금
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'withdrawAll', payload: null });
          alert('잔고가 0원입니다.');
          setNumber(0);
        }}
      >
        전액 출금
      </button>
    </>
  );
}
