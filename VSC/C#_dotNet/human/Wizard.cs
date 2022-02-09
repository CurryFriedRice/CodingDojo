using System;

namespace human
{
    class Wizard : Human
    {
      
        public Wizard(string Name) : base(Name) 
        {
            //this.Name = Name;
            // this.Strength = 3;
            this.Intelligence = 25;
            // this.Dexterity = 3;
            this.health = 50;
        }

        public Wizard(string Name, int Strength, int Intelligence, int Dexterity, int Health): base(Name, Strength, Intelligence, Dexterity, Health)
        {
            // this.Name = Name;
            // this.Strength = Strength;
            // this.Intelligence = Intelligence;
            // this.Dexterity = Dexterity;
            // this.health = Health;
        }

        public override int Attack(Human target) 
        {
            int damage = 5 * Intelligence;
            health += damage;
            Console.WriteLine($"{Name} has siphoned {damage} from {target.Name}");
            return target.health -= damage;
        }

        public void Heal(Human target)
        {
            target.health += 10*Intelligence;
            Console.WriteLine($"{Name}'s wounds close healing for {10*Intelligence}");
        }
        
    }


}
