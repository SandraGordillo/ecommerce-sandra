import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';



function App() {
  return (
    <div className="App">
      <Navbar/> 
      <ItemListContainer texto ="Bienvenidos a Music site"/>
    </div>
  );
}

export default App;
