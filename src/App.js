import './App.css';
import CartContext from './context/CartContext';
import Rutas from './routes';



function App() {
  return (
    <div className="App">
      <CartContext>
      <Rutas/>
      </CartContext>
    </div>
  );
}

export default App;
