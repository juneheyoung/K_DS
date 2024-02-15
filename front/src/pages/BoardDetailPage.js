import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import '../style/LoginPage.css';
import '../style/UpdateMemberPage.css';
import '../style/BoardWritePage.css';
import { useSelector } from 'react-redux';


function BoardDetailPage() {

  const [heart, setHeart] = useState(false);
  const [likeNum, setLikeNume] = useState(0);
  const user = useSelector((state) => state.user);
  const { id } = useParams();
  const [boardinfo, setBoardInfo] = useState([]);
  const [commentContent, setCommentContents] = useState([]);
  const [myCommentContent, setMyCommentContent] = useState("");
  const navigate = useNavigate();
  const handleUpdate = (id) => {
    navigate(`/update/${boardinfo.boardId}`)
  };


  const handleBack = () => {
    navigate(-1);
  };
  const handleDelete = () => {
    axios.get(`http://localhost:8080/board/delete?id=${id}`)
      .then((res) => {
        // console.log(res.data)
        navigate(-1);
      })
      .catch((err) => {
        // console.log(err)
      })
  }



  const config = {
    headers: {
      "Content-Type": "application/json",
      // 여기에 다른 헤더도 추가할 수 있습니다.
    }
  }


  // 좋아요 해제 
  const handleunHeart = () => {

    axios.get(`http://localhost:8080/like/delete?userId=${user.userId}&boardId=${boardinfo.boardId}`)
      .then((res) => {
        setHeart(false);
        setLikeNume(likeNum - 1);
        // console.log(typeof user.userId);
        console.log('db삭제' + user.userId + boardinfo.boardId);

      })
      .catch((err) => {

      })

  }

  // s누르면 좋아요 누르는거니까 
  const handleHeart = () => {

    const body = {
      "userId": user.userId,
      "boardId": boardinfo.boardId
    }
    console.log(body)
    axios.post("http://localhost:8080/like/save", body, config)
      .then((res) => {
        console.log('예상숫자' + res.data)
        setLikeNume(likeNum + 1)
        setHeart(true);
      })
      .catch((err) => {
        console.log(err)
      })

  }

  /// 댓글 작성
  const handleCreateComment = (() => {

    const body = {
      'commentWriter': user.userId,
      'commentContents': myCommentContent,
      'boardId': boardinfo.boardId
    }
    const config = {
      headers: {
        'Content-Type': 'application/json',
        // 여기에 다른 헤더도 추가할 수 있습니다.
      }
    }
    axios.post("http://localhost:8080/comment/save", body, config)
      .then((res) => {
        navigate(`/main/${boardinfo.boardId}`)
      })

      .catch((err) => {

      })
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const boardResponse = await axios.get(`http://localhost:8080/board?id=${id}`);
        setBoardInfo(boardResponse.data);
        const mylikeResponse = await axios.get(`http://localhost:8080/like/countuser?id=${user.userId}`);
        if (mylikeResponse.data.some(item => item.boardId === boardResponse.data.boardId)) {
          // 현재 글에 대한 좋아요를 이미 눌렀음
          setHeart(true);
        } else {
          // 현재 글에 대한 좋아요를 아직 누르지 않음
          setHeart(false);
        }
        const likeResponse = await axios.get(`http://localhost:8080/like/countlike?id=${boardResponse.data.boardId}`);
        setLikeNume(likeResponse.data);
        const commentResponse = await axios.get(`http://localhost:8080/comment?id=${boardResponse.data.boardId}`);
        setCommentContents(commentResponse.data);
        console.log('commentdata' + commentResponse.data)

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // fetchData 함수 호출

  }, []); // id가 변할 때마다 useEffect가 호출됨


  return (
    <main style={{ display: 'flex', justifyContent: 'center' }}>
      <header>
        <div style={{ height: 'auto' }}>
          <div className='card' style={{ height: '500px' }}>
            <div className='card-write' style={{ height: '80%' }}>
              <div className='title-w' style={{ padding: '10px' }}> 제목 :
                {boardinfo.boardTitle}
              </div>
              <div className='msg' style={{ display: 'flex', padding: '10px' }}>
                <div >내용 : {boardinfo.boardContents}</div>

              </div>

            </div>

            <div style={{ padding: '10px', display: 'flex', bottom: '0' }}>
              {heart ? (
                <>
                  <img onClick={handleunHeart} src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Beating%20Heart.png" alt="Beating Heart" width="25" height="25" />
                  <p>{likeNum}</p>
                </>
              ) : (
                <>
                  <img onClick={handleHeart} src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Broken%20Heart.png" alt="Broken Heart" width="25" height="25" />
                  <p>{likeNum}</p>
                </>
              )}
              <div style={{ flex: '1', textAlign: 'right' }}> <button onClick={handleBack}>뒤로가기</button>    {user.userId === boardinfo.boardWriter && (
                <><button onClick={handleUpdate}>수정하기</button> <button onClick={handleDelete}>삭제하기</button>
                </>)}


              </div>

            </div>
            <div className='card-write'>

              {commentContent.map((comment) => (
                <>
                  <div style={{ display: 'flex' }}  >
                    <p>내용 : {comment.commentContents}</p>
                    <p>({comment.userName})</p>

                  </div>

                </>

              ))}


              <div className='msg2' style={{ display: 'flex', alignItems: 'center' }}>
                <textarea placeholder='댓글을 입력해라' onChange={e => { setMyCommentContent(e.target.value) }}></textarea>
                <button onClick={handleCreateComment} style={{ marginLeft: '10px', width: '10%', height: '10%' }}>작성</button>
              </div>
            </div>

          </div>

        </div>
      </header>
    </main>
  );
};

export default BoardDetailPage;
