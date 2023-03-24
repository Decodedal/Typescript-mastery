"use strict";
//helps us describe the shape of objects and only objects
const pt = { x: 1, y: 2 };
const Dallas = {
    id: 1,
    first: "Dallas",
    last: "Palumbo",
    nickName: "Hot Cheese",
    sayHi() {
        return `Hi ${this.first} ${this.last}`;
    },
    setNickname(name) {
        this.nickName = name;
        return `Hey ${this.nickName} love the new name`;
    },
};
console.log(Dallas.sayHi());
console.log(Dallas.setNickname("Flying Icecream"));
console.log(Dallas.nickName);
const shirt = {
    name: "great Shirt",
    price: 300,
    applyDiscount(discount) {
        return this.price - (this.price * discount / 100);
    }
};
console.log(shirt.price);
console.log(shirt.applyDiscount(20));
const elton = {
    name: "Elton",
    age: 0.5,
    breed: "mutt",
    bark() {
        return "Bark";
    }
};
const Buddy = {
    name: "Bubs",
    age: 99,
    breed: "muddy",
    bark() { return "bark"; },
    job: "Guide"
};
;
;
;
const Dally = {
    name: "Dallas",
    id: 1,
    email: "soemthing@gamil.com",
    level: "Master",
    skills: ["js", "Tc", "react"]
};
console.log(Dally);
