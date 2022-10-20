import { Link } from "react-router-dom";
export function PizzaCard({pizza} ){
    return(
        <li className="pizza">
        <Link to={`/products/${pizza.id}` }style={{textDecoration:`none`}}>
        <article className="pizza-item">
       <img src={`${pizza.image}`} alt={pizza.name}  width="130"/>
       <h4>{pizza.title}</h4>
       <h2>{pizza.prices}$</h2>
     </article>
     </Link>
     </li>
    )
}
