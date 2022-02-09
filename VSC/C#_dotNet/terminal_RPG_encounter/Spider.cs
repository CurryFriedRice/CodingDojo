using System;

namespace terminal_RPG_encounter
{
    class Spider : Unit
    {
        public Spider(string Name) : base(Name) 
        {
            this._Name = Name;
            this._Strength = 10;
            //this._Intelligence = 5;
            this._Dexterity = 15;
            this._MaxHealth = 140;
            this._currentHealth = _MaxHealth;
        }

        // public Spider(string Name, int Strength, int Intelligence, int Dexterity, int Health)
        //     : base(Name, Strength, Intelligence, Dexterity, Health)
        // {
        //     // this.Name = Name;
        //     // this.Strength = Strength;
        //     // this.Intelligence = Intelligence;
        //     // this.Dexterity = Dexterity;
        //     // this.health = Health;
        // }


        public override int Attack(Unit target) 
        {
            int damage = 2 * Dexterity + 2/3*Strength;
            Health += damage;
            Console.WriteLine($"{Name} has siphoned {damage} from {target.Name}");
            return target.Health -= damage;
        }
        
        
        public void Heal(Unit target)
        {
            target.Health += 10*Intelligence;
            Console.WriteLine($"{Name}'s wounds close healing for {10*Intelligence}");
        }

    }


}
