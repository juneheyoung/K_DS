// eslintjsx-a11y/alt-text
import { useState } from "react";
import axios from 'axios';
import Toast from '../components/Toast'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../style/LoginPage.css'
import ControlledCarousel from "../components/ControlledCarousel";


function LoginPage() {
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
    // axios 요청 보내기
    let body = {
      username: id,
      password: password
    };
  }

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