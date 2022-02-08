using System;
using System.Collections.Generic;

namespace hungry_ninja
{
    public class Buffet
    {
        public List<IConsumable> Menu;
        
        public Buffet()
        {
            Menu = new List<IConsumable>()
            {
                new Drink("Soda", 100 , false, true),
                new Drink("Bucket of Maple Syrup", 1000 , false, true),
                new Food("Chili", 1000, true, false),
                new Food("Jalapeno Burger", 750, true, false)
            };
        }

        public IConsumable OrderFood(int index)
        {
            return Menu[index];
        }
    }
}