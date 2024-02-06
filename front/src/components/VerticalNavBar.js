import Nav from 'react-bootstrap/Nav';
import '../style/VerticalNavBar.css'

function VerticalNavBar() {
  return (
    <Nav defaultActiveKey="/" className="flex-column abc">
      <Nav.Link href="/main">게시판</Nav.Link>
      <Nav.Link eventKey="link-1">회원정보수정</Nav.Link>
      <Nav.Link eventKey="link-2">내정보</Nav.Link>
    </Nav>
  );
}

export default VerticalNavBar;