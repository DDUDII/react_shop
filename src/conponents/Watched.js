import { Col } from "react-bootstrap";
import s from "./watched.module.css";

function Watched() {
  return (
    <Col sm>
      <h4 className={s.watchedTitle}>최근 본 상품</h4>
      <div className={s.watchedContent}>내용</div>
    </Col>
  );
}

export default Watched;
