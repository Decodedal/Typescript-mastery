var age = 2;
age = "55";
var coordinates = {
    x: 33,
    y: 55
};
coordinates = {
    lat: 44,
    lon: 33
};
function printAge(age) {
    console.log("You are ".concat(age, " years old."));
}
printAge(33);
printAge("nine");
//now we run into a problem when we want to run an operation on a argument that would not 
//work on a string
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
