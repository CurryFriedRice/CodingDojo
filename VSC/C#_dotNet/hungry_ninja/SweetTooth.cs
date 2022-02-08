using System;
using System.Collections.Generic;


namespace hungry_ninja
{
    class SweetTooth : Ninja
    {


        public override bool IsFull {get{
            return calorieIntake > 1500;
        }}
        public override void consume(IConsumable item)
        {
            if(!this.IsFull)
            {
                calorieIntake += item.Calories;
                Console.WriteLine($"Sweet Tooth Has eaten {item.Name}. It was {item.Calories}");
                if(item.IsSweet)
                {
                    calorieIntake += 10;
                    Console.WriteLine($"The Item is sweet! It is worth more calories");
                }
                ConsumptionHistory.Add(item);
                Console.WriteLine(item.GetInfo());
            }else
            {
                Console.WriteLine($"SweetTooth is full from eating...");
                foreach(IConsumable Food in ConsumptionHistory)
                {
                    Console.WriteLine(Food.GetInfo());
                }
            }
                
        }
    }
}
