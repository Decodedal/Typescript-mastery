//we want a function that can accept any element and return an a single elemnt from the array with out generics we 
//might have to write many functions or define a very large type which still wouldnt be as effective because the generic
//makes typescript understand that whatever type of input is given is the same type as the return 
//Math.floor( Math.random () * (max - min + 1)) + min)
var getRandomElement = function (arr) {
    var randNum = Math.floor(Math.random() * (arr.length + 1));
    return arr[randNum];
};
var arrInput = ["Dallas", 29, false, true, "potato"];
console.log(getRandomElement(["dallas", "cody", "lynn"]));
//So in effect the genaric allows you to enter in the correct types depending on what input you will provide
console.log(getRandomElement(arrInput));
