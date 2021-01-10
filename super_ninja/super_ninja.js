class Ninja {
    constructor(name, health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
        this.wisdom = 10;
    }
    sayName(){
        console.log(`My name is ${this.name}. `);
    }
    showStats(){
        console.log(`Stats are, Name: ${this.name}, Strength:${this.strength}, Speed:${this.speed}, Health:${this.health}. `)
    }
    drinkSake(){
        this.health +=10;
    }
}

class Sensei extends Ninja{
    constructor( name, health, wisdom){
        super ('wisdom');
        this.name = name;
        this.health = health;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }   
    


    showStats(){
        console.log(`Name: ${this.name}, Strength:${this.strength}, Speed:${this.speed}, Health:${this.health} Wisdom:${this.wisdom}. `)
    }

    speakWisdom(){
        super.drinkSake();
        console.log ('This is why you fail.');
    }


}
const Yoda = new Sensei('Yoda', 200, 10, 10, 'wisdom');

Yoda.speakWisdom();
Yoda.showStats();
