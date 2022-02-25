import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from "react-router-dom"

const Item = ({ Items }) => {

  const params = useParams()
  
  return (
    <div>
      <div className="Contenedor" >
        <h3 className="" >{Items.nombre}</h3>
        <p className="">{Items.id}</p>
        <p className="">{Items.banda}</p>
        <p className="">{Items.precio}</p>
        <img className="" src={Items.imagen} alt="disco" />
        <p className="">Disponible:{Items.Stock}</p>
        <Link to={`/Items/${Items.id}` } className="">Comprar</Link>
      </div>
    </div>
  )
}

export default Item
