import React, {useState} from 'react'
import Item from '../models/item'

interface ShoppingListProps{
    items:Item[] 
}

const ShoppingList = (props : ShoppingListProps): JSX.Element => {

const [clicked, setClicked] = useState<Boolean>(false)

const handleClick = () :void =>{
    setClicked(!clicked)
}

  return (
    <div>
        <h1>ShoppingList</h1>
        <ul>
            {
                props.items.map((item, key) =>{
                    if(clicked){
                        return(
                            <li onClick={() => handleClick()} key={key}>{item.product} - quantity:{item.quantity} - id:{item.id}</li>
                        ) 
                    }else{
                    return(
                        <li onClick={() => handleClick()} key={key}>{item.product} - {item.quantity}</li>
                    )
                    }
                })
            }
        </ul>
    </div>
  )
}

export default ShoppingList