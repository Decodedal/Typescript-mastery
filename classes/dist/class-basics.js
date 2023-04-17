class Player{
    //# means it will be private and user will not ba able to change
    #score = 0;
    numLives = 3;
    constructor(first, last){
        this.first = first;
        this.last = last;
    }

    taunt(){
        console.log("BOOYAH")
    }
    
    loseLife(){
        this.numLives--
        if(this.numLives < 1){
            console.log("Game over")
        }
    }

    getScore(){
        return this.#score
    }
}

const player1 = new Player("Buddy", "Palumbo"); 
console.log(player1);
player1.taunt()
console.log(player1);
console.log(player1.getScore())
