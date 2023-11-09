import { Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { changeName } from "../store/userSlice";

function Cart() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <h6>{state.user.name}</h6>
      <button
        onClick={() => {
          dispatch(changeName());
        }}
      >
        변경
      </button>
      <Table>
        <thead>
          <tr>
            <th>순번</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map((value, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{state.cart[i].name}</td>
              <td>{state.cart[i].count}</td>
              <td>
                <button>변경</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
