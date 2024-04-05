const helloStr = 'Hello, this is first practice';
const handleClick = () => {
  alert('클릭!');
};
export default function PracComponent() {
  return (
    <div
      onClick={handleClick}
      style={{
        marginTop: '32px',
        backgroundColor: 'pink',
      }}
    >
      {helloStr}
    </div>
  );
}
