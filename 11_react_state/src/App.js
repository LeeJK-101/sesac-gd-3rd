import ClassState from './components/ClasssState';
import FuncState from './components/FuncState';
import ClassComponent from './components/ClassComponent';
import FuncComponent from './components/FuncComponent';
import Emoji from './components/Emoji';
import CharactersContainer from './components/CharactersContainer';

function App() {
  return (
    <div className='App'>
      <ClassState />
      <FuncState />
      <ClassComponent />
      <FuncComponent />
      <Emoji />
      <br />
      <br />
      <br />

      <CharactersContainer />
    </div>
  );
}

export default App;
