import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import s from "./card.module.css";

// 자식 컴포넌트 만들기
function Card({ clothes }) {
  return (
    <Row>
      {clothes.map((item) => (
        <Col key={item.id}>
          <img
            className="shop-img"
            src={process.env.PUBLIC_URL + item.img}
            alt="woman-img"
          />
          <Link to={`/details/${item.id}`}>
            <h4 className="shop-name">{item.title}</h4>
          </Link>
          <p className="shop-price">{item.price}</p>
        </Col>
      ))}
    </Row>
  );
}

export default Card;
