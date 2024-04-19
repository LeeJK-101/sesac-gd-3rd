import BasicCss from './components/BasicCss';
import ModuleCss from './components/ModuleCss';
import StyledComponent from './components/StyledComponent';
import Sass from './components/Sass';
function App() {
  return (
    <div className='App'>
      <h1>일반 CSS 사용</h1>
      <h3>React에서 스타일 적용하는 방법</h3>
      <ol>
        <li>인라인 스타일 적용 방법</li>
        <li>일반 css 파일만들어서 import</li>
        <li></li>
      </ol>
      <BasicCss />
      <ModuleCss />
      <StyledComponent />
      <Sass />
    </div>
  );
}

export default App;
