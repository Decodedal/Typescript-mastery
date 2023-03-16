var dog = {
    name: "buddy",
    breed: "mutt",
    age: 13
};
//by adding they type to the paramater object you can tell the function what to expect the objects types to be. 
function printName(name) {
    return "Hello ".concat(name.first, ",").concat(name.last);
}
var myName = {
    first: "Dallas",
    last: "Palumbo"
};
console.log(printName(myName));
//This is what it looks like to define an objects types and then the object. 
var coordinate = {
    x: 33,
    y: 66
};
//or we can write it with aliasing as 
var newCoordinate = {
    x: 33,
    y: 66
};
//example showing a function that will return an object
var randomCoordiante = function () {
    var x = Math.floor(Math.random() * 100);
    var y = Math.floor(Math.random() * 100);
    return { x: x, y: y };
};
console.log(randomCoordiante());
var sayHappyBirthday = function (person) {
    return "Hey ".concat(person.name, ", congats on turning ").concat(person.age, "!");
};
console.log(sayHappyBirthday({ name: "Jerry", age: 44 }));
var areaOfRectangle = function (rec) {
    return "The area of this Rectangle is ".concat(rec.length * rec.height);
};
console.log(areaOfRectangle({ length: 44, height: 55 }));
function doublePoint(point) {
    return { x: point.x * 2, y: point.y * 2 };
}
var myPoint = {
    x: 6,
    y: 8
};
console.log(doublePoint(myPoint));
