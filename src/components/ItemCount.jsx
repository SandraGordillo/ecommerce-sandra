import React, { useState } from 'react';

function ItemCount({ initial, stock }) {
    const [contador, setContador] = useState(initial);

    const onAdd = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    };

    const OnReduce = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }
    };


    return (  <> 

        <div className='p-3 mx-2'>
            <h1>{contador}</h1>
            <button onClick={() => OnReduce()} className='btn btn-primary p-3 mx-3 '>-</button>;
            <button onClick={() => onAdd()} className='btn btn-primary p-3  mx-3'>+</button>;
        </div>

        </> 
    );

};

export default ItemCount;
