using System;

namespace human
{
    class Human
    {
        // Fields for Human
        public string Name;
        public int Strength;
        public int Intelligence;
        public int Dexterity;
        public int health { get; set;}

        // add a public "getter" property to access health
        // Add a constructor that takes a value to set Name, and set the remaining fields to default values
        // Add a constructor to assign custom values to all fields
        // Build Attack method
        static void Main(string[] args)
        {
            Human H1 = new Human("Bubbles");
            Human Hero = new Human("Steven", 12, 10, 10, 500);
            Console.WriteLine(Hero.Attack(H1));

            Ninja nin = new Ninja("Nin Nin");
            Samurai sam = new Samurai("Yoshitsune");
            Console.WriteLine(nin.ToString());
            nin.Attack(sam);
        }

        public Human(string Name)
        {
            this.Name = Name;
            this.Strength = 3;
            this.Intelligence = 3;
            this.Dexterity = 3;
            this.health = 100;
            
        }

        public Human(string Name, int Strength, int Intelligence, int Dexterity, int Health)
        {
            this.Name = Name;
            this.Strength = Strength;
            this.Intelligence = Intelligence;
            this.Dexterity = Dexterity;
            this.health = Health;
        }

        public virtual int Attack(Human target)
        {
            int damage = 5 * Strength;
            return target.health -= damage;
        }

        public override string ToString()
        {
            return $"Name: {Name}  | Strength: {Strength}  | Intelligence: {Intelligence} | Dexterity: {Dexterity}  | Health: {health}";
        }
    }


}
