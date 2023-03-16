//it is especially important to declare a type for a function paramater since it doesnt come attached to a value 
//it will default to any 
//bad 
var square = function (num) {
    return num * num;
};
square("hi");
//good
var typeSquare = function (num) {
    return num * num;
};
typeSquare(5);

var greeting = function (name) {
    var newName = name.charAt(0).toUpperCase().concat(name.slice(1));
    return "Hello ".concat(newName);
};

console.log(greeting("dallas"))