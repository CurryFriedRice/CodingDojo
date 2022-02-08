using System;
using System.Collections.Generic;

namespace puzzles
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] randomArray = RandomArray();
            //Console.WriteLine($"[ {String.Join(", " ,randomArray)}]");
            //Console.WriteLine(TossMultipleCoins(1000));
            List<string> names = new List<string>();
            names.Add("Todd");
            names.Add("Tiffany");
            names.Add("Charlie");
            names.Add("Geneva");
            names.Add("Sydney");
            List<string> shuffledNames = RandomNames(names);

            Console.WriteLine($"{String.Join(", ", shuffledNames)}");
        }


        static int[] RandomArray()
        {
            int[] arr = new int[10];
            Random rand = new Random();
            for (int i = 0; i < arr.Length; i++)
                arr[i] = rand.Next(5,25);

            minMaxSum(arr);
            return arr;
        }

        static void minMaxSum(int[] numbers)
        {
            int min = int.MaxValue; // So everything is smaller than it
            int max = int.MinValue; // SO Everything is bigger than it
            int sum = 0;
            foreach(int value in numbers)
            {
                min = min < value ? min : value;
                max = max > value ? max : value;
                sum = sum + value;
            }
            Console.WriteLine($"{min} | {max} | {sum}");
        }

        static int TossCoin()
        {
            Console.WriteLine("Flipping a coin!");
            Random rand = new Random();
            int result = rand.Next(0,2);
            if(result == 0){
                Console.WriteLine("Tails");
                return result;
            }else 
            {
                Console.WriteLine("Heads");
                return result;
            }
        }

        static double TossMultipleCoins(int num)
        {
            int count = 0;
            for(int i =0; i < num; i++)
            {
                count += TossCoin();
            }
            Console.WriteLine(count);
            return ((double)count/(double)num);
        }

        static List<string> RandomNames(List<string> names)
        {
            List<string> retList = new List<string>();
            foreach(string name in names)
            {
                if(name.Length > 5)retList.Add(name);
            }

            Random rand = new Random();

            //Shuffle...
            for (int i = 0; i < 10; i++)
            {
                int from = rand.Next(retList.Count);
                int to = rand.Next(retList.Count);
                string temp = retList[from];
                retList[from] = retList[to];
                retList[to] = temp;
            }
            return retList;
        }



    }
}
