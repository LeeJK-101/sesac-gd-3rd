import { Link } from 'react-router-dom';

export default function ProductItem({ prod }) {
  return (
    <div>
      {/*  localhost:3000/product/1 경로로 이동 */}
      {/* <Link to={'/product/' + prod.id}>상세 페이지로 이동</Link> */}
      {/* <Link to={`/product/${prod.id}`}>상세 페이지로 이동</Link> */}
      {/* 문자열 빼고 다 중괄호{}에 넣어서 전달 */}
      <Link to={`/products/${prod.id}`}>상세 페이지로 이동</Link>
      <div>상품명 : {prod.name}</div>
      <div>상세 설명 : {prod.body}</div>{' '}
    </div>
  );
}
