using System;

namespace human
{
    class Samurai : Human
    {
      
        public Samurai(string Name) : base(Name) 
        {
            //this.Name = Name;
            //this.Strength = 3;
            // this.Intelligence = 25;
            // this.Dexterity = 3;
            this.health = 200;
        }
        public Samurai(string Name, int Strength, int Intelligence, int Dexterity, int Health): base(Name, Strength, Intelligence, Dexterity, Health)
        {
            // this.Name = Name;
            // this.Strength = Strength;
            // this.Intelligence = Intelligence;
            // this.Dexterity = Dexterity;
            // this.health = Health;
        }


        public override int Attack(Human target) 
        {
            int damage = 5 * Strength;
            if((target.health - damage) < 50) return 0;
            return target.health -= damage;
        }

        public void Meditate()
        {
            health = 200; //This doesn't make sense since we don't have a max health variable...
            Console.WriteLine($"{Name} has started meditating, returning to full health");
        }
        
    }


}
