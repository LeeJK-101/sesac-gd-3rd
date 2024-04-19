import { Routes, Route, Link } from 'react-router-dom';

import Test from './components/Test';
import Board from './pages/Board';
import Profile from './pages/Profile';
import BoardDetail from './pages/BoardDetail';
import NotFound from './pages/NotFound';
import Home from './pages/Home';

import Header from './components/Header';
import ProductPage from './pages/ProductPage';
import ProductDetailPage from './pages/ProductDetailPage';
import PhotoPage from './pages/PhotoPage';

function App() {
  return (
    <div className='App'>
      {/* 라우팅 연습 1
      <h1>routing!</h1>
      <Routes>
        <Route path='/test' element={<Test />} />
      </Routes> */}

      {/* 라우팅 연습 2
      <Routes>
        //  루트 경로 부터, 짧은 거 순서대로 
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/board' element={<Board />} />
        <Route path='/board/1' element={<BoardDetail />} />
        <Route path='*' element={<NotFound />} />
      </Routes> */}

      {/* 라우팅 하기 */}
      {/* home */}
      {/* ProductPage 컴포넌트 경로: /products */}
      {/* ProductDetailPage 컴포넌트 경로: /products/1 */}
      {/* ProductPage 컴포넌트 경로: /photos */}
      {/* 이외 모든 페이지 NotFound 컴포넌트 */}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<ProductPage />} />

        {/* <Route path='/products/1' element={<ProductDetailPage />} /> */}
        {/* 파라미터로 작성 */}
        <Route path='/products/:productId' element={<ProductDetailPage />} />

        <Route path='/photos' element={<PhotoPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
