// it says that interface should be segragated with only required method and interface should not be very large

//below is the exanple in which interface is not segregated

class Entity{
    constructor(name){
        this.name = name
    }

    move(){
        console.log(`${this.name} moving`)
    }


    attack(){
        console.log(`${this.name} attacking`)
    }
}

class Character extends Entity{
    constructor(name){
        super(name)
    }
}

class Wall extends Entity{
    move(){
        return null
    }

    attack(){
        return null
    }
}

class Gun extends Entity{
    move(){
        return null
    }
}

let gun = new Gun("gun") 
let wall = new Wall("wall")
let character = new Character("character")

gun.attack() // gun attacking
character.move() // character moving
character.attack() // character attacking

// so in above example we have interface with move and attack functions but when we extend it to other subclass
// not all function are implemented and we ahve to return null unnessesary from the child class to follow the behaviour of interface
// heance this is not a good example of interface segregation principle

// below is the right example of interface segregation principle


class Entity{
    constructor(name){
        this.name = name
    }
}

const mover = {
    move(){
        console.log(`${this.name} moving`)
    }
}

const attacker ={
    attack(){
        console.log(`${this.name} attacking`)
    }
}


const health ={
    hasHealth(){
        console.log(`${this.name} has health`)
    }
}
class Character extends Entity{
    constructor(name){
        super(name)
    }
}

Object.assign(Character.prototype,mover)
Object.assign(Character.prototype,attacker)

class Gun extends Entity{
    constructor(name){
        super(name)
    }
}

Object.assign(Gun.prototype,attacker)

class Wall extends Entity{
    constructor(name){
        super(name)
    }
}

Object.assign(Wall.prototype,health)

let gun1 = new Gun("gun") 
let wall1 = new Wall("wall")
let character1 = new Character("character")

gun1.attack() // gun attacking
character1.move() // character moving
character1.attack() // character attacking
wall1.attack() // TypeError TypeError: wall.attack is not a function
