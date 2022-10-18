import { useEffect, useState } from "react";
import { PizzaCard } from "../components/PizzaCard";

export function Menu() {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
      fetch("http://localhost:4000/pizza")
        .then((resp) => resp.json())
        //@ts-ignore
        .then((menuFromServer) => setMenu(menuFromServer));
    }, []);
    console.log(menu)
    return(
<section>
        <ul className="products-ul">
          {menu.map(pizza => (
            <PizzaCard key={pizza.id} pizza={pizza} />
          ))}
        </ul>
      </section>
    )}