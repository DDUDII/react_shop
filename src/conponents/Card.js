import { Col } from "react-bootstrap";

// 자식 컴포넌트 만들기
function Card(props) {
  return (
    <Col sm>
      <img
        className="shop-img"
        src={process.env.PUBLIC_URL + props.img}
        alt="woman-img"
      />
      <h4 className="shop-name">{props.title}</h4>
      <p className="shop-price">{props.price}</p>
    </Col>
  );
}

export default Card;
