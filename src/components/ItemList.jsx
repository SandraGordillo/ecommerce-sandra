import React from 'react'
import Item from './Item'

const ItemList = ({data}) => {
  return (
    <div>
        <>{ data && data.map(Items => <Item Items={Items} key={Items.id} />)}</>
    </div>
  )
}

export default ItemList
