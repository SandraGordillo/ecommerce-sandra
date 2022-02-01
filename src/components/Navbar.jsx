import React from 'react';
import CartWidget from './CartWidget';
import ItemListContainer from './ItemListContainer';

function Navbar() {
  return <div className='Navbar'>
<nav className='navbar navbar-expand-lg navbar-light bg-light'>
  <div className='container-fluid'>
    <a className='navbar-brand' href="#">Music Site</a>
    <button className='navbar-toggler' type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class='navbar-toggler-icon'></span>
    </button>
    <div className='collapse navbar-collapse' id="navbarNavAltMarkup">
      <div className='navbar-nav'>
        <a className='nav-link' href="#">Inicio</a>
        <a className='nav-link' href="#">Tienda Online</a>
        <a className='nav-link' href="#">Ofertas</a>
      </div>
    </div>
  </div>
  <CartWidget/>
  <ItemListContainer/>
</nav>
</div>;
  
}

export default Navbar;
