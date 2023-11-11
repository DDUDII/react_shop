import { Col } from "react-bootstrap";
import s from "./watched.module.css";
import { getWatched, removeWatched } from "../assets/constant";
import WATCHED_KEY from "../assets/constant";

function Watched({ clothes }) {
  const watchedItems = getWatched();
  const removeItems = () => {
    removeWatched();
  };
  return (
    <Col sm>
      <div className={s.container}>
        <h4 className={s.watchedTitle}>최근 본 상품</h4>
        <button className={s.removeBtn} onClick={removeItems}>
          비우기
        </button>
        <div className={s.watchedContent}>
          {watchedItems.map((itemId) => {
            const item = clothes.find((item) => item.id === itemId);
            const { title, img } = item;
            return (
              <img
                className={s.watchedImg}
                key={itemId}
                src={process.env.PUBLIC_URL + img}
                alt={title}
              />
            );
          })}
        </div>
      </div>
    </Col>
  );
}

export default Watched;
