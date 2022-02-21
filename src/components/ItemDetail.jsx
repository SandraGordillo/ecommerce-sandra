import React from 'react'
import ItemCount from './ItemCount'

function ItemDetail({title},{precio},{descripcion},{img}) {
  return (
    
    <div>
      <h1>Producto: {title} </h1>
      <h2>Precio:{precio} </h2>
      <h2>Descripcion:{descripcion} </h2>
      <img src={img} />
      <ItemCount initial={1} stock={10}/> 
    </div>
  )
}

export default ItemDetail