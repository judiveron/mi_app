import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../context/DataProvider";

export const ProductoItem = ({title, image, category, price, id}) => {

  const value = useContext(DataContext);
  const addCarrito = value.addCarrito;



  return (
    
    <div key={id} className="producto">
      <Link to={`/producto/${id}`}>
      <div className="producto_img">
        <img src={image} alt={title} />
      </div>
      </Link>
      <div className="producto_footer">
        <h2 className="titulo">{title}</h2>
        <p>{category}</p>
        <p className="price">${price} </p>
      </div>
      <div className="buttom">
        <button onClick={() => addCarrito(id)} className="btn">Añadir al carrito</button>
      </div>
    </div>
  );
}
