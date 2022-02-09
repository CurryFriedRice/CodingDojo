using System;

namespace terminal_RPG_encounter
{
    class Samurai : Unit
    {
      
        public Samurai(string Name) : base(Name) 
        {
            //this._Name = Name;
            this._Strength = 15;
            //this._Intelligence = 5;
            //this._Dexterity = 5;
            this._MaxHealth = 200;
            this._currentHealth = _MaxHealth;
        }
        // public Samurai(string Name, int Strength, int Intelligence, int Dexterity, int MaxHealth)
        //     : base(Name, Strength, Intelligence, Dexterity, MaxHealth)
        // {
        //     // this.Name = Name;
        //     // this.Strength = Strength;
        //     // this.Intelligence = Intelligence;
        //     // this.Dexterity = Dexterity;
        //     // this.health = Health;
        // }


        public override int Ability(Unit target)
        {
            Meditate();
            return target.Health;
        }

        public override int Attack(Unit target) 
        {
            int damage = 5 * Dexterity;
            target.Health = target.Health - damage;
            Console.WriteLine($"{Name} has slashed {target.Name} for {damage}");
        
            if((target.Health) < 50) return 0;
            return target.Health;
        }

        public void Meditate()
        {
            Health += 1000; //This doesn't make sense since we don't have a max health variable...
            Console.WriteLine($"{Name} has started meditating, returning to full health");
        }
        
    }


}
