import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function Detail({ clothes }) {
  let { id } = useParams();
  const itemId = parseInt(id, 10); //URL에서 얻은 매개변수는 URL 경로에서 가져온 것이므로 일반적으로 문자열
  const item = clothes.find((item) => item.id === itemId);
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
    </Container>
  );
}

export default Detail;
