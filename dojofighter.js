//random number generator
const chiNum = (num) => {
    return Math.floor(Math.random() * num)
}


//fighter class for characters
class Fighter {
    constructor(name){
    this.name = name
    this.moves =[    //attacks
        {name: "Poke", strength: chiNum(4)},
        {name: "Punch", strength: chiNum(7)},
        {name: "Clamp", strength: chiNum(10)},
        
    ]
    this.whoopsie =[    //defends
        {name: "Block", defense: chiNum(3)},
        {name: "Dig", defense: chiNum(10)},
        {name: "Duck", defense: chiNum(8)}

    ]
    this.health = 50
    }

    attack(target) {
        //if (target instanceof Fighter)
        const move = chiNum(this.moves.length);
        const damage = chiNum(this.moves[move].strength);
        const dMove = chiNum(this.whoopsie.length);
        const defense = chiNum(this.whoopsie[dMove].defense);
        //target.health -= damage - defense; taking the damage and subtracting the defense = health after attack
        if (damage < defense){
            target.health -= 0
        }else {
            target.health -= damage - defense
        }
        console.log(
           `${this.name} attacked ${target.name} with ${this.moves[move].name} for ${damage} damage, but ${target.name}
           defended with ${this.whoopsie[dMove].name} leaving ${target.name} with ${target.health}`);
        
    }

}

//Create fighters
const Krabby = new Fighter ('Krabby')
const Mantis = new Fighter('Mantis')
// as long as fightOn is true, the look continues
fightOn = true
// this with !=krabbyMantis flip flops between attacker/defender
krabbyMantis = true
// fightOn loop 
while(fightOn){

    if(krabbyMantis){
        Krabby.attack(Mantis)
    }else {
        Mantis.attack(Krabby)
    }
    
    krabbyMantis = !krabbyMantis;

    if (Krabby.health <= 0){
        console.log(`Krabby is fried, Mantis wins!`)
        fightOn = false
    }

    if (Mantis.health <= 0){
        console.log(`Mantis is dead, Krabby wins!`)
        fightOn = false
    }

}
