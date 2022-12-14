import { useEffect, useState } from "react";

export function Order() {
    const [cartItems, setCartItems] = useState([]);
    // const [cartItem, setCartItem] = useState(null);
    const [quantity, setQuantity] = useState<Number>(1);
    useEffect(() => {
      fetch("http://localhost:4000/cartItem", {
        headers: {
          Authorization: localStorage.token,
        },
      })
        .then((rsp) => rsp.json())
        .then((data) => setCartItems(data));
    }, []);
    let total = 0
    for (let item of cartItems) {
      total += item.quantity * item.pizza.prices
    }
  return (
    <div className="cart-container">
      <div className="cart-row"></div>
      <div className="cart-row">
        <h1 className="cart-title">Your Cart</h1>
      </div>
      <div className="cart-row">
        <div className="cart-col">
          {cartItems.map((item) => (
            <div className="cart-card">
              <div className="cart-header">
                <h2 className="cart-subTitle">{item.pizza.title}</h2>
                <span className="cart-varient">{item.pizza.type}</span>
              </div>
              <div className="cart-body">
                <img src={item.pizza.image} alt="pizzzaaa here"  />
              </div>
              <div className="cart-footer">
                <div className="cart-footer-top">
                  <p className="cart-price">
                    Price:  {item.quantity} * {(item.pizza.prices).toFixed(2)}
                  </p>
                </div>
                <div className="cart-footer-bottom">
                  <div className="cart-footer-bottom-left">
                    <p onClick={() => {}} />
                  </div>
                  <div className="cart-footer-bottom-right">
                    {/* <p>
                      Quantity:
                      <span onClick={() => {}} >+</span>
                      <span className="quantity">{item.quantity}</span>
                      <span onClick={(quantity) => {quantity-1}} >- </span>
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-col">
          <div className="cartTotal">
            <h2 className="totalprice">Total Price: ??{total.toFixed(2)}</h2>
        
          </div>
        </div>
      </div>
    </div>
  );
}
