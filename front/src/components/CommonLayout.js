// CommonLayout.js

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearUser } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';



const CommonLayout = ({ children }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user)
    const handleLogout = () => {
        dispatch(clearUser());
        console.log(user)
        navigate('/')
    }





    return (
        <div className="site-wrap">
            <nav className="site-nav">
                <div className="name">{user.userName}님</div>
                <ul>
                    <li className="active">
                        <a href="/main">게시판</a>
                    </li>
                    <li>
                        <a href="/update">회원정보수정</a>
                    </li>
                    <li>
                        <a href="/profile">내정보</a>
                    </li>
                    <li>
                        <div onClick={handleLogout}> 로그아웃 </div>
                    </li>
                </ul>
            </nav>
            {children}
        </div>
    );
};

export default CommonLayout;
