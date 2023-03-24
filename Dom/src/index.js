console.log("hello");
//type alisiing for a specific instance normally since we set the type to unknown you can not access length
//but by telling typescript to treat it as a string it runs how we would like 
var mystery = "Hello World";
console.log(mystery.length);
//! non null asertion operator adding to the end of decleration will mean that the html element is definitly there.
var btn = document.querySelector("button");
var todoInput = document.querySelector("todoInput");
btn.addEventListener("click", function () {
    console.log(todoInput);
});

