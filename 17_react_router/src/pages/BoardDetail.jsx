import { useNavigate } from 'react-router-dom';
export default function BoardDetail() {
  const navicate = useNavigate();
  return (
    <>
      {/* 방문사이트 기준으로 '-1'은 뒤로 가기임. */}
      <button onClick={() => navicate(-1)}>뒤로가기</button>
      <button onClick={() => navicate('/board')}>게시판으로 </button>
      <button onClick={() => navicate('/')}>홈으로가기</button>
      <h1>여기는 BoardDetail Page 컴포넌트</h1>
    </>
  );
}
