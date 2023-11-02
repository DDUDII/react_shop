import { useState } from "react";
import { Col, Container, Row, Nav } from "react-bootstrap";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function Detail({ clothes }) {
  let { id } = useParams();
  const itemId = parseInt(id, 10); //URL에서 얻은 매개변수는 URL 경로에서 가져온 것이므로 일반적으로 문자열
  const item = clothes.find((item) => item.id === itemId);
  const [tap, setTap] = useState(0);

  const tapHandler = (eventKey) => {
    setTap(Number(eventKey));
  };

  return (
    <Container>
      <Row>
        <Col md>
          <img
            className="shop-img"
            src={process.env.PUBLIC_URL + item.img}
            alt={item.title}
          />

          <h4 className="shop-name">{item.title}</h4>

          <p className="shop-content">{item.content}</p>
          <p className="shop-price">{item.price}</p>

          <button className="btn btn-danger">주문하기</button>
        </Col>
      </Row>
      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link eventKey="0" onClick={() => tapHandler(0)}>
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="1" onClick={() => tapHandler(1)}>
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="2" onClick={() => tapHandler(2)}>
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tap={tap} />
    </Container>
  );
}

function TabContent({ tap }) {
  if (tap === 0) {
    return <div>내용0</div>;
  }
  if (tap === 1) {
    return <div>내용1</div>;
  }
  if (tap === 2) {
    return <div>내용2</div>;
  }
}

export default Detail;
