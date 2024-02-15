import { useEffect, useState } from "react";
import '../style/LoginPage.css';
import '../style/UpdateMemberPage.css';
import '../style/MainPage.css';
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ProfilePage() {
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);
    const [myposts, setMyPosts] = useState([]);
    const [mylikes, setMyLikes] = useState([]);


    const handleDetail = (e) => {
        console.log(e)
        navigate(`/main/${e}`);
    }

    useEffect(() => {
        axios.get(`http://localhost:8080/board/search?id=${user.userId}`)
            .then((res) => {
                console.log(res.data);
                setMyPosts(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
        axios.get(`http://localhost:8080/like/countuser?id=${user.userId}`)
            .then((res) => {
                console.log(res.data)
                setMyLikes(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    // const [userName, setUserName] = useState({ username: '호진장', writeId: [1, 2, 3], likeId: [1, 3, 4] });



    return (
        <>
            <main>
                <header>

                    <div style={{ textAlign: 'center', marginBottom: '30px' }}><h1 className="title" >회원정보수정</h1></div>

                    {/* <h1>{user.userName}님의 프로필</h1> */}
                </header>
                <div className="content-columns" style={{ height: '700px' }}>
                    <div className="col">
                        <Row>
                            <Col sm={6}>
                                <div style={{ textAlign: 'center' }}><h2>작성한 글</h2></div>

                                {myposts.map((post) => (
                                    <>
                                        <div style={{ padding: '10px' }} onClick={() => handleDetail(post.boardId)}>제목 : {post.boardTitle}</div>
                                        <hr></hr>
                                    </>
                                ))}
                            </Col>
                            <Col sm={6}>
                                <div style={{ textAlign: 'center' }}><h2>추천한 글</h2></div>
                                {mylikes.map((like) => (
                                    <>
                                        <div style={{ padding: '10px' }} onClick={() => handleDetail(like.boardId)}>제목 : {like.boardTitle}</div>
                                        <hr></hr>
                                    </>
                                ))}

                            </Col>
                        </Row>
                    </div>




                </div>

            </main>
        </>
    )
}

export default ProfilePage;