import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Pizza } from "../types"

export function PizzaDetails() {
    const[pizza, setPizza]=useState<Pizza | null>(null)
    const params = useParams()

    useEffect(()=>{
        fetch(`http://localhost:4000/pizza/${params.id}`)
        .then(resp=>resp.json())
        .then(pizzaFromServer=>setPizza(pizzaFromServer))
    }, [])
    if (pizza === null) return <h2>Loading...</h2>
    return(
        <div detail-section>
                <div>
            <h2>{pizza.title}</h2>
            <img  src={pizza.image} alt="photot of the pizza" width={500}/>
            <p>{pizza.description}</p>
            </div>

        </div>
    )
}