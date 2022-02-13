import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';



function App() {
  return (
    <div className="App">
      <Navbar/> 
      <ItemListContainer texto ="Bienvenidos a Music site"/>
      <ItemCount initial={1} stock={10}/>
    </div>
  );
}

export default App;
