import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavScrollExample() {
  return (
    <>
  
    <Navbar bg="warning" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">d</Nav.Link>
            <Nav.Link href="#features">게시글</Nav.Link>
            <Nav.Link href="#pricing">회원정보변경</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavScrollExample;