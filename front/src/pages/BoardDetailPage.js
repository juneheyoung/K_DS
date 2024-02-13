import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import '../style/LoginPage.css';
import '../style/UpdateMemberPage.css';
import '../style/BoardWritePage.css';

function BoardDetailPage() {

  const { id } = useParams();
  console.log(id);
  const [boardinfo, setBoardInfo] = useState([]);
  const navigate = useNavigate();
  const handleUpdate = () => {
    navigate('/update')
  };

  const handleBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    axios.get(`http://localhost:8080/board?id=${id}`)
      .then((res) => {
        // console.log(res.data)

        console.log('detail 변화감지:' + res.data);
        setBoardInfo(res.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [id]);

  return (
    <main style={{ display: 'flex', justifyContent: 'center' }}>
      <header>
        <div className='card'>
          <div className='card-write'>
            <div className='title-w'> 제목 :
              {boardinfo.boardTitle}
            </div>
            <div className='msg' style={{ display: 'flex' }}>
              <div>내용 : {boardinfo.boardContents}</div>

            </div>
          </div>
          <div style={{ textAlign: 'right' }}> <button onClick={handleBack}>뒤로가기</button>  <button onClick={handleUpdate}>수정하기</button></div>
        </div>

      </header>
    </main>
  );
};

export default BoardDetailPage;
