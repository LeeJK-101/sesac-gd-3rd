import ClassLifeCycle from './components/ClassLifeCycle';
import FuncLifeCycle from './components/FuncLifeCycle';
import PracContainer from './components/PracContainer';
import PracFakePost from './components/PracFakePost';
function App() {
  return (
    <div className='App'>
      <ClassLifeCycle />
      <hr />
      <FuncLifeCycle />
      <hr />
      {/* props children으로 접근할거라서 셀프클로징 하지 않고 여닫는 태그 각각 만듬 */}
      <PracContainer>
        <PracFakePost />
      </PracContainer>
    </div>
  );
}

export default App;
