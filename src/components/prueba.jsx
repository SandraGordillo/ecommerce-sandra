import axios from "axios";
import react, { useEffect } from "react";

//const data = [ {nombre: "juego1", precio:"12000",stock:"15"} ]

//const tarea = new Promise((resolve,reject) => {
//setTimeout(() => {
//resolve(data) 
// }, 3000);

//})

//tarea.then((result) => {
//  console.log (result);
//})
//console.log (tarea);

const getData = async () => {
    try {
        const response = await axios.get("http://hp-api.herokuapp.com/api/characters");
        console.log(response)

    } catch (error) {
        console.log(error);
    }
};

useEffect(() => {
    getData()
}, []);