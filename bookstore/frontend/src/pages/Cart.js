import React from "react";
import { useEffect, useState } from "react";
import { CartState } from "../context/Context";
import "../styles/cart.css";

function Cart() {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  const images = require.context("../assets/book-images", true);
  const bookImageFileName = function (book) {
    let name = book.title.toLowerCase();
    name = name.replace(/ /g, "-");
    name = name.replace(/'/g, "");
    name = name.replace(/:/g, "");
    console.log("name", name);
    return images(`./${name}.jpg`);
  };

  return (
    <div className="cart-container">
      <div className="cart-column-right">
        <div className="row">
          <table id="cart-table">
            {cart.map((prod, index) => (
              <tr key={index}>
                <td>
                  <img
                    src={bookImageFileName(prod)}
                    alt={prod.title}
                    className="cart-bookImage"
                  />
                </td>
                <td style={{ maxWidth: "40%", textAlign: "left" }}>
                  {prod.title}
                </td>
                <td style={{ width: "10%" }}>{prod.qty}</td>
                <td>
                  <input
                    type="number"
                    value={prod.qty}
                    style={{ width: "50px" }}
                    onChange={(e) =>
                      dispatch({
                        type: "CHANGE_CART_QTY",
                        payload: {
                          bookId: prod.bookId,
                          qty: e.target.value,
                        },
                      })
                    }
                  />
                </td>
                <td style={{ width: "15%" }}>
                  ${(prod.price * prod.qty).toFixed(2)}
                </td>
                <td>
                  <button className="cart-delete"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: prod,
                      })
                    }
                  >
                    <i class="fa fa-trash" aria-hidden="true"></i>
                  </button>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>

      <div className="cart-column-left">
        <div className="cart-summery">
          <p>
            <span className="title">Subtotal ({cart.length}) items</span>
          </p>
          <p>
            <span className="">Total: ${total} items</span>
          </p>
          <button
            style={{ fontWeight: 700, fontSize: 20 }}
            disabled={cart.length === 0}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
