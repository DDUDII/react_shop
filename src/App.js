import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Container,
  Nav,
  Row,
  Col,
  useNavigate,
  Outlet,
} from "react-bootstrap";
import data from "./assets/data";
import Detail from "./routes/Detail";
import { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Card from "./conponents/Card";

function App() {
  let [clothes, setClothes] = useState(data);
  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">Raza</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/Woman">Woman</Nav.Link>
            <Nav.Link href="/Man">Man</Nav.Link>
            <Nav.Link href="/Kids">Kids</Nav.Link>
            <Nav.Link href="/cart">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="main-bg"></div>

      <Routes>
        <Route
          path="/"
          element={
            <Container>
              <Row>
                {clothes.map((item, i) => {
                  return (
                    <Card
                      key={i}
                      img={item.img}
                      title={item.title}
                      price={item.price}
                    />
                  );
                })}
              </Row>
            </Container>
          }
        />
        <Route path="/Woman" element={<div>여자</div>} />
        <Route path="/Man" element={<div>남자</div>} />
        <Route path="/Home" element={<div>인테리어</div>} />
        <Route path="/details/:id" element={<Detail clothes={clothes} />} />
        <Route path="/cart" element={<div>장바구니</div>} />
        <Route path="*" element={<div>없는 페이지 입니다.</div>} />
      </Routes>
    </div>
  );
}

export default App;
