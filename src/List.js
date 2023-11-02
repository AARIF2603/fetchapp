import React from 'react'
import Listitems from './Listitems'

const List = ({items}) => {
  return (
    <ul>
        {items.map(item =>(
            <Listitems item={item} key = {item.id}/>
        ))
    }
    </ul>
  )
}

export default List