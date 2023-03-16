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
//default values must be added after where the type is declared 
//we can also declare the return value which while inferable can be helpful for our own sanity 
//use void if the function returns nothing
var greeting = function (name) {
    if (name === void 0) { name = "stranger"; }
    var newName = name.charAt(0).toUpperCase().concat(name.slice(1));
    return "Hello ".concat(newName);
};
//a union type cna be used if the type can be more then one type;
var coinFlip = function () {
    var rand = Math.random();
    if (rand > .5) {
        return rand.toString();
    }
    else {
        return rand;
    }
};
console.log(coinFlip());
//Typescript can infer type for anonymous functions
var colors = ["red", "blue", 'green'];
colors.forEach(function (color) {
    console.log(color);
});
//Void is used when we know a function will return nothing!
var printTwice = function (msg) {
    console.log(msg);
    console.log(msg);
};
printTwice("Hello ts");
//never type when used with functions means this function should never return anything
//use this if you have a loop that is never supposed to end or when throwing an error
var gameLoop = function () {
    while (true) {
        console.log("am i annoying yet");
    }
};
var error = function (msg) {
    throw new Error(msg);
};
gameLoop();
