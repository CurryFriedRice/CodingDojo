using System;
using System.Collections.Generic;

namespace terminal_RPG_encounter
{

    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");

            Unit Villager = new Unit("Villager");
            Console.WriteLine("oops");
            Console.WriteLine(Villager.ToString());

            Wizard Wz = new Wizard("Snurmple");
            Ninja Nj = new Ninja("Lodelle");
            Samurai Sm = new Samurai("OJango");

            Zombie ZmA = new Zombie("Zombie A");
            Zombie ZmB = new Zombie("Zombie B");
            Spider SpA = new Spider("Spider A");

            List<Unit> Heroes = new List<Unit>() { Wz, Nj, Sm };
            List<Unit> Villains = new List<Unit>() { ZmA, ZmB, SpA };
            List<Unit> TurnOrder = new List<Unit>();
            TurnOrder.AddRange(Heroes);
            TurnOrder.AddRange(Villains);
            TurnOrder = SetupTurnOrder(TurnOrder);
            foreach (Unit unit in TurnOrder)
            {
                Console.WriteLine(unit.getInfoSimple());
            }

            Console.WriteLine("Input PLz");
            int CurrentTurn = 0;
            while (!TeamDefeated(Heroes) && !TeamDefeated(Villains))
            {
                if (CurrentTurn >= TurnOrder.Count) CurrentTurn= 0;
                foreach (Unit unit in TurnOrder)
                {
                    Console.WriteLine(unit.getInfoSimple());
                }

                if (Villains.Contains(TurnOrder[CurrentTurn]))
                {
                    TurnOrder[CurrentTurn].Attack(RandomAlive(Heroes));
                    CurrentTurn++;
                    Console.WriteLine($"Confirm End of Action");
                    string Confirm= Console.ReadLine();
                }
                else
                {
                    Console.WriteLine($"Attack | Skill");
                    string Action = Console.ReadLine();
                    if (IsValidAction(Action))
                    {
                        Unit target = RandomAlive(Villains);
                        if (Action.ToLower() == "attack") TurnOrder[CurrentTurn].Attack(target);
                        else if (Action.ToLower() == "skill") TurnOrder[CurrentTurn].Ability(target);
                        
                        if(target.Health <= 0)
                        {
                            Console.WriteLine($"{target.Name} Has been slain");
                            TurnOrder.Remove(target);
                        }
                        CurrentTurn++;
                        
                        Console.WriteLine($"Confirm End of Action");
                        string Confirm= Console.ReadLine();
                    }else
                    {
                        Console.WriteLine("Invalid Action!");
                    }
                }
                if(TeamDefeated(Heroes))
                {
                    Console.WriteLine("Heroes have been lost to the undead");
                } 
                else if(TeamDefeated(Villains))
                {
                    Console.WriteLine("Heroes have triumphed over the undying");
                }
            }

            static List<Unit> SetupTurnOrder(List<Unit> Units)
            {
                //this will be based off of Dexterity?
                List<Unit> TurnOrder = new List<Unit>();
                while (Units.Count != 0)
                {
                    Unit Fastest = Units[0];
                    foreach (Unit unit in Units)
                    {
                        Fastest = unit.Dexterity > Fastest.Dexterity ? unit : Fastest;
                    }
                    TurnOrder.Add(Fastest);
                    Units.Remove(Fastest);

                }
                return TurnOrder;
            }

            static bool TeamDefeated(List<Unit> Units)
            {
                foreach(Unit unit in Units)
                {
                    if (unit.Health != 0) return false;
                }
                return true;
            }

            static bool IsValidAction(string input)
            {
                if (input.ToLower() == "attack" || input.ToLower() == "skill")
                    return true;
                return false;
            }


            static Unit RandomAlive(List<Unit> Targets)
            {
                List<Unit> valid = new List<Unit>();
                foreach (Unit unit in Targets)
                {
                    if (unit.Health > 0)
                    {
                        valid.Add(unit);
                    }
                }
                Random rand = new Random();
                return valid[rand.Next(valid.Count)];
            }
        }
    }
}