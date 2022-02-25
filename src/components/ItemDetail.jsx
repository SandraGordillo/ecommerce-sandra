import React from 'react'
import ItemCount from './ItemCount'


function ItemDetail({ itemsDetail }) {



  return (

    <div>
      <h1>Producto: {itemsDetail.title} </h1>
      <h2>Precio:{itemsDetail.precio} </h2>
      <h6>Descripcion:{itemsDetail.descripcion} </h6>
      <img src={itemsDetail.img} />
      <ItemCount initial={1} stock={10} />
      <button className='btn btn-dark'>Añadir al carrito</button>
    </div>
  )
}

export default ItemDetail