//helps us describe the shape of objects and only objects

interface Point{
    x: number;
    y: number;
}

const pt : Point = {x:1, y:2}

//optional params defined same way as type aliasing ?:
//same with read only 
//we can also describe the methods that the object must have 
//not defining the function just describing it

interface Person{
    readonly id: number;
    first: string;
    last: string;
    nickName ?: string;
    sayHi : () => string;
    setNickname : (name : string) => string;
}

const Dallas : Person = {
    id:1,
    first:"Dallas",
    last:"Palumbo",
    nickName:"Hot Cheese",
    sayHi() {
        return `Hi ${this.first} ${this.last}`
    },
    setNickname(name) {
        this.nickName = name;
        return `Hey ${this.nickName} love the new name`
    },
}

console.log(Dallas.sayHi())
console.log(Dallas.setNickname("Flying Icecream"))
console.log(Dallas.nickName)

interface Product{
    name: string;
    price: number;
    applyDiscount(discount : number) : number;
}

const shirt : Product = {
    name:"great Shirt",
    price:300,
    applyDiscount(discount : number){
        return this.price - (this.price * discount /100)
    }
}

console.log(shirt.price)
console.log(shirt.applyDiscount(20))