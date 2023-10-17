
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Navbar, Container, Nav, Row, Col, Form } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
  <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Raza</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#All">All</Nav.Link>
            <Nav.Link href="#Woman">Woman</Nav.Link>
            <Nav.Link href="#Man">Man</Nav.Link>
            <Nav.Link href="#Kids">Kids</Nav.Link>
            <Nav.Link href="#Raza-Home">Raza Home</Nav.Link>
            <Nav.Link href="#cart">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
<div className='main-bg'></div>
<Container>
      <Row>
        <Col sm>
          <img className='shop-img' src={process.env.PUBLIC_URL + '/img/flowergirl.jpg'} alt="woman-img" />
          <h4 className='shop-name'>검정 자켓</h4>
          <p className='shop-price'>$100</p>
        </Col>
        <Col sm>          
        <img className='shop-img' src={process.env.PUBLIC_URL + '/img/funky.jpg'} alt="woman-img" />
          <h4 className='shop-name'>가죽 팬츠</h4>
          <p className='shop-price'>$70</p>
          </Col>
        <Col sm>          
        <img className='shop-img' src={process.env.PUBLIC_URL + '/img/nikegirl.jpg'} alt="woman-img" />
          <h4 className='shop-name'>조커 팬츠</h4>
          <p className='shop-price'>$50</p>
          </Col>
          <Col sm>          
        <img className='shop-img' src={process.env.PUBLIC_URL + '/img/white-t.jpg'} alt="woman-img" />
          <h4 className='shop-name'>베이직 티셔츠</h4>
          <p className='shop-price'>$15</p>
          </Col>
      </Row>
    </Container>

    </div>
  );
}

export default App;
