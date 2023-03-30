import React, {useRef} from 'react'

interface ShoppingListFormProps{
    addItem:(item: string) => void;
}

const ShoppingListForm = ({addItem}: ShoppingListFormProps): JSX.Element => {

    const inputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e:React.FormEvent)=>{
        e.preventDefault()
        addItem(inputRef.current!.value)
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type={"text"} placeholder="Product Name" ref={inputRef}/>
        <button type='submit'>Add item</button>
    </form>
  )
}

export default ShoppingListForm