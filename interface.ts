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

//declaring an interface twice results in the interface being equal to the sum of the two definitions
//aka they both are used to define the type;

interface Dog{
    breed : string;
    bark(): string;
}

interface Dog{
    name:string;
    age: number;
}

const elton: Dog = {
    name: "Elton",
    age:0.5,
    breed: "mutt",
    bark(){
        return "Bark"
    }
};

//we also get extendes with interfaces just like with classes 

interface ServiceDog extends Dog{
    job:"drug sniffer" | "bomb disarming" | "Guide"
}

const Buddy : ServiceDog ={
    name:"Bubs",
    age:99,
    breed:"muddy",
    bark(){return "bark"},
    job: "Guide"
}

//interfaces can extend more then one interface conjunctivly 

interface Human{
    name: string;
};

interface Employee{
    readonly id :number;
    email: string;
};

interface Engineer extends Human, Employee{
    level: string;
    skills: string[];
};

const Dally : Engineer = {
    name:"Dallas",
    id:1,
    email:"soemthing@gamil.com",
    level:"Master",
    skills: ["js", "Tc", "react"]
};

console.log(Dally)

//so what are the diffrences between types and interfaces 
//interfaces only describe the shape of an object that is it!
//type is more flexable and can be used when not working with objects

type PrimaryColor = "red" | "blue" | "green"

//types can not be reopened like interfaces can 

type cat ={
    name : string
}

type cat = {
    age: number
}