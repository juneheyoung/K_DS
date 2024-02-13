// eslintjsx-a11y/alt-text
import { useEffect, useState } from "react";
import axios from 'axios';
import Toast from '../components/Toast'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../style/LoginPage.css'
import ControlledCarousel from "../components/ControlledCarousel";
import { useNavigate } from "react-router-dom";
import { Dispatch } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/userSlice";

function LoginPage() {
  const user = useSelector((state)=>state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = async (e) => {
    // Reload 막기
    e.preventDefault();
    // 빈 값 처리
    if (!id) {
      return Toast.fire("아이디를 입력해주세요", "", "warning")
    } else if (!password) {
      return Toast.fire("비밀번호를 입력해주세요", "", "warning")
    }

    try {
      const response = await axios.post('http://localhost:8080/member/login', new URLSearchParams({
        userEmail: id,
        userPass: password,
        // 추가 필드 및 값들...
      }), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
      )
        ;

      console.log(response.data);
      dispatch(loginUser(response.data))
      navigate('/main')
    } catch (error) {
      console.error('Error:', error);
      Toast.fire("아이디나 비밀번호를 확인해주세요", "", "error");
    }
  };

  useEffect(() => {
    console.log(user);
}, [])

  return (
    <>

      <div className="formContainer">
        <form onSubmit={handleLogin} >
          <Container>
            <Row>
              <Col sm={8}>
                <br></br>
                <ControlledCarousel></ControlledCarousel>
              </Col>
              <Col sm={4} className="custom-center">
                <div className="formTitle">로그인</div>
                {/* 아이디 입력  */}
                <div className="formGroup">
                  <input className='formInput' onChange={e => { setId(e.target.value) }} type="id" id="formBasicEmail" placeholder="Id : 사번 입력" />
                </div>
                {/* 비밀번호 입력 */}
                <div className="formGroup">
                  <input className='formInput' onChange={e => { setPassword(e.target.value) }} type="password" id="formBasicPassword" placeholder="비밀번호 입력" />
                </div>
                <button className="submitButton" type="submit">
                  로그인
                </button>
              </Col>
            </Row>
          </Container>
          {/* 아이디 찾기 / 비밀번호 찾기 / 회원가입 */}
          {/* <div className='formGroup' id='navigateNewPage'>
          <span onClick={()=>{navigate('/find-password')}}>비밀번호 찾기</span> | <span onClick={()=>navigate('/signup')}>회원가입</span>
        </div> */}
          {/* Login 버튼 */}
        </form>
      </div>
    </>
  );
}


export default LoginPage;