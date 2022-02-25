import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from '../components/ItemListContainer'
import Cart from '../components/Cart'
import Navbar from '../components/Navbar'
import ItemDetailContainer from '../components/ItemDetailContainer'


const Rutas = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/Cart' element={<Cart/>} />
                <Route path='/Items/:id' element={<ItemDetailContainer />} />
                <Route path="/category/:categoryId" element={<ItemListContainer />} />
            </Routes>

        </BrowserRouter>
    );
};

export default Rutas;