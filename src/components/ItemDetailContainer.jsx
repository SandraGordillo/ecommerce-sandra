import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import ItemDetail from './ItemDetail';


function ItemDetailContainer() {
    <ItemCount/>
    const detail = {
        id:1,
        title: "Cancion animal",
        precio: 800000,
        descripcion: "Gutavo Cerati - Canción animal es el quinto álbum de estudio de la banda de rock argentina Soda Stereo, publicado el 7 de agosto de 1990. Fue grabado entre junio y julio de 1990 en Criteria Recording Studios de Miami, Florida; con la producción de Gustavo Cerati y Zeta Bosio.",
        img: "https://cdns-images.dzcdn.net/images/cover/ed0eb3899a6dcd08254b0228aa763111/350x350.jpg"
    };
    
    const [info, setInfo] = useState({});

    useEffect(() => {
        const tarea = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(detail);

            }, );
        });
        tarea.then((result) => {
            setInfo(result);
        })
            .catch((err) => {
                console.log("error: " + err);
            });
        }, []);

    return (
        <ItemDetail itemsDetail={info} />
    );
    
}
export default ItemDetailContainer