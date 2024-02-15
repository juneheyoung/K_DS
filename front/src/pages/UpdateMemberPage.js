import axios from 'axios';
import Toast from '../components/Toast'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useCallback, useState, useEffect } from "react";
import '../style/LoginPage.css';
import '../style/UpdateMemberPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';



function UpdateMemberPage() {
    const user = useSelector((state) => state.user)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [usermail, setUserMail] = useState('');
    const [nickname, setNickname] = useState('');
    const [userpass, setUserPass] = useState('');



    const onSubmit = (e) => {
        e.preventDefault();

        const body = {
            'userId': user.userId,
            'userEmail': usermail,
            'userName': nickname,
            'userPass': userpass
        };
        axios.post('http://localhost:8080/member/update', body, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                console.log(res.data)
                Toast.fire("다시 로그인해주세요");
                navigate('/')

            })
            .catch((err) => {
                console.log(err)
                Toast.fire("아이디나 닉네임 중복입니다", "", "error");
            })

    }

    return (
        <>
            <main>
                <header>

                    <div style={{ textAlign: 'center' }}><h1 className="title" >회원정보수정</h1></div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '90vh' }}>
                        <form className="member-info-form" style={{ width: '50%' }} onSubmit={onSubmit}>
                            {/* 내 아이디(이메일) */}
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Ghost.png" alt="Ghost" />
                            </div>
                            <div className="formGroup">
                                <label htmlFor="formNickname" className="member-info-label"> 아이디 </label>
                                <div className="formGroupComponent">
                                    <input className='formInput' onChange={e => { setUserMail(e.target.value) }} type="id" id="myEmail" placeholder={usermail} />
                                    {/* <button className='duplicationCheckButton' onClick={handleNicknameDuplicateCheck}>중복 확인</button> */}
                                </div>
                            </div>
                            {/* 닉네임 수정 */}
                            <div className="formGroup">
                                <label htmlFor="formNickname" className="member-info-label"> 닉네임 </label>
                                <div className="formGroupComponent">
                                    <input className='formInput' onChange={e => { setNickname(e.target.value) }} type="text" id='formNickname' placeholder={nickname} />
                                    {/* <button className='duplicationCheckButton' onClick={handleNicknameDuplicateCheck2}>중복 확인</button> */}
                                </div>
                                {/* {!validNickname && nickname.length >= 1 && (
                                    <div className="errorMsg">닉네임은 30자 이내로 작성해주세요.</div>
                                )} */}
                            </div>
                            {/* 비밀번호 수정*/}
                            <div className="formGroup">
                                <label htmlFor="formNickname" className="member-info-label"> 비밀번호 </label>

                                <input className='formInput' onChange={e => { setUserPass(e.target.value) }} type="password" id='formNickname' placeholder={userpass} />

                                {/* 
                                {!validNickname && nickname.length >= 1 && (
                                    <div className="errorMsg">닉네임은 30자 이내로 작성해주세요.</div>
                                )} */}
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <button className="submitButton" type="submit">
                                    수정하기
                                </button>
                            </div>
                        </form>
                    </div>
                </header>
            </main>
        </>
    )
}
export default UpdateMemberPage;
