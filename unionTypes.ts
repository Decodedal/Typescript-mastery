let age : number | string = 2;

age = "55"

type Point ={
    x:number;
    y:number;
}

type Loc ={
    lat:number;
    lon:number;
}

let coordinates : Point | Loc = {
    x:33,
    y:55
}

coordinates = {
    lat : 44,
    lon:33
}

function printAge(age : number | string) : void{
    console.log(`You are ${age} years old.`)
}

printAge(33)
printAge("nine")

//now we run into a problem when we want to run an operation on a argument that would not 
//work on a string

function calculateTax(price: number | string, tax : number) : number {
   if(typeof price === "number"){
    return price * tax
   }else{
    return parseInt(price) * tax
   }
}

console.log(calculateTax(5,10))
console.log(calculateTax("50",10))