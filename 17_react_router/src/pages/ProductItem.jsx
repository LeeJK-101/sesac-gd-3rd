import { Link } from 'react-router-dom';

export default function ProductItem({ prod }) {
  return (
    <div>
      <Link to={'/product/' + prod.id}>상세페이지</Link>
      <div>상품명 : {prod.name}</div>
      <div>상세 설명 : {prod.body}</div>{' '}
    </div>
  );
}
