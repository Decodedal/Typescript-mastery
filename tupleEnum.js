//Tuples are a special strict array that does not exist in js
//a tupe stricty defines the number of elements in an array and the lenght and order of the array 
var black = [255, 255, 255];
var goodRes = [200, "OK"];
var errorRes = [400, "Error Bad Gatway"];
//limitation You can push and you can pop but you shouldent 
//Enums are a set of named constants 
//does not exist in js
var Direction;
(function (Direction) {
    Direction["Up"] = "up";
    Direction["Down"] = "down";
    Direction["Left"] = "left";
    Direction["Right"] = "right";
})(Direction || (Direction = {}));
var moveLeft = Direction.Left;
console.log(2 /* Test.retake */);
