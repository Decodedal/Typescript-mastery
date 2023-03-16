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