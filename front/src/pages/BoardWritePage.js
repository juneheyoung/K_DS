import { useState, React, useEffect } from 'react';
import '../style/LoginPage.css';
import '../style/UpdateMemberPage.css';
import '../style/BoardWritePage.css';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// input 태그 text 태그 css 참조해서 넣을 것 . 
function BoardWritePage() {


  const [boardTitle, setBoardTitle] = useState('');
  const [boardContents, setBoardContents] = useState('');
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleWrite = () => {

    const body = {
      'boardTitle': boardTitle,
      'boardContents': boardContents,
      'boardWriter': user.userId
    }
    const config = {
      headers: {
        'Content-Type': 'application/json',
        // 여기에 다른 헤더도 추가할 수 있습니다.
      }
    }
    console.log(body);
    axios.post("http://localhost:8080/board/save", body, config)
      .then((res) => {
        console.log(res.data);
        navigate('/main');
      })
      .catch((err) => {
        console.log(err)
      })

  }

  return (
    <main style={{ display: 'flex', justifyContent: 'center' }}>
      <header>
        <div className='card'>
          <div className='card-header1'>
            <h1 style={{ textAlign: 'center' }}>
              <a href='main' >게시판</a>
            </h1>
          </div>
          <div className='card-write'>
            <div className='title-w'> 제목 :
              <input type='text' placeholder='제목을 입력해라' onChange={e => { setBoardTitle(e.target.value) }}></input>
            </div>
            <div className='msg' style={{ display: 'flex' }}>
              <div>내용 :</div>
              <textarea placeholder='내용을 입력해라' onChange={e => { setBoardContents(e.target.value) }}></textarea>
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>   <button onClick={handleWrite}>작성하기</button></div>
        </div>
      </header>
    </main>

  );
};

export default BoardWritePage;
