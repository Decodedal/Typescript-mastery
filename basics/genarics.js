//we want a function that can accept any element and return an a single elemnt from the array with out generics we 
//might have to write many functions or define a very large type which still wouldnt be as effective because the generic
//makes typescript understand that whatever type of input is given is the same type as the return 
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//Math.floor( Math.random () * (max - min + 1)) + min)
var getRandomElement = function (arr) {
    var randNum = Math.floor(Math.random() * (arr.length + 1));
    return arr[randNum];
};
var arrInput = ["Dallas", 29, false, true, "potato"];
console.log(getRandomElement(["dallas", "cody", "lynn"]));
//So in effect the genaric allows you to enter in the correct types depending on what input you will provide
//console.log(getRandomElement(arrInput))
//you can pass two generics here since each input could be another type
function merge(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
console.log(merge({ 1: "Dallas" }, { "Dallas": [1, 2, 3, 4] }));
