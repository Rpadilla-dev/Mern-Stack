class Ninja {
    constructor(name, health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log(`My name is ${this.name}. `);
    }
    showStats(){
        console.log(`Stats are, Name: ${this.name}, Strength:${this.strength}, Speed:${this.speed}, Health:${this.health}. `)
    }
    drinkSake(){
        console.log (` Increment by 10, New Health: ${this.health +=10} `);
    }
}
const Rudy = new Ninja('Rudy', 100, 3, 3);
Rudy.sayName();
Rudy.showStats();
Rudy.drinkSake();