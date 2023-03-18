// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":
var ages = [];
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
var gameBoard = [];
// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices
function getTotal(productList) {
    // let sum = 0;
    // for(let item of productList){
    //     sum += item.price;
    // };
    // return sum;
    return productList.reduce(function (a, b) { return a + b.price; }, 0);
}
;
console.log(getTotal([{ name: "doll", price: 33 }, { name: "blocks", price: 55 }, { name: "drums", price: 650 }]));
