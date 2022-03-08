class Ninja
{
    constructor(name, health = 100, speed = 3, strength = 3 )
    {
        this.name = name;
        this.health= health;
        this.speed = speed;
        this.strength = strength;
    }
    
    sayName = () => console.log(this.name);
    showStats = () => 
    {
        console.log(`HP: ${this.health} | STR: ${this.strength} | SPD ${this.speed}`)
    }
    drinkSake = () => this.health += 10;
    
}

const ninja = new Ninja("Hayabusa");

ninja.sayName();
// ninja.drinkSake();
ninja.showStats();