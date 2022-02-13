import React from 'react'

function ItemList({Items}) {
  return (
    <div>
           <div className="Contenedor" >
            <h3 className="" >{Items.nombre}</h3>
            <p className="">{Items.banda}</p>
            <p className="">{Items.precio}</p>
            <img className="" src={Items.imagen} alt="disco" />
            <p className="">Disponible:{Items.Stock}</p>
            <button className="">Comprar</button>
        </div>
    </div>
  )
}

export default ItemList