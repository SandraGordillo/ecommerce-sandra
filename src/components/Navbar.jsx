import React from 'react';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

function Navbar() {
  return <div className='Navbar'>
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid'>
        <a className='navbar-brand' href="#">Music Site</a>
        <button className='navbar-toggler' type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        </button>
        <div className='collapse navbar-collapse' id="navbarNavAltMarkup">
          <div className='navbar-nav'>
            < Link className='nav-link' to={"/"}>Inicio</Link>
            <Link className='nav-link' to={"/Tienda"}>Tienda Online</Link>
            <Link className='nav-link' to={"/Ofertas"}>Ofertas</Link>
          </div>
        </div>
      </div>
      <CartWidget />
    </nav>
  </div>;

}

export default Navbar;
