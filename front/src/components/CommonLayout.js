// CommonLayout.js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearUser } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';
import '../style/CommonLayout.css';


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
                    <li >
                        <a href="/main">게시판</a>
                    </li>
                    <li>
                        <a href="/userupdate">회원정보수정</a>
                    </li>
                    <li>
                        <a href="/profile">내정보</a>
                    </li>
                    <li>
                        <a onClick={handleLogout}> 로그아웃</a>

                    </li>
                </ul>

            </nav>
            {children}
        </div>
    );
};

export default CommonLayout;
