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
        console.log(`Name: ${this.name} | HP: ${this.health} | STR: ${this.strength} | SPD ${this.speed}`)
    }
    drinkSake = () => this.health += 10;
    
}

class Sensei extends Ninja
{
    constructor(name, health = 200, speed = 10, strength = 10, wisdom = 10)
    {
        super(name, health, speed, strength);
        this.wisdom = wisdom;
        this.quotes = 
            [
            "What one programmer can do in one month, two programmers can do in two months",
            "Hours of coding can save weeks of planning",
            "Go to the store and buy a carton of milk. If there are apples buy two",
            "What is a programmer? AN INCOMPLETE LIBRARY OF CODE?",
            "If you understand maybe you should get Arrays"
            ]
    }

    speakWisdom = () => {console.log(this.quotes[Math.floor(Math.random()*this.quotes.length)])}
} 

const ninja = new Ninja("Hayabusa");
const superNinja = new Sensei("Master Splinter");

ninja.sayName();
// ninja.drinkSake();
ninja.showStats();
superNinja.showStats();
superNinja.speakWisdom();
