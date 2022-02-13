import React, {useState}  from 'react';

function ItemCount ( {initial,stock}) {
    const [ contador,setContador ] = useState(initial);
    
    
    


return <>
<div className='p-3 mx-2 bg-light text-dark'>
<h1>{contador}</h1>
<button className='btn btn-primary p-3 mx-3 ' onClick={() => setContador(contador+1)}>+</button>;
<button className='btn btn-primary p-3  mx-3' onClick={() => setContador(contador-1)}>-</button>;
</div>

<button className='btn btn-dark'>Añadir al carrito</button>
</>

};

export default ItemCount;
