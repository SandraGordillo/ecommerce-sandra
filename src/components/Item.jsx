import react, { useEffect, useState }  from 'react'

function Item() {

    const data = [
        {  nombre: "Cancion animal", banda: "Soda Stereo", precio: 800000, imagen: "http://hsbnoticias.com/sites/default/files/2021-08/Soda-Stereo-Cancion-animal-primera-portada_0.jpg", Stock: 2 },

        {  nombre: "Paez", banda: "Fito paez", precio: 600000, imagen: "https://www.fitopaezmusica.com/wp-content/uploads/2020/03/TAPA-FITO-BAJA.jpg", Stock: 5 },

        {  nombre: "Bunbury Expectativas", banda: "Enrique Bunbury", precio: 500000, imagen: "https://www.mautorland.com/wp-content/uploads/2017/10/IMG_0504.jpg", Stock: 6 },
    ]

    const [info, setInfo] = useState(null);

    useEffect(() => {
    
    const tarea = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data)
            }, 2000)
        })
        tarea.then((result) => {
            setInfo(result)
        })
            .catch((err) => {
                console.log("error: " + err)
            })
    }, [])

  return (
    <div>
         {info && <ItemList/>}
    </div>
  )
}

export default Item
