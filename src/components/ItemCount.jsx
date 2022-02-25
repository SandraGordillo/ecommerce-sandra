import { useState } from "react";

function ItemCount(props) {
    const [contador, setContador] = useState(1);

    let onAdd = () => {
        if (contador < props.stock) {
            return contador + 1;
        } else {
            return contador;
        }
    };

    let onRest = () => {
        if (contador <= props.stock && contador !== 1) {
            return contador - 1;
        } else {
            return contador;
        }
    };

    return (
        <div>
            <h1>{contador}</h1>
            <button className ="btn btn-primary" onClick={() => setContador(onAdd())}>+</button>
            <button className ="btn btn-primary" onClick={() => setContador(onRest())}>-</button>
            <button className='' onClick={() => onAdd(contador)}>Agregar al carrito </button>
        </div>
    );
}

export default ItemCount;
