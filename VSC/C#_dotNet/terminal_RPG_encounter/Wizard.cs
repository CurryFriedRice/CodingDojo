using System;

namespace terminal_RPG_encounter
{
    class Wizard : Unit, IAbility
    {
      
        public Wizard(string Name) : base(Name) 
        {
            //this._Name = Name;
            //this._Strength = 5;
            this._Intelligence = 50;
            //this._Dexterity = 5;
            this._MaxHealth = 75;
            this._currentHealth = _MaxHealth;
        }

        // public Wizard(string Name, int Strength, int Intelligence, int Dexterity, int Health)
        //     : base(Name, Strength, Intelligence, Dexterity, Health)
        // {
        // }

        public override int Attack(Unit target) 
        {
            int damage = 5 * Intelligence;
            Health += damage;
            Console.WriteLine($"{Name} has siphoned {damage} from {target.Name}");
            return target.Health -= damage;
        }

        public override int Ability(Unit target)
        {
            Heal(target);
            return target.Health;
        }

        public void Heal(Unit target)
        {
            target.Health += 10*Intelligence;
            Console.WriteLine($"{Name}'s wounds close healing for {10*Intelligence}");
        }

    }


}
