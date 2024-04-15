import ClassState from './components/ClasssState';
import FuncState from './components/FuncState';
import ClassComponent from './components/ClassComponent';
import FuncComponent from './components/FuncComponent';
import Emoji from './components/Emoji';
import CharactersContainer from './components/CharactersContainer';

import { useState } from 'react';
import Modal from './components/Modal';
function App() {
  const [show, setShow] = useState(false);
  return (
    <div className='App'>
      <ClassState />
      <FuncState />
      <ClassComponent />
      <FuncComponent />
      <Emoji />
      <CharactersContainer />
      <br />
      <br />
      <br />
      {<button onClick={() => setShow(true)}> 모달보이기</button>}
      {show && <Modal msg='확인하시겠습니까?' setShow={setShow} />}

      {show && (
        <Modal msg='확인하시겠습니까?22' isInput={true} setShow={setShow} />
      )}

      {show && (
        <Modal
          msg='확인하시겠습니까?333'
          isCancelBtn={true}
          setShow={setShow}
        />
      )}
    </div>
  );
}

export default App;
