//it is especially important to declare a type for a function paramater since it doesnt come attached to a value 
//it will default to any 

//bad 
const square = (num) =>{
    return num * num; 
}

square("hi")

//good

const typeSquare = (num : number) =>{
    return num * num;
}

typeSquare(5)

//default values must be added after where the type is declared 
//we can also declare the return value which while inferable can be helpful for our own sanity 
//use void if the function returns nothing

const greeting = (name: string = "stranger") : string =>{
    const newName = name.charAt(0).toUpperCase().concat(name.slice(1))
    return `Hello ${newName}`
}

//a union type cna be used if the type can be more then one type;

const coinFlip = () : string | number =>{
   const rand = Math.random()
    if(rand > .5){
        return rand.toString()
    }else{
        return rand
    }
}

console.log(coinFlip())

//Typescript can infer type for anonymous functions

const colors = ["red", "blue", 'green']

colors.forEach((color) =>{
    console.log(color)
})

//Void is used when we know a function will return nothing!
 const printTwice = (msg:string) : void =>{
    console.log(msg)
    console.log(msg)
 }

 printTwice("Hello ts")

 //never type when used with functions means this function should never return anything
 //use this if you have a loop that is never supposed to end or when throwing an error

 const gameLoop = () : never =>{
    while(true){
            console.log("am i annoying yet")
    }
 }

 const error = (msg:string) : never =>{
    throw new Error(msg);
 }

 gameLoop()