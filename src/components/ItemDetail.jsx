import React from 'react'
import ItemCount from './ItemCount'
import { useState } from 'react';
import { Link } from 'react-router-dom';



function ItemDetail({ itemsDetail }) {

  let [carrito, setCarrito] = useState([]);

  function onAdd(contador) {
    setCarrito(true);
  }

  if (itemsDetail !== null) {
    return (
      <div>
        <h1>Producto: {itemsDetail.title} </h1>
        <h2>Precio:{itemsDetail.precio} </h2>
        <h6>Descripcion:{itemsDetail.descripcion} </h6>
        <img src={itemsDetail.img} />

        {carrito === true ? (
          <ItemCount
            stock={itemsDetail.stock}
            onAdd={onAdd} />
        ) :
          (<Link to="/cart">
            <button className='btn btn-primary'>Ir al carrito</button>
          </Link>)
        }
      </div>
    )

  } else {
    return (
      <div>
        <h1>El producto elegido no existe</h1>
      </div>
    )
  }
}
export default ItemDetail