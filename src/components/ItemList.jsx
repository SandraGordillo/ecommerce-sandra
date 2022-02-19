import React from 'react'
import Item from './Item'
import ItemCount from './ItemCount'

const ItemList = ({data}) => {
  return (
    <div>
        <>{ data && data.map(Items => <Item Items={Items} key={Items.id} />)}</>
        <ItemCount initial={1} stock={10}/>
    </div>
  )
  
}

export default ItemList
