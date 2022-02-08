using System;

namespace fundamentals_1
{
    class Program
    {
        static void Main(string[] args)
        {
            loop255();
            fizzbuzzWhile();
            Console.WriteLine("**********************");
            fizzbuzzFor();
        }

        static void loop255()
        {
            int i = 1;
            while (i<255)
            {
                Console.WriteLine(i);
                i++;
            }
        }

        static void fizzbuzzWhile()
        {
            int i = 0;
            while (i<100)
            {
                if(i % 3 == 0 && i %5 == 0)
                {
                    Console.WriteLine("FizzBuzz");
                }
                else if(i%3 ==0)
                {
                    //Console.WriteLine(i);
                    Console.WriteLine("Fizz");
                }
                else if(i%5==0)
                {
                    //Console.WriteLine(i);
                    Console.WriteLine("Buzz");
                }
                i++;
            }
        }
        
        static void fizzbuzzFor()
        {
            for(int i = 0; i <100; i++)
            {
                if(i % 3 == 0 && i %5 == 0)
                {
                    Console.WriteLine("FizzBuzz");
                }
                else if(i%3 ==0)
                {
                    //Console.WriteLine(i);
                    Console.WriteLine("Fizz");
                }
                else if(i%5==0)
                {
                    //Console.WriteLine(i);
                    Console.WriteLine("Buzz");
                }
            }
        }
    }
}
