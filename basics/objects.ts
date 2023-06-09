const dog = {
    name:"buddy",
    breed:"mutt",
    age:13
}

//by adding they type to the paramater object you can tell the function what to expect the objects types to be. 
// function printName(name:{first:string , last:string}) : string{
//     return `Hello ${name.first},${name.last}`
// }

// const myName = {
//     first:"Dallas",
//     last:"Palumbo"
// }

// console.log(printName(myName))


type Point = {
    x:number;
    y:number
};


//This is what it looks like to define an objects types and then the object. 

let coordinate : {x:number, y:number} = {
    x:33,
    y:66
}

//or we can write it with aliasing as 

let newCoordinate : Point = {
    x:33,
    y:66
}

//example showing a function that will return an object

const randomCoordiante = () : Point =>{
    let x = Math.floor(Math.random() * 100);
    let y = Math.floor(Math.random() * 100);
    return {x , y}
}

console.log(randomCoordiante())

//TYPE ALIASING 
//Instead of writin gout objext types in an annotation, we can declai them separately in a type alias,
//which is simply the desired shape of the object.
//This allows us to make out code more readable and even ruse the types elsewhere in our code. 

//A type alias


type Person = {
    name: string;
    age: number;
}

type Rectangle ={
    length:number;
    height:number;
}

const sayHappyBirthday = (person:Person) =>{
    return `Hey ${person.name}, congats on turning ${person.age}!`;
}

console.log(sayHappyBirthday({name:"Jerry", age:44}))

const areaOfRectangle =(rec:Rectangle) : string =>{
    return `The area of this Rectangle is ${rec.length * rec.height}`
}

console.log(areaOfRectangle({length:44 , height:55}))

function doublePoint(point: Point) : Point{
    return {x:point.x * 2, y:point.y *2}
}

const myPoint : Point = {
    x:6,
    y:8
}

console.log(doublePoint(myPoint))

//function with a nested object paramater

type Song = {
    title: string;
    artist: string;
    numStreams: number;
    credits:{
        producer: string;
        writer: string;
    }
}

function calculatePayout(mySong: Song):number{
   return mySong.numStreams * 0.0033
}

function printSong(song:Song):void{
    console.log(`${song.title} - ${song.artist}`)
}

const input : Song = {
    title: "unchained Melody",
    artist:"Dally bros",
    numStreams:1232312,
    credits:{
        producer:"phill spector",
        writer:"Alex north"
    }
}

console.log(calculatePayout(input));
printSong(input);

//optional types 
//when you define the shape of an object it has to meet all of the set requierments 
//but if you add in a ? as in key ?: type; you are basicly saying to type script you can take it or leave it.

type SongPrefrence = {
    favorate : string;
    mostHated : string;
    guiltyPleasure ?: string;
}

const printSongPrefrences = (songList : SongPrefrence) : void => {
    console.table(songList)
}

const dallasSongList : SongPrefrence = {
    favorate:"Down with the Sickness",
    mostHated:"Anything Country",
    guiltyPleasure:"creep"
}

printSongPrefrences(dallasSongList);

//Read Only is a typescript only layer that prevents you from altering an object property after it is initialized

type User = {
    readonly id : number;
    userName: string
}

const user1 : User = {
    id:1,
    userName:"KittyMan99"
} 

user1.userName = "newName good";
user1.id = 2;

//Intersection types We can combine already declared types together into new types with &

type Circle = {
    radius: number;
}

type Color = {
    color :string;
}

//add another apersand to add even more types
type ColorfulCirle = Circle & Color & {
    happy : boolean;
};

const happyFace : ColorfulCirle = {
    radius:11,
    color:"yellow",
    happy: true
};