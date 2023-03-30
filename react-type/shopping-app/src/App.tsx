import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Greeter from './components/Greeter';
import ShoppingList from './components/ShoppingList';
import ShoppingListForm from './components/ShoppingListForm';
import Item from './models/item';

function App() {

const[items, setItems] = useState<Item[]>([])

//function to add item to state from useRef
const addItem = (product:string) =>{
 let id:number = items.length;
 let quantity:number = Math.floor(Math.random() * 10)
 let newItem:Item = {
    id:id,
    product:product,
    quantity:quantity
 }
 setItems([...items, newItem])
}

//   const items = [
//     {
//         id:1,
//         product:"lemon",
//         quantity:3
//     },
//     {
//         id:2,
//         product:"chickenBreast",
//         quantity:5
//     }
// ] 

  return ( 
    <div>
      <ShoppingList items={items}/>
      <ShoppingListForm addItem={addItem}/>
    </div>
  );
}

export default App;
