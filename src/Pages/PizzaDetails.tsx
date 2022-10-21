import { useEffect, useReducer, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Pizza } from "../types";
type CartItem={
  id: number,
  pizzaId: number,
  userId:number,
}
export function PizzaDetails({ setError , currentUser}) {
  const [pizza, setPizza] = useState<Pizza | null>(null);
  const params = useParams();
  const [cartItem, setCartItem] = useState<CartItem | null>(null);
  const [quantity, setQuantity] = useState<Number>(1);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:4000/pizza/${params.id}`)
      .then((resp) => resp.json())
      .then((pizzaFromServer) => setPizza(pizzaFromServer));
  }, []);
  if (pizza === null) return <h2>Loading...</h2>;
  return (
    <div className="detail">
      <div className="detail-section">
        <img src={pizza.image} alt="photot of the pizza" width={500} />

        <div className="detail-container">
          <h2>{pizza.title}</h2>
          <p className="detail-description">{pizza.description}</p>
          <p className="detail-type"> Type: {pizza.type}</p>
          <h4 className="detail-price">Price: {pizza.prices}$</h4>
        </div>
      </div>
<div className="detail-varients">
      <label htmlFor="varients" className="varients">
        Choose a varients:
      </label>
      <select id="cars">
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select>

      {/* <Link to={`/orders`}> */}
      <button
        color="secondary"
        variant="contained"
        size="small"
        className="add-to-cart-button"
        onClick={() => {
          fetch(`http://localhost:4000/cartItem`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              pizzaId: pizza.id,
              quantity: quantity,
              userId: currentUser.id
            }),
          })
            .then((resp) => resp.json())
            .then((data) => {
              if (data.errors) {
                alert(data.errors);
              } else {
                setCartItem(data);
                // navigate("/orders");
              }
            });
        }}
      >
        Add to cart
      </button>
      {/* </Link> */}
    </div>
    </div>
  );
}
