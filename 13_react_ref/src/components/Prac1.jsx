import { useState } from 'react';

export default function Prac1() {
  // 현재 입력되어있는 사용자의 데이터
  // 서버에서 받아왔다는 전제 하에 작성되어 있음
  // data state는 유저의 id, user, email을 포함하고 있는 객체의 "배열"
  const [data, setData] = useState([
    { id: 1, user: '장원영', email: 'wonyoung@gmail.com' },
    { id: 2, user: '안유진', email: 'yujin@gmail.com' },
  ]);

  // inputUser state 추가 -> 사용자가 입력한 자신의 이름을 저장하는 state
  // 이름을 작성하는 input에 value로 inputUser가 들어가 있음
  // 이름을 작성하는 input에 onChange 속성으로 setInputUser를 사용해서
  // 해당 input의 value로 업데이트 됨
  const [inputUser, setInputUser] = useState('');

  // inputEmail state는 사용자가 입력한 자신의 메일 주소를 작성하는 state
  // 메일을 작성하는 input에 value로 inputEmail이 들어가 있음
  // 메일을 작성하는 input에 onChange 속성으로 onChangeEmail 함수 연결
  // onChangeEmail 함수는 setInputEmail에 현재 이벤트가 발생한 요소의 value를
  // 전달해서 inputEmail이라는 state의 값을 업데이트함
  const [inputEmail, setInputEmail] = useState('');

  // nextID라는 state는 data state의 각 요소에 들어가는 값 중 하나
  // data state는 객체의 배열로, 각 객체에는 id, user, email이 포함됨
  // user, email은 사용자에게 입력을 받아야 함
  // 하지만 id값의 경우 사용자가 모름
  // 그렇게 때문에 data.lenth -> data 배열의 길이에 1을 더해 직접 id값을 만듬
  const [nextId, setNextId] = useState(data.length + 1); // useState(3)

  //input focus를 위한 ref 생성
  const userInputRef = useRef();
  const emailInputRef = useRef();

  // 사용자의 이름을 받는 input에 변경사항이 있을 때 실행되는 함수
  // onChange로 연결 되어 있으며 해당 함수가 실행될 때
  // 해당 이벤트가 발생한 input의 value를 inputUser State의 값으로 업데이트함
  const onChangeUser = (e) => setInputUser(e.target.value);

  // onChangeEmail 함수 값을 받는다.
  // 사용자의 email을 받는 input에 변경사항이 있을 때 실행되는 함수
  // onChange로 연결되어 있으며 해당 함수가 실행될 때
  // 해당 이벤트가 발생한 input의 value를 inputEmail state의 값으로 업데이트 함
  // 이 함수에서 사용되는 e는 event 객체 -> react synthetic event 객체!
  // e.target : 현재 이벤트가 발생한 요소 -> input
  // e.target.value : 현재 이벤트가 발생한 input 요소의 value 속성값
  const onChangeEmail = (e) => setInputEmail(e.target.value);

  //validation 로직
  // if 두개 하면 둘다 돌아감.
  // trim()은 앞뒤 공백을 다 없애버림
  const validation = () => {
    if (inputUser.trim().length === 0) {
      userInputRef.current.focus();

      return false;
    }
    if (inputEmail.trim().length === 0) {
      emailInputRef.current.focus();

      return false;
    }
    return true;
  };

  // eventClick 함수 설명
  // email을 입력받는 input에 onKeyDown 속성과 등록 버튼의 onClick 속성에서 사용됨
  //새로운 데이터를 data state에 추가, input 2개(user, email)를 초기화, nextId state를 1 더한 값으로 업데이트

  const eventClick = () => {
    if (!validation) {
      return; //validation 이 false값이면 return쓰면 빠져나감. return은 그 함수가 끝나는 것.
    }

    // 새로운 데이터를 기존 데이터 배열에 추가
    // 방법 1. concat
    // 참고) concat(): https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/concat

    // const nextData = data.concat({
    //   id: nextId,
    //   user: inputUser,
    //   email: inputEmail,
    // });

    // 방법 2. ...연산자 사용(스프레드 연산자)
    // nextData는 새로 업데이트 될 데이터
    // 원래 data state의 값을 spread 연산자를 사용해 객체 각각을 불러내고
    // 가장 마지막에 새로 입력받은 user의 정보를 객체 형태로 추가하고 있음.
    const nextData = [
      ...data,
      {
        id: nextId,
        user: inputUser,
        email: inputEmail,
      },
    ];

    // nextId state의 값을 1 더함
    // 다음 사용자의 id 값으로 들어가야 하는데, id는 고유해야 하므로 1 증가한 값으로 넣어 주기때문.
    setNextId(nextId + 1);
    // data state를 위에서 선언한 nextData로 업데이트
    // 새로 추가된 데이터가 가장 마지막에 더해짐
    // 컴포넌트 리렌더링 되면서 브라우저에 추가된 데이터 함께 렌더링
    setData(nextData);
    // setInputUser와 setInputEmail을 통해 inputUser, inputEmail state의 값을
    // 빈 문자열로 업데이트 -> 현재 inputUser와 inputEmail은 각 input의 value로 연결
    // 각 state가 빈 문자열이 되면 해당 input도 빈 문자열로 바뀜
    // input을 초기화 시켜 사용자가 다음 데이터를 입력하기 편하게 입력란을 비워둠.
    setInputUser('');
    // 이메일 input값 비우기
    setInputEmail('');
  };

  // emailInput에 onKeyDown 속성으로 연결되어 있는 함수
  // 해당 input에 focus된 상태로 키보드가 눌려있는 순간 실행
  // 현재 눌린 키보드가 enter라면 eventClick 함수를 호출
  const onKeyDownEnter = (e) => {
    if (e.key === 'Enter') {
      eventClick();
    }
  };
  // 모든 사용자를 보여주는 h2 요소에 onDoubleClick으로 연결되어 있는 함수
  // h2 요소에 더블 클릭 발생 시 호출
  // 현재 data state에서 매개변수로 받은 id와 같지 않은 요소만 배열로 저장해서
  // data state 업데이트

  const onRemoveData = (id) => {
    // filter() 메서드 : 배열을 돌면서 각 요소에 조건에 만족하는 요소만 모아 배열로 "반환"
    // 매개변수로 받은 id 값과 data state 배열의 모든 요소들을 순회하면서
    // id 값이 같지 않은 요소만 모아서 배열로 반환하고,
    // 반환된 새 배열을 NextData 변수에 저장
    const NextData = data.filter((data) => data.id !== id);
    // 반환된 NextData배열의 값으로 data state의 값을 업데이트
    setData(NextData);
  };

  return (
    <div>
      {/* input으로 user와 email.을 받음, 등록 버튼을 누르면  */}
      {/* value 속성으로 inputUser state를 가지고 있음 */}
      <input
        type='text'
        name='user'
        ref={userInputRef}
        placeholder='이름'
        value={inputUser}
        onChange={onChangeUser}
      />
      <input
        type='text'
        name='email'
        ref={emailInputRef}
        placeholder='이메일'
        value={inputEmail}
        onChange={onChangeEmail}
        onKeyDown={onKeyDownEnter}
      />
      <button onClick={eventClick}>등록</button>
      {/* 
        data state를 순회하면서 h2 요소에 각 값을 보여주고,
        onDoubleClick 속성으로 onRemoveData 함수를 호출하며 현재 사용되고 있는 요소의
        id값을 매개변수로 넘겨주고 있음
        dataList는 JSX문 안에서 삽입됨
       */}
      {/* const dataList = data.map((data) => (
    <h2 key={data.id} onDoubleClick={() => onRemoveData(data.id)}>
      {data.user}: {data.email}
    </h2>
  )); */}
      {/* <div>{dataList}</div> */}
      {/*data state를 순회하면서 h2 요소에 각 값을 보여주고 
      onDoubleClick 속성으로 onRemoveData 함수를 호출하며 현재 사용되고 있는 요소의 
      id값을 매개변수로 넘겨주고 있음*/}
      {data.map((d) => (
        <h2 key={d.id} onDoubleClick={() => onRemoveData(d.id)}>
          {d.user} : {d.email}
        </h2>
      ))}
    </div>
  );
}
