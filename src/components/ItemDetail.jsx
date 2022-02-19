import React from 'react'

function ItemDetail({title},{precio},{descripcion},{img}) {
  return (
    <div>
      <h1>Producto: {title} </h1>
      <h2>Precio:{precio} </h2>
      <h2>Descripcion:{descripcion} </h2>
      <img src={img} />
    </div>
  )
}

export default ItemDetail