
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import data from './data';
import { useState } from 'react';

function App() {
  let [clothes, setClothes] = useState(data)
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
        {clothes.map((item, i)=> {
          return (
            <Card key={i} img={item.img} title={item.title} price={item.price} />
          )
        })}
      </Row>
    </Container>

    </div>
  );
}

function Card(props) {
return (
  <Col sm>
  <img className='shop-img' src={process.env.PUBLIC_URL + props.img} alt="woman-img" />
  <h4 className='shop-name'>{props.title}</h4>
  <p className='shop-price'>{props.price}</p>
</Col>
)
}

export default App;
