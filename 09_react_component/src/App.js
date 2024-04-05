import './App.css';
import ClassComponent from './components/ClassComponent';
import FunctionComponent from './components/FunctionComponent';
import PracComponent from './components/PracComponent';

function App() {
  return (
    <div className='App'>
      {/* 불러와 사용하는 방법 1 */}
      <ClassComponent />

      {/* 불러와 사용하는 방법 2 */}
      <ClassComponent></ClassComponent>

      {/* 함수형 컴포넌트 */}
      <FunctionComponent />
      <PracComponent />
    </div>
  );
}

export default App;
