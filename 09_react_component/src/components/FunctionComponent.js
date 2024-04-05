// function FunctionComponent() {
//   return <h1>함수형 컴포넌트</h1>;
// }

// export default FunctionComponent;

// rfc + enter or tab : 파일명과 동일한 이름의 함수 컴포넌트 만들어줌

// export default function FunctionComponent() {
//   return <div>FunctionComponent</div>;
// }

//--------------------------------------------

import cat from '../assets/cat.jpeg';

export default function FunctionComponent() {
  const text = '안녕하세요!';
  const name = 'layla';
  const show = true;
  const textStyle = {
    backgroundColor: 'navy',
    color: 'pink',
    fontWeight: 900,
    fontSize: '40px',
  };

  const checkUser = () => {
    if (name === 'layla') {
      return '안녕하세요!';
    } else if (name === 'lily') {
      return '오랜만이시네요!';
    } else {
      return '나가주세요....';
    }
  };

  const handleClick = () => {
    alert('클릭했다!!!!');
  };

  return (
    <>
      {/* 
      1. 하나의 최상위 부모 요소를 감싸서 return
      - virtual DOM에서 컴포넌트의 변화를 감지할 때 
        효율적으로 비교할 수 있도록 컴포넌트 내부에는 
        하나의 DOM 트리 구조로 이루어져야 한다고 React가 정함
      - div, section, article, header, footer 등 
        최상위 부모 요소는 어떤 요소이든 상관 없음
      - 불필요한 태그를 만들지 않기 위해 <></> 과 같은 태그로 감싸는 경우도 많음
        (Fragement 단축 문법) -> react에서 제공해주는 것
    */}
      <div>함수형 컴포넌트1 </div>
      <div>함수형 컴포넌트2 </div>
      {/* 2-1. js 문법 사용 가능(변수) */}
      <div>인사는 {text}</div>
      {/* 2-2. js 문법 사용 가능 (삼항 연산자를 사용한 조건부 렌더링 ver.간단*/}
      <h3>{name === 'layla' ? `어서오세요 ${name}님` : '누구...세요...?'} </h3>
      {/* 2-3. js 문법 사용 가능 (위에 ) */}
      <h3>{checkUser()}</h3>
      {/* 2-4. js 문법 사용 가능 ( 조건부 렌더링 && 사용 ) */}
      <h3>{name === 'yuki' && '엄청 오랜만이시네요!!'}</h3>
      <h3>{show && '모달창 넣어주기'}</h3>
      {/* 3. inline style 적용 방법 -> style 속성값으로 "객체" 전달 */}
      {/* 
      HTML 버전
      <div style="background-color: pink; color: navy"></div> */}
      <div
        style={{
          backgroundColor: 'pink',
          color: 'navy',
          fontWeight: 900,
          fontSize: '40px',
        }}
      >
        wow!
      </div>
      <div style={textStyle}>Kamayuke</div>
      {/* 4. class와 onlick jsx에서 사용하기 */}
      {/* <div class='text-css' onclick="함수()">원래 html에서 사용하던 방식</div> */}
      <div className='text-css'>jsx에서 css 사용하기 (className)</div>
      {/* html에서 함수를 "호출"했지만, jsx에서는 함수를 "선언"함 */}
      <button
        onClick={() => {
          // 함수();
          alert('클릭!!');
        }}
      >
        버튼
      </button>
      <button onClick={handleClick}>버튼2(위에서 만든 함수 사용)</button>
      {/* 5. 닫는 태그 필수!!!!! */}
      <br /> 셀프 클로징
      <br></br>
      <input></input>
      <input /> 셀프 클로징
      {/* 절대 경로는 public 폴더 내부 */}
      <img src='/logo192.png' alt='리액트 이미지'></img>
      {/* src 내부의 이미지를 사용할 경우 해당 이미지 import해 사용 */}
      <img src={cat} style={{ width: '300px' }} alt='창 밖 구경하는 장화'></img>
    </>
  );
}
