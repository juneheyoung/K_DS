import LoginPage from './pages/LoginPage';
import React from 'react';
import { Routes, Route } from 'react-router-dom'
// import NavScrollExample from './components/NavScrollExample'
import Footer from './components/Footer';
import TrapPage from './pages/TrapPage';
import MainPage from './pages/MainPage';
import UpdateMemberPage from './pages/UpdateMemberPage';
import Navds from './components/Navds';
import ProfilePage from './pages/ProfilePage';
// 로그인 X : navbar 없음 , 로그인 이면 navbar on 

function App() {
  return (
    <>
      <Navds></Navds>

      {/* grid 나누어서 비율 주어서 왼쪽 배너 창 처럼 쓰자  */}
      <div>
        <Routes>
          {/* 회원  */}
          <Route path='/' element={<LoginPage />}></Route>
          <Route path='/main' element={<MainPage></MainPage>} />
          <Route path='/update' element={<UpdateMemberPage></UpdateMemberPage>} />
          <Route path='/profile' element={<ProfilePage></ProfilePage>} />
          <Route path="*" element={<TrapPage></TrapPage>} />

        </Routes>
        <Footer></Footer>
      </div>
    </>
  );
}


export default App;
