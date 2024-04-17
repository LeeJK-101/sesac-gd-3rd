import { useContext } from 'react';
import { AgeContext } from '../contexts/AgeContext';
import { UserContext } from '../contexts/UserContext';
import { useRef } from 'react';

export default function Profile() {
  // AgeContext의 age와 setAge
  // UserContext의 name과 setName 모두 사용 예정

  // const ageContext = useContext(AgeContext);
  // console.log(ageContext); // 객체 형태 -> 구조분해할당 가능

  const { age, setAge } = useContext(AgeContext);
  const { name, setName } = useContext(UserContext);

  const ageRef = useRef();
  const nameRef = useRef();
  const changeInfo = () => {
    if (
      nameRef.current.value.lenth < 1 ||
      nameRef.current.value.trim() === ''
    ) {
      alert('이름을 다시 입력해주세요.');
      nameRef.current.focus();

      return;
    }
    if (
      ageRef.current.value.lenth === 0 ||
      ageRef.current.value.trim() === '' ||
      Number(ageRef.current.value) < 1
    ) {
      alert('나이를 다시 입력해주세요.');
      ageRef.current.focus();

      return;
    }
    setAge(Number(ageRef.current.value));
    setName(nameRef.current.value);
    ageRef.current.value = '';
    nameRef.current.value = '';
  };
  return (
    <>
      <h3>User Profile</h3>
      <div>이름 : {name}</div>
      <div>나이 : {age}</div>
      <input type='text' placeholder='이름 입력해주세요. ' ref={nameRef} />
      <button onClick={changeInfo}>이름 변경</button>
      <input type='number' placeholder='나이를 입력해주세요. ' ref={ageRef} />
      <button onClick={changeInfo}>나이 변경</button>
    </>
  );
}
