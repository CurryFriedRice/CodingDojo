using System;

namespace terminal_RPG_encounter
{
    public class Unit : IAbility
    {
        protected string _Name;
        protected int _Strength;
        protected int _Intelligence;
        protected int _Dexterity;
        protected int _MaxHealth;
        protected int _currentHealth;

        public Unit(string Name)
        {
            this._Name = Name;
            this._Strength = 5;
            this._Intelligence = 5;
            this._Dexterity = 5;
            this._MaxHealth = 100;
            this._currentHealth = _MaxHealth;

            //this.Health = 100;
        }
        public string Name{get{return _Name;}}
        public int Strength{get{return _Strength;}}
        public int Intelligence{get{return _Intelligence;}}
        public int Dexterity{get{return _Dexterity;}}
        public int Health{
            get{return _currentHealth;}
            set
            {
                // Console.WriteLine(_currentHealth);
                // Console.WriteLine(value);
                if( value > _MaxHealth) _currentHealth = _MaxHealth;
                else if(value < 0 ) _currentHealth = 0;
                else _currentHealth = value;
            }
        }

        public virtual int Attack(Unit Target)
        {
            int damage = 5 * _Strength;
            Target.Health = Target.Health - damage;
            return Target.Health;
        }
        public Unit(string Name, int Strength, int Intelligence, int Dexterity, int _Health)
        {
            this._Name = Name;
            this._Strength = Strength;
            this._Intelligence = Intelligence;
            this._Dexterity = Dexterity;
            this._MaxHealth = Health;
            this.Health = _MaxHealth;
        }

        public virtual int Ability(Unit Target)
        {
            Console.WriteLine($"{Name} Helplessly Waves their hands");
            return 0;
        }

        public virtual string getInfoSimple()
        {
            return $"Name: {_Name} |  Health: {Health}/{_MaxHealth}";
        }

        public virtual string getInfo()
        {
            return $"Name: {_Name}  | Strength: {_Strength}  | Intelligence: {_Intelligence} | Dexterity: {_Dexterity}  | Health: {Health}";
        }

        
    }
}
