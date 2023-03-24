console.log("hello")
//type alisiing for a specific instance normally since we set the type to unknown you can not access length
//but by telling typescript to treat it as a string it runs how we would like 
let mystery: unknown = "Hello World"

console.log((mystery as string).length)

//! non null asertion operator adding to the end of decleration will mean that the html element is definitly there.

//here we have to cast todoInput as HTMLInputelement in order to gain access to its value property 

const btn = document.querySelector("button")! as HTMLButtonElement;
const todoInput = document.querySelector("input")! as HTMLInputElement;
const form = document.querySelector(" form")!
const list = document.querySelector("ul")!;

// btn.addEventListener("click", () : void => {
//     console.log(todoInput.value)
//     todoInput.value = ""
// })

// function createTodo(text){
//     let listItem =  document.createEvent("li") ; 
//     listItem.innerHtml = `<li>${text}</li>`;
    
//  }

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const todo = todoInput.value;
    if(todo){
    let listItem = document.createElement("li");
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    listItem.append(todo);
    listItem.append(checkBox);
    list.appendChild(listItem);
    todoInput.value = "";
    };
})

