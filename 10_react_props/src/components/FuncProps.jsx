// 1. props 매개변수
/*
export default function FuncProps(props) {
  // 부모 요소에서 props 전달한 데이터가 propbs 내부에 객체 형태로 저장
  console.log(props);

  return (
    <>
      <h1>함수형 컴포넌트에서 props 사용1</h1>
      <div>전달받은 props 객체를 점 접근법으로 바로 접근해 사용</div>
      <div>weather props로 전달받은 데이터 : {props.weather}</div>
      <div>feeling props로 전달받은 데이터 : {props.feeling}</div>
    </>
  );
}
*/

//--------------------------------------------------------------------

// 2. 컴포넌트 내에서 props 매개변수를 구조 분해
/*
export default function FuncProps(props) {
  //   props를 구조 분해 할당해서 weather와 feeling으로 바로 값을 사용할 수 있도록 하기!</>
  // {} <- 객체라는 뜻임
  const { weather, feeling } = props;
  console.log(weather);
  console.log(feeling);
  return (
    <>
      <h1>함수형 컴포넌트에서 props 사용하기2</h1>
      <div>전달받은 props 객체를 구조 분해하여 사용</div>
      <div>weather props로 전달받은 데이터 : {weather}</div>
      <div>feeling props로 전달받은 데이터 : {feeling}</div>
    </>
  );
}
*/

//--------------------------------------------------------------------
// 3. 매개변수로 props를 받아올 때부터 구조 분해
/*
export default function FuncProps({ weather, feeling }) {
  //   props를 구조 분해 할당해서 weather와 feeling으로 바로 값을 사용할 수 있도록 하기!</>
  // {} <- 객체라는 뜻임

  console.log(weather);
  console.log(feeling);
  return (
    <>
      <h1>함수형 컴포넌트에서 props 사용하기3</h1>
      <div>매개변수로 props를 받아올 때부터 구조 분해하여 사용</div>
      <div>weather props로 전달받은 데이터 : {weather}</div>
      <div>feeling props로 전달받은 데이터 : {feeling}</div>
    </>
  );
}
*/

//--------------------------------------------------------------------
// 4. 매개변수로 props를 받아올 때부터 구조 분해
/*
import propTypes from 'prop-types';

export default function FuncProps({ weather, feeling, date }) {
  //   props를 구조 분해 할당해서 weather와 feeling으로 바로 값을 사용할 수 있도록 하기!</>
  // {} <- 객체라는 뜻임

  console.log(weather);
  console.log(feeling);
  console.log(typeof date);

  return (
    <>
      <h1>함수형 컴포넌트에서 props 사용하기4</h1>
      <div>default props를 새용해 weather props만 보여주기</div>
      <div>오늘의 날짜는 {date}</div>
      <div>weather props로 전달받은 데이터 : {weather}</div>
      <div>feeling props로 전달받은 데이터 : {feeling}</div>
    </>
  );
}

//weather props의 기본값 설정
//만약 weather props가 전달되지 않는다면 defaultProps에서 해당 값을 찾아 사용

// 값이 없으면 default 값이 나옴.
FuncProps.defaultProps = {
  weather: 'cloudy',
};

//feeling이 없어도(undefined여도) 자바스크립트는 그냥 없는 것은 보여줌.

// props의 타입 지정
// 전달받은 props의 타입을 지정해 예기치 못한 에러를 줄이기 위함.
// isRequired : 필수로 해당 props를 전달하도록 제한 -> 전달 안하면 콘솔에 에러메시지 남.
// 이외 props들은 전달되지 않으면 undefined 일 뿐 에러는 안남 -> js의 유연한 특성 때문
FuncProps.propTypes = {
  weather: propTypes.string,
  feeling: propTypes.string,
  date: propTypes.number.isRequired,
};
*/

//--------------------------------------------------------------------

// 5. props.chidren
// 부모 컴포넌트에서 해당 컴포넌트가 import 되어 사용될 때
// 이 컴포넌트의 content를 가지고 와야 하는 경우

// 문자열전달.
/*
export default function FuncProps(props) {
  return <div>{props.children}</div>;
}
*/

//함수 전달
/*
export default function FuncProps(props) {
  return <div onClick={props.children}>클릭해줘!</div>;
}
*/

// 많은 요소 전달
/*
export default function FuncProps(props) {
  return <>{props.children}</>;
}*/
