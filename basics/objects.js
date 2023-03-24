"use strict";
const dog = {
    name: "buddy",
    breed: "mutt",
    age: 13
};
//This is what it looks like to define an objects types and then the object. 
let coordinate = {
    x: 33,
    y: 66
};
//or we can write it with aliasing as 
let newCoordinate = {
    x: 33,
    y: 66
};
//example showing a function that will return an object
const randomCoordiante = () => {
    let x = Math.floor(Math.random() * 100);
    let y = Math.floor(Math.random() * 100);
    return { x, y };
};
console.log(randomCoordiante());
const sayHappyBirthday = (person) => {
    return `Hey ${person.name}, congats on turning ${person.age}!`;
};
console.log(sayHappyBirthday({ name: "Jerry", age: 44 }));
const areaOfRectangle = (rec) => {
    return `The area of this Rectangle is ${rec.length * rec.height}`;
};
console.log(areaOfRectangle({ length: 44, height: 55 }));
function doublePoint(point) {
    return { x: point.x * 2, y: point.y * 2 };
}
const myPoint = {
    x: 6,
    y: 8
};
console.log(doublePoint(myPoint));
function calculatePayout(mySong) {
    return mySong.numStreams * 0.0033;
}
function printSong(song) {
    console.log(`${song.title} - ${song.artist}`);
}
const input = {
    title: "unchained Melody",
    artist: "Dally bros",
    numStreams: 1232312,
    credits: {
        producer: "phill spector",
        writer: "Alex north"
    }
};
console.log(calculatePayout(input));
printSong(input);
const printSongPrefrences = (songList) => {
    console.table(songList);
};
const dallasSongList = {
    favorate: "Down with the Sickness",
    mostHated: "Anything Country",
    guiltyPleasure: "creep"
};
printSongPrefrences(dallasSongList);
const user1 = {
    id: 1,
    userName: "KittyMan99"
};
user1.userName = "newName good";
user1.id = 2;
const happyFace = {
    radius: 11,
    color: "yellow",
    happy: true
};
