import React, { useContext } from "react";
import { DataContext } from "../context/DataProvider"; 
import { Link } from "react-router-dom";
import '../index.css';

export const Navbar = () => {
  const value = useContext(DataContext);
  const [carrito] = value.carrito; 
  const [menu, setMenu] = value.menu;


  const toogleMenu = () =>{
    setMenu(!menu)
  } 

  return (
    <header> 
      <div className="logo">
        <img src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/64/4a90e2/external-ice-cream-valentines-day-flatart-icons-lineal-color-flatarticons-2.png" alt="Heladeria Italia" />
      </div>
      <ul>
        <li>
          <Link className="a" to="/home">INICIO</Link>
        </li>
        <li>
          <Link className="a" to="/productos">PRODUCTOS</Link>
        </li>
      </ul>
      <div>
        <box-icon name="cart" onClick={toogleMenu}></box-icon>
        <span className="item_total">{carrito.length} </span>
      </div>
    </header>
  );
}
