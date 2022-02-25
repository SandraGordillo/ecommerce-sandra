import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom";


function ItemDetailContainer() {
    const {id} = useParams();
    <ItemCount/>
    const detail = [
    {
        id:1,
        title: "Cancion animal",
        precio: 800000,
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        img: "https://cdns-images.dzcdn.net/images/cover/ed0eb3899a6dcd08254b0228aa763111/350x350.jpg",
    },

    {
        id:2,
        title: "Paez",
        precio: 600000,
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        img:  "https://www.fitopaezmusica.com/wp-content/uploads/2020/03/TAPA-FITO-BAJA.jpg",
    },

    {
        id:3,
        title: "Bunbury Expectativas",
        precio: 500000,
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        img: "https://geniuslyrics.net/i/bands/350/enrique-bunbury-expectativas.jpg",
    },
]; 
    
    const [info, setInfo] = useState([]);

    useEffect(() => {
        const tarea = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(detail [id-1]);

            }, 100);
        });
        tarea.then((result) => {
            setInfo(result);
        })
            .catch((err) => {
                console.log("error: " + err);
            });
        }, []);

    return (
        <div>
            <ItemDetail itemsDetail={info} />
        </div>
        
    );
    
}
export default ItemDetailContainer;