class Card
{
    constructor(cost = 0,name = "N/A")
    {
        this.cost = cost; 
        this.name = name;
    }
}

class Unit extends Card
{
    constructor(cost = 0, name ="N/A", Power = 0, Resiliance = 1)
    {
        super(cost, name);
        this.power = Power;
        this.resiliance = Resiliance
        console.log(`${name} was summoned to the field`);
    }
    
    /**
     * 
     * @param {Unit} target 
     */
    Attack = (target) =>
    {
        if(target instanceof Unit)
        {
            console.log(`${this.name} has attacked ${target.name}`);
            AdjustHealth(target, -this.power);
            if(target.resiliance <= 0)
                console.log(`${target.name} has run out of resiliance and fainted`);
        }else
        {
            throw new Error("Target Must be a unit!");
        }
    }

    ShowStats = () => console.log(`${this.name} | Resiliance: ${this.resiliance} | Power ${this.power}`) 
}

class Effect extends Card
{
    constructor(cost = 0, name="N/A", Effect, Amount = 0)
    {
        super(cost,name);
        this.Effect = Effect;
        this.Amount = Amount
    }

    ActivateEffect = (Target) => 
    {
        console.log(`${this.name} was Activated!`)
        console.log(`${this.name} has ${this.Effect(Target)} `)
    }
}


/**
 * 
 * @param {Unit} target 
 * @param {int} amount 
 */
const   AdjustPower = (target, amount) => 
        {
            target.power = (target.power + amount) > 0 ? target.power + amount : 0
            return `${amount > 0 ? "Increased" : "Decreased"} ${target.name}'s Resiliance By ${amount}`
        },
        AdjustHealth = (target, amount) => 
        {
            target.resiliance = (target.resiliance + amount) > 0 ? target.resiliance + amount : 0
            return `${amount > 0 ? "Increased" : "Decreased"} ${target.name}'s Health By ${amount}`
        }

/**
 * 
 * @param {string} statTarget 
 * @param {int} amount 
 * @returns 
 */
const Adjust = (statTarget, amount) =>
{
    return StatsOf = (target) => 
    {
        switch(statTarget.toLowerCase())
        {
            case "resiliance":
                target.resiliance = (target.resiliance + amount) > 0 ? target.resiliance + amount : 0
                return `${amount > 0 ? "Increased" : "Decreased"} ${target.name}'s Health By ${amount}`
            case "power":
                target.power = (target.power + amount) > 0 ? target.power + amount : 0
                return `${amount > 0 ? "Increased" : "Decreased"} ${target.name}'s Resiliance By ${amount}`
        }
    }
}

const scenario = () => 
{
    const printTurn = (number) => console.log(`\n===== TURN ${number} =====`);

    printTurn(1);
    const RedBeltNinja = new Unit(3,"Red Belt Ninja", 3, 4);
    const HardAlgorithm = new Effect(2,"Hard Algorithim",Adjust("resiliance",3))
    HardAlgorithm.ActivateEffect(RedBeltNinja);
    RedBeltNinja.ShowStats();

    printTurn(2);
    const BlackBeltNinja = new Unit(4,"Black Belt Ninja", 5,4);
    const PromiseRejection = new Effect(1,"Unhandled Promise Rejection", Adjust("resiliance",-2))
    PromiseRejection.ActivateEffect(RedBeltNinja);
    BlackBeltNinja.ShowStats();
    RedBeltNinja.ShowStats();

    printTurn(3);
    const PairProgramming = new Effect(3, "Pair Programming",Adjust("power", 2));
    PairProgramming.ActivateEffect(RedBeltNinja);
    RedBeltNinja.Attack(BlackBeltNinja);
    RedBeltNinja.ShowStats();
    BlackBeltNinja.ShowStats();

}

scenario();