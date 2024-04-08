import book from '../assets/e895277184_1.jpg';

export default function BookProps({ title, author, price, type }) {
  return (
    <div className='book-item'>
      <div style={{ color: 'orange', fontSize: 20, fontWeight: 900 }}>
        이번주 베스트 셀러
      </div>
      <div>
        {' '}
        style={{ fontWeight: 'bold', fontSize: 20 }}
        {title}
      </div>
      <img src={book} style={{ width: '300px' }} alt='바람의 열두방향'></img>
      저자 : {author} <br />
      판매가 :{price}원 <br />
      구분 : {type}
      <br />
    </div>
  );
}
