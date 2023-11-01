import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import s from "./card.module.css";

// 자식 컴포넌트 만들기
function Card(props) {
  const item = props;
  return (
    <Col sm>
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
  );
}

export default Card;
