"use strict";
let age = 2;
age = "55";
let coordinates = {
    x: 33,
    y: 55
};
coordinates = {
    lat: 44,
    lon: 33
};
const coords = [{ x: 33, y: 44 }, { lat: 33, lon: 55 }];
function printAge(age) {
    console.log(`You are ${age} years old.`);
}
printAge(33);
printAge("nine");
//now we run into a problem when we want to run an operation on a argument that would not 
//work on a string
//we can use if statments to tell function what to do depending on what type is inputed
function calculateTax(price, tax) {
    if (typeof price === "number") {
        return price * tax;
    }
    else {
        return parseInt(price) * tax;
    }
}
console.log(calculateTax(5, 10));
console.log(calculateTax("50", 10));
//union type on array wrap the union type in parens 
//good
const numOrStringArr = [];
//this will be a string or an arrya or numbers
const numArrOrString = [];
//this would be an array or strings only or an array or numbers only 
const arrOfStringsOrArrOfNums = [];
//literal type 
// basicly saying that the only thing this can posibly be is the value of its type 
let zero = 0;
zero = 2;
let hi = "hi";
hi = "bye";
//not super useful on its own but when you combine with uniontypes can be useful uniontypes it 
let answer = "yes";
answer = "no";
answer = "maybe";
