import { useState, React, useEffect } from 'react';
import '../style/LoginPage.css';
import '../style/UpdateMemberPage.css';
import '../style/BoardWritePage.css';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

function BoardUpdatePage() {

    const { id } = useParams();
    const [boardinfo, setBoardInfo] = useState([]);
    const [boardTitle, setBoardTitle] = useState('');
    const [boardContents, setBoardContents] = useState('');
    const user = useSelector((state) => state.user);
    const navigate = useNavigate();
    console.log('1:' + boardTitle + boardContents);
    const handleWrite = () => {

        const body = {
            'boardTitle': boardTitle,
            'boardContents': boardContents,
            'boardId': id
        }
        const config = {
            headers: {
                'Content-Type': 'application/json',
                // 여기에 다른 헤더도 추가할 수 있습니다.
            }
        }
        console.log(body);
        axios.post("http://localhost:8080/board/update", body, config)
            .then((res) => {

                navigate(-1);
            })
            .catch((err) => {
                console.log(err)
            })

    }

    useEffect(() => {
        axios.get(`http://localhost:8080/board?id=${id}`)
            .then((res) => {
                console.log(res.data)
                setBoardTitle(res.data.boardTitle);
                setBoardContents(res.data.boardContents);
                // setBoardInfo(res.data)

            })
    }, []);


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
                            <input type='text' placeholder='제목을 입력해라' value={boardTitle} onChange={e => { setBoardTitle(e.target.value) }}></input>
                        </div>
                        <div className='msg' style={{ display: 'flex' }}>
                            <div>내용 :</div>
                            <textarea placeholder='내용을 입력해라' value={boardContents} onChange={e => { setBoardContents(e.target.value) }}></textarea>
                        </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>   <button onClick={handleWrite}>작성하기</button></div>
                </div>
            </header>

        </main>

    );
};

export default BoardUpdatePage;

