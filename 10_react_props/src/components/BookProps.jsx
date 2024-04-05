export default function BookProps({ title, author, price, type }) {
  return (
    <>
      <span>
        {' '}
        style={{ fontWeight: 'bold', fontSize: 20 }}
        {title}
      </span>
      저자 : {author} <br />
      판매가 :{price}원 <br />
      구분 : {type}
      <br />
    </>
  );
}
