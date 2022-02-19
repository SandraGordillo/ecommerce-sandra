import react, { useEffect, useState }  from 'react'
import ItemList from './ItemList';

const ItemListContainer = () => {
  
      const data = [
          { id: 1, nombre: "Cancion animal", banda: "Soda Stereo", precio: 800000, imagen: "https://cdns-images.dzcdn.net/images/cover/ed0eb3899a6dcd08254b0228aa763111/350x350.jpg", Stock: 2 },
  
          {  id: 2, nombre: "Paez", banda: "Fito paez", precio: 600000, imagen: "https://www.fitopaezmusica.com/wp-content/uploads/2020/03/TAPA-FITO-BAJA.jpg", Stock: 5 },
  
          {  id: 3, nombre: "Bunbury Expectativas", banda: "Enrique Bunbury", precio: 500000, imagen: "https://geniuslyrics.net/i/bands/350/enrique-bunbury-expectativas.jpg", Stock: 6 },
      ]
  
      const [Items, setItems] = useState();
  
      useEffect(() => {
      
      new Promise((resolve, reject) => {
              setTimeout(() => {
                  resolve(data)
              }, 2000);
          }).then((result) => setItems (result));
        }, []);

        return (
          <div>
          <ItemList data={Items} />
          </div>
          );
  
  };




export default ItemListContainer;
