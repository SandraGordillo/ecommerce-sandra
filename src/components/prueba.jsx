import react from "react";

const data = [ {nombre: "juego1", precio:"12000",stock:"15"} ]

const tarea = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve(data) 
    }, 3000);

})

tarea.then((result) => {
    console.log (result);
})
console.log (tarea);