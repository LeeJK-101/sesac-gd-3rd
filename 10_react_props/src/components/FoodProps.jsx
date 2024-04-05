export default function FoodProps({ food }) {
  return (
    <>
      제가 좋아하는 음식은 <span style={{ color: 'red' }}> {food}</span>입니다.
    </>
  );
}

FoodProps.defaultProps = {
  food: '떡볶이',
};
