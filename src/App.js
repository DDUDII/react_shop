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
import axios from "axios";
import Cart from "./routes/Cart";
import Watched from "./conponents/Watched";
import { useQuery } from "@tanstack/react-query";

function App() {
  const [clothes, setClothes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Raza
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/Woman">
              Woman
            </Nav.Link>
            <Nav.Link as={Link} to="/Shoes">
              Shoes
            </Nav.Link>
            <Nav.Link as={Link} to="/Cart">
              Cart
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto">kim, 반가워요</Nav>
        </Container>
      </Navbar>
      <div className="main-bg"></div>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Container>
                <Row>
                  {clothes.map((item, i) => {
                    return (
                      <Card
                        key={i}
                        img={item.img}
                        title={item.title}
                        price={item.price}
                        id={item.id}
                      />
                    );
                  })}
                  <Watched clothes={clothes} />
                </Row>
              </Container>
              <button
                onClick={() => {
                  axios
                    .get("https://codingapple1.github.io/shop/data3.json")
                    .then((shoes) => {
                      let item = [...clothes, ...shoes.data];
                      setClothes(item);
                    })
                    .catch(() => {
                      console.log("로딩중입니다.");
                    });
                }}
              >
                더보기
              </button>
            </>
          }
        />
        <Route path="/Woman" element={<div>여자</div>} />
        <Route path="/Shoes" element={<div>Shoes</div>} />
        <Route path="/details/:id" element={<Detail clothes={clothes} />} />
        <Route path="/Cart" element={<Cart clothes={clothes} />} />
        <Route path="*" element={<div>없는 페이지 입니다.</div>} />
      </Routes>
    </div>
  );
}

export default App;
