//Tuples are a special strict array that does not exist in js
//a tupe stricty defines the number of elements in an array and the lenght and order of the array 

type RGB = [number , number, number];

let black : RGB = [255, 255, 255];

type HTTPResponse = [number, string];

const goodRes : HTTPResponse = [200, "OK"]

const errorRes : HTTPResponse = [400, "Error Bad Gatway"]

//limitation You can push and you can pop but you shouldent 

//Enums are a set of named constants 
//does not exist in js

enum Direction {
    Up =   "up",
    Down = "down",
    Left = "left",
    Right = "right"
}

const moveLeft = Direction.Left;

//enum addes code in js if you want to avoid alot of extra js code 
//add const in front of the enum decleration 

const enum Test{
    pass,
    fail,
    retake
}

console.log(Test.retake)
