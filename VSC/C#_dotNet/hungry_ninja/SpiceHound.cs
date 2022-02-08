using System;
using System.Collections.Generic;


namespace hungry_ninja
{
    class SpiceHound : Ninja
    {


        public override bool IsFull {get{
            return calorieIntake > 1200;
        }}
        public override void consume(IConsumable item)
        {
            if(!this.IsFull)
            {
                calorieIntake += item.Calories;
                Console.WriteLine($"Spice Hound Has eaten {item.Name}. It was {item.Calories}");
                if(item.IsSweet)
                {
                    calorieIntake -= 5;
                    Console.WriteLine("The Item is Spciy!! It is worth less calories");
                }
                ConsumptionHistory.Add(item);
                Console.WriteLine(item.GetInfo());
            }else
            {
                Console.WriteLine("SpiceHound is full from eating...");
                foreach(IConsumable Food in ConsumptionHistory)
                {
                    Console.WriteLine(Food.GetInfo());
                }
            }
                
        }
    }
}
