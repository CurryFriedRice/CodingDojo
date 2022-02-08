using System;
using System.Collections.Generic;

namespace un_boxing
{
    public class Unboxer{
        public static void unbox(List<object> stuff)
        {
            int sum = 0;
            foreach(object thing in stuff)
            {
                if(thing is int)
                {
                    Console.WriteLine($"We got ourselves an integer {thing}");
                    sum += (int)thing;
                }
                if(thing is string)
                {
                    string value = thing as string;
                    Console.WriteLine($"We got ourselves a string {value}");
                }
                if(thing is bool)
                {
                    bool value = (bool)thing;
                    Console.WriteLine($"We got ourselves a bool that's {value}");
                }
            }

            Console.WriteLine($"Well all them numbers in there are summed up to... {sum}");
        }
    }
}