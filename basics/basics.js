"use strict";
console.log("hello");
console.log("goodbye");
console.log(Math.round(4.33));
//type script is a superset of Javascript It keeps track of the types of variables to enhance the developer experience 
//Type Syntaxt
// let variable: type = value
let myName = "Dallas";
myName = "Buddy";
let numCatLives = 9;
numCatLives++;
//numCatLives ="3"
let winner = true;
//Type Infernece Type script is smart it will infer the variable type for you 
let tvShow = "the last of us";
tvShow = "Survivor";
// tvShow = 44
//implicit any
//if you declare a var with no type and no value typescript will automaticly assign it an any type
//this is not good as it defeats the purpose of using typescript
//its best to know what type it will become and assign it to that ex
//declaring var with no type or value 
let movie;
//movie has value but is still an any type 
movie = "cannon ball run";
//this way the correct type is in place 
let myMovie;
myMovie = "joker";
