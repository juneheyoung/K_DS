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
import CommonLayout from './components/CommonLayout';
import BoardWritePage from './pages/BoardWritePage';
import BoardDetailPage from './pages/BoardDetailPage';
// 로그인 X : navbar 없음 , 로그인 이면 navbar on 

function App() {

  return (
    <>
      <Navds></Navds>

      <Routes>
        {/* LoginPage에서는 네비게이션 바를 보여주지 않음 */}
        <Route path='/' element={<LoginPage />} />

        {/* 다른 페이지에서는 네비게이션 바를 보여줌 */}
        <Route
          path='/main'
          element={
            <>
              <CommonLayout>
                <MainPage />
              </CommonLayout>

            </>
          }
        />
        <Route
          path='/main/:id'
          element={
            <>
              <CommonLayout>
                <BoardDetailPage />
              </CommonLayout>
            </>
          }
        />

        <Route
          path='/update'
          element={
            <>
              <CommonLayout>
                <UpdateMemberPage />
              </CommonLayout>

            </>
          }
        />

        <Route
          path='/profile'
          element={
            <>


              <CommonLayout>
                <ProfilePage />
              </CommonLayout>
            </>
          }
        />
        <Route
          path='/writer'
          element={
            <>
              <CommonLayout>
                <BoardWritePage />
              </CommonLayout>

            </>
          }
        />

        <Route
          path="*"
          element={
            <>
              <div className="site-wrap">
                <nav className="site-nav">
                  <div className="name">K - DS</div>
                  <ul>
                    <li className="active">
                      <a href="main">게시판</a>
                    </li>
                    <li>
                      <a href="update">회원정보수정</a>
                    </li>
                    <li>
                      <a href="profile">내정보</a>
                    </li>
                  </ul>
                </nav>
                <TrapPage />
              </div>
            </>
          }
        />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;