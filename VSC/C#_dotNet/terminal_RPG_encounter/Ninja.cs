using System;

namespace terminal_RPG_encounter
{
    class Ninja : Unit
    {
      
        public Ninja(string Name) : base(Name) 
        {
            this._Name = Name;
            this._Strength = 5;
            this._Intelligence = 5;
            this._Dexterity = 50;
            this._MaxHealth = 100;
            this._currentHealth = _MaxHealth;
        }
        // public Ninja(string Name, int Strength, int Intelligence, int Dexterity, int MaxHealth)
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
            Steal(target);
            return target.Health;
        }


        public override int Attack(Unit target)
        {
            Random rand = new Random();
            int damage = 5 * Dexterity;
            if(rand.Next(0,5) == 4) 
            {
                damage = (int)(damage * 1.2);
                Console.WriteLine($"{Name} has done {damage} to {target.Name} by striking their weak point");
            }else
            {
                Console.WriteLine($"{Name} has done {damage} to {target.Name}");
            }
            target.Health = target.Health - damage;
            return target.Health;
        }

        public void Steal(Unit Target)
        {
            int damage = 3 * Dexterity;
            Target.Health -= damage;
            Health += damage; //This doesn't make sense since we don't have a max health variable...
            Console.WriteLine($"{Name} has stolen {damage} Health from {Target.Name}");
        }
    }


}
