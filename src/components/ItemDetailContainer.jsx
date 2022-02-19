import { useEffect, useState } from "react";
import ItemDetail from './ItemDetail';


function ItemDetailContainer() {
    const detail = {
        title: "Cancion animal",
        precio: 800000,
        descripcion: "Gutavo Cerati - Canción animal es el quinto álbum de estudio de la banda de rock argentina Soda Stereo, publicado el 7 de agosto de 1990. Fue grabado entre junio y julio de 1990 en Criteria Recording Studios de Miami, Florida; con la producción de Gustavo Cerati y Zeta Bosio.",
        img: "http://hsbnoticias.com/sites/default/files/2021-08/Soda-Stereo-Cancion-animal-primera-portada_0.jpg"
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