import '../style/MainPage.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { UseSelector, useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { NavItem } from 'react-bootstrap';


function MainPage() {
    const user = useSelector((state) => state.user);
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();
    const handleWriter = () => {
        navigate('/writer');
    }
    const handleDetailClick = (boardId) => {
        navigate(`${boardId}`)
    }



    useEffect(() => {
        axios.get("http://localhost:8080/board/")
            .then((res) => {
                // console.log(res.data)
                setPosts(res.data)
                console.log('post변화감지:' + posts)
            })
    }, []);


    // const navTabs = document.querySelectorAll("#nav-tabs > a");
    // navTabs.forEach((tab) => {
    //     tab.addEventListener("click", () => {
    //         navTabs.forEach((tab) => {
    //             tab.classList.remove("active");
    //         });
    //         tab.classList.add("active");
    //     });
    // });



    return (
        <>

            <main>
                <header>
                    <h1 className="title">게시판</h1>
                    <nav className="nav-tabs" id="nav-tabs">
                        {/* <a href="#0" className="active">
                            최신순
                        </a>
                        <a href="#1">
                            추천순
                        </a> */}
                    </nav>
                </header>

                <div className="content-columns">
                    <div className="col">
                        <Row>
                            <Col sm={2}>
                                <div>No.</div>
                            </Col>
                            <Col sm={8}>
                                <div>제목</div>
                            </Col>
                            <Col sm={2}>
                                <div>작성자</div>
                            </Col>
                        </Row>
                        {posts.map((post, index) => (
                            <div key={index}>

                                <Row >
                                    <Col sm={2}>
                                        <div onClick={() => handleDetailClick(post.boardId)}>{posts.length - index}</div>
                                    </Col>
                                    <Col sm={8}>
                                        {/* <div>게시글pk{post.boardId}</div> */}
                                        <div onClick={() => handleDetailClick(post.boardId)}>{post.boardTitle}</div>
                                    </Col>
                                    <Col sm={2}>
                                        <div onClick={() => handleDetailClick(post.boardId)}>{post.boardWriter}</div>
                                    </Col>
                                    <hr />
                                </Row>

                            </div>
                        ))}
                        <div style={{ textAlign: 'right' }}>   <button onClick={handleWriter}>작성하기</button></div>
                    </div>
                </div>
            </main>
            {/* </div> */}
        </>
    )
}


export default MainPage;