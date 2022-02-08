import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import ItemCount from './components/ItemCount';



function App() {
  return (
    <div className="App">
      <Navbar/> 
      <ItemListContainer texto ="Bienvenidos a Music site"/>
      <ItemCount/>
    </div>
  );
}

export default App;
