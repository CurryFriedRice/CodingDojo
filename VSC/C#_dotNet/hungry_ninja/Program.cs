using System;
using System.Collections.Generic;


namespace hungry_ninja
{

    class Prog
    { 
        static void Main(string[] args)
        {
            Random rand = new Random();
            Buffet buffet = new Buffet();
            SweetTooth ST = new SweetTooth();
            SpiceHound SH = new SpiceHound();

            while(!SH.IsFull)
            {
                IConsumable Order =buffet.OrderFood(rand.Next(buffet.Menu.Count));
                SH.consume(Order);
                SH.ConsumptionHistory.Add(Order);
                Console.WriteLine($"Spice Hound has eaten {Order.Name}");
            }
            
            while(!ST.IsFull)
            {
                IConsumable Order =buffet.OrderFood(rand.Next(buffet.Menu.Count));
                ST.consume(Order);
                ST.ConsumptionHistory.Add(Order);
                Console.WriteLine($"Sweet Tooth has eaten {Order.Name}");
            }
        }    
        
    }
    // class Ninja
    // {
    //     private int calorieIntake;
    //     public List<Food> FoodHistory = new List<Food>();
    //     public bool IsFull {get{
    //         return  calorieIntake > 2000;
    //     }}
    //     public void Eat(Food item)
    //     {
    //         calorieIntake += item.Calories;
    //     }
    //     static void Main(string[] args)
    //     {
    //         Random rand = new Random();
    //         Ninja nin = new Ninja();
    //         Buffet buffet = new Buffet();
    //         while(!nin.IsFull)
    //         {
    //             Food Order =buffet.OrderFood(rand.Next(buffet.Menu.Count));
    //             nin.Eat(Order);
    //             nin.FoodHistory.Add(Order);
    //             Console.WriteLine($"Ninja has eaten {Order.Name} for a total of {nin.calorieIntake} Calories");
    //         }
            
        
    //         Console.WriteLine($"Nin is full after eating");
    //         foreach (Food item in nin.FoodHistory)
    //         {
    //             Console.WriteLine(item.Name);
    //         }
            
    //     }

    // }
}
