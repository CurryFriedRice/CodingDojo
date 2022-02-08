using System;

namespace human
{
    class Ninja : Human
    {
      
        public Ninja(string Name) : base(Name) 
        {
            //this.Name = Name;
            // this.Strength = 3;
            // this.Intelligence = 3;
            this.Dexterity = 175;
            this.health = 100;
        }
        public Ninja(string Name, int Strength, int Intelligence, int Dexterity, int Health): base(Name, Strength, Intelligence, Dexterity, Health)
        {
            // this.Name = Name;
            // this.Strength = Strength;
            // this.Intelligence = Intelligence;
            // this.Dexterity = Dexterity;
            // this.health = Health;
        }

        public override int Attack(Human target)
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
            return target.health -= damage;
        }

        public void Steal(Human target)
        {
            int damage = 5;
            health += damage;
            target.health -= damage;
            Console.WriteLine($"{Name} has stolen {damage} health from {target.Name}");
        }
    }


}
