import React from 'react';
import carrito from '../assets/img/carrito.png';
import { Link } from 'react-router-dom';


function CartWidget() {
  return <Link to={"/CartWidget"}>
    <img src={carrito} alt="carrito" />
  </Link>;
}

export default CartWidget;
