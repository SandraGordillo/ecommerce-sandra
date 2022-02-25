import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from '../components/ItemListContainer'
import CartWidget from '../components/CartWidget'
import Navbar from '../components/Navbar'
import ItemDetailContainer from '../components/ItemDetailContainer'
import ItemCount from '../components/ItemCount'

const Rutas = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/cartwidget' element={<CartWidget />} />
                <Route path='/Items/:id' element={<ItemDetailContainer />} />
                <Route path='/categoria/:categoria' element={<ItemCount initial={1} stock={10} />} />


            </Routes>

        </BrowserRouter>
    );
};

export default Rutas;