import { Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { changeName } from "../store/userSlice";
import { addCount, minusCount } from "../store/cartSlice";

function Cart({ clothes }) {
  const cartState = useSelector((state) => state.cart);
  const userState = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>상품코드</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {cartState.map((value, i) => {
            const { name, count, id } = cartState[i];

            return (
              <tr key={i}>
                <td>{id + 1}</td>
                <td>{name}</td>
                <td>{count}</td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(addCount(id));
                    }}
                  >
                    +
                  </button>
                  <button
                    onClick={() => {
                      dispatch(minusCount(id));
                    }}
                  >
                    -
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
