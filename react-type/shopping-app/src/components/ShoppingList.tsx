import React from 'react'

interface Item{
    id:number,
    product:string,
    quantity:number
}

interface ShoppingListProps{
    items:Item[]
}

const ShoppingList = (props : ShoppingListProps): JSX.Element => {



  return (
    <div>
        <h1>ShoppingList</h1>
        <ul>
            {
                props.items.map((item, key) =>{
                    return(
                        <li key={key}>{item.product} - {item.quantity}</li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default ShoppingList