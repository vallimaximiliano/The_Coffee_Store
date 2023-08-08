import React from 'react'
import Item from './Item'

const ItemList = ({products}) => {
  return (
    <>
    {products.map((p) => {
        return(
                 
          <Item key={p.id} id={p.id} nombre={p.nombre} descripcion={p.descripcion} stock={p.stock} />

          )
          
        
      })
      
      }
      </>
  )
}

export default ItemList