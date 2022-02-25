import react, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import ItemList from './ItemList';

const ItemListContainer = (props) => {
  const { categoryId } = useParams();

  const data = [
    { id: 1, nombre: "Cancion animal", banda: "Soda Stereo", precio: 800000, imagen: "https://cdns-images.dzcdn.net/images/cover/ed0eb3899a6dcd08254b0228aa763111/350x350.jpg", category: { id: 1 }, Stock: 2 },

    { id: 2, nombre: "Paez", banda: "Fito paez", precio: 600000, imagen: "https://www.fitopaezmusica.com/wp-content/uploads/2020/03/TAPA-FITO-BAJA.jpg",category: { id: 2 }, Stock: 5 },

    { id: 3, nombre: "Bunbury Expectativas", banda: "Enrique Bunbury", precio: 500000, imagen: "https://geniuslyrics.net/i/bands/350/enrique-bunbury-expectativas.jpg",category: { id: 3 }, Stock: 6 },
  ];

  const [Items, setItems] = useState([]);

  useEffect(() => {

    const tarea = new Promise((resolve, reject) => {
  
      resolve(data);
    });

    tarea.then((result) => {

     if(categoryId){
      const dataCategory = result.filter(
        (data) => data.category.id === parseInt(categoryId) 
      );
      return setItems(dataCategory);
     }
      return setItems(result);

     
    })
    .catch((err) => {
      console.log(err);
    });
}, [categoryId]);

  return (
    <div>
      <ItemList data={Items} />
    </div>
  );

};




export default ItemListContainer;
