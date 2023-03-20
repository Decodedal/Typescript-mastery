//helps us describe the shape of objects and only objects
var pt = { x: 1, y: 2 };
var Dallas = {
    id: 1,
    first: "Dallas",
    last: "Palumbo",
    nickName: "Hot Cheese",
    sayHi: function () {
        return "Hi ".concat(this.first, " ").concat(this.last);
    },
    setNickname: function (name) {
        this.nickName = name;
        return "Hey ".concat(this.nickName, " love the new name");
    }
};
console.log(Dallas.sayHi());
console.log(Dallas.setNickname("Flying Icecream"));
console.log(Dallas.nickName);
var shirt = {
    name: "great Shirt",
    price: 300,
    applyDiscount: function (discount) {
        return this.price - (this.price * discount / 100);
    }
};
console.log(shirt.price);
console.log(shirt.applyDiscount(20));
