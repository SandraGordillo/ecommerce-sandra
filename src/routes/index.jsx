import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from '../components/ItemListContainer'
import CartWidget from '../components/CartWidget'

const Rutas = ()  => {
return (
<BrowserRouter>
<Routes>
<Route path='/' element = { <ItemListContainer/> } />
<Route path='/' element = { <CartWidget/> } />

</Routes>

</BrowserRouter>
);
};

export default Rutas;