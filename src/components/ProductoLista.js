import React, { useContext } from 'react';
import '../index.css';
import { DataContext } from '../context/DataProvider';
import { ProductoItem } from './ProductoItem';

const ProductoLista = () => {

    const value = useContext(DataContext);
    const [productos] = value.productos;

    console.log(productos)

    return (
        <>
            <h1 className='title'>Productos en Linea</h1>
            <div className='productos'>
                {
                    productos.map(producto => (
                        <ProductoItem
                            key={producto.id}
                            title={producto.title}
                            image={producto.image}
                            category={producto.category}
                            price={producto.price}
                            id={producto.id}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default ProductoLista;