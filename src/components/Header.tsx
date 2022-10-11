import React from "react";
import { Link } from "react-router-dom";

export function Header() {
  const types = [
    {
      type:"home",
      name: "Home",
      icon: "home",
    },
    {
      type:"aboutus",
        name: "About",
        icon: "diversity_1",
      },
    {
      type:"menu",
      name: "Menu",
      icon: "restaurant_menu",
    },
    {
      type:"orders",
      name: "Orders",
      icon: "grade",
    },
    {
      type:"sign-in",
      name: "Sign_In",
      icon: "account_circle",
    },
  ];
  return (
    <header className="header">
      <ul className="header_section">
        <h2>GetYorPiZZa</h2>
        {types.map((type) => (
  
          <li className="header_list">
            <Link to={`${type.type}`} style={{textDecoration:`none`}}>
    
            <span className="material-symbols-outlined">{type.icon}</span>
            <p>{type.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}