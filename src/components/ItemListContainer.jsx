import react, { useEffect, useState }  from 'react'
import ItemList from './ItemList';

const ItemListContainer = () => {
  
      const data = [
          { id: 1, nombre: "Cancion animal", banda: "Soda Stereo", precio: 800000, imagen: "http://hsbnoticias.com/sites/default/files/2021-08/Soda-Stereo-Cancion-animal-primera-portada_0.jpg", Stock: 2 },
  
          {  id: 2, nombre: "Paez", banda: "Fito paez", precio: 600000, imagen: "https://www.fitopaezmusica.com/wp-content/uploads/2020/03/TAPA-FITO-BAJA.jpg", Stock: 5 },
  
          {  id: 3, nombre: "Bunbury Expectativas", banda: "Enrique Bunbury", precio: 500000, imagen: "https://www.mautorland.com/wp-content/uploads/2017/10/IMG_0504.jpg", Stock: 6 },
      ]
  
      const [Items, setItems] = useState([null]);
  
      useEffect(() => {
      
      new Promise((resolve, reject) => {
              setTimeout(() => {
                  resolve(data)
              }, 2000);
          }).then((result) => setItems (result));
  
    return () => {
      setItems ([ ]);
    };
  });

  return (
 <div>
  <ItemList data={Items} />
  </div>
  );
};
 
export default ItemListContainer;
