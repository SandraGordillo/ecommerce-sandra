import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import Rutas from './routes';



function App() {
  return (
    <div className="App">
      <Navbar/> 
      <ItemListContainer/>
      <Rutas/>
    </div>
  );
}

export default App;
