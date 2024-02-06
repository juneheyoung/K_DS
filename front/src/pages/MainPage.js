import '../style/MainPage.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MainPage() {
    const navTabs = document.querySelectorAll("#nav-tabs > a");
    navTabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            navTabs.forEach((tab) => {
                tab.classList.remove("active");
            });
            tab.classList.add("active");
        });
    });

    const posts = [
        { id: 1, title: '게시글 1', content: '내용 1', author: '작성자 1' },
        { id: 2, title: '게시글 2', content: '내용 2', author: '작성자 2' },
        { id: 3, title: '게시글 3', content: '내용 3', author: '작성자 3' },
        { id: 4, title: '게시글 4', content: '내용 4', author: '작성자 2' },
        { id: 5, title: '게시글 5', content: '내용 5', author: '작성자 1' },
        // ... 추가 게시글
    ];

    return (
        <>
            {/* <img src="kt ds.png"></img> */}
            <div class="site-wrap">
                <nav class="site-nav">
                    <div class="name">
                        K - DS
                    </div>
                    <ul>
                        <li class="active"><a href="main">게시판</a>
                        </li>
                        <li><a href="update">회원정보수정</a></li>
                        <li><a href="profile">내정보</a></li>
                    </ul>
                </nav>
                <main>
                    <header>
                        <h1 class="title">게시판</h1>
                        <nav class="nav-tabs" id="nav-tabs">
                            <a href="#0" class="active">
                                최신순
                            </a>
                            <a href="#1">
                                추천순
                            </a>
                        </nav>
                    </header>

                    <div class="content-columns">
                        <div class="col">
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
                            {posts.map((post) => (
                                <div key={post.id}>
                                    <Row>
                                        <Col sm={2}>
                                            <div>{post.id}</div>
                                        </Col>
                                        <Col sm={8}>
                                            <div>{post.title}</div>
                                        </Col>
                                        <Col sm={2}>
                                            <div>{post.author}</div>
                                        </Col>
                                        <hr />
                                    </Row>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}


export default MainPage;