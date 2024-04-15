// import { useState } from 'react';
import FuncEvent from './components/FuncEvent';
import ClassEvent from './components/ClassEvent';
import HandlerEx from './components/HandlerEx';
import HandlerExFunc from './components/HandlerExFunc';
import EventColor from './components/EventColor';
import EventShow from './components/EventShow';

function App() {
  return (
    <div className='App'>
      <FuncEvent />
      <ClassEvent />

      <HandlerEx />
      <HandlerExFunc />
      <EventColor />
      <EventShow />
    </div>
  );
}

export default App;
