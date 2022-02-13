import React  from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';

const ItemListContainer = ({texto}) =>{
  return <div>
  <h1>{texto}</h1>
  <ItemCount/>
  </div>;
}

<ItemList/>
export default ItemListContainer;
