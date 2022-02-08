using System;
using System.Linq;
using System.Collections.Generic;
namespace basic13
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            //PrintNumbers();
            //PrintOdds();
            //PrintSum();
            //OddArray();
            OddArray();
            //int[] value3 = new int[]{1, 5, 10, -2};
            //Console.WriteLine(GreaterThanY(value3, 4));
            //SquareArrayValues(value3);
            //EliminateNegatives(value3);
            //MinMaxAverage(value3);

            // int[] value2 = new int[]{1, 5, 10, 7, -2};
            // ShiftValues(value2);
            // int[] blah = new int[] {-1, -3, 2};
            // object[] obj = NumToString(blah);
            // foreach(var value in obj)
            // {
            //     Console.WriteLine(value);
            // }
        }

        public static void PrintNumbers()
        {
            // Print all of the integers from 1 to 255.
            int i = 1;
            while (i <255)
            {
                Console.WriteLine(i);
                i++;
            }
        }

        public static void PrintOdds()
        {
            // Print all of the odd integers from 1 to 255.
            int i = 1;
            while (i <255)
            {
                if(i%2==1)Console.WriteLine(i);
                i++;
            }
        }

        public static void PrintSum()
        {
            // Print all of the numbers from 0 to 255, 
            // but this time, also print the sum as you go. 
            // For example, your output should be something like this:

            // New number: 0 Sum: 0
            // New number: 1 Sum: 1
            // New Number: 2 Sum: 3
            int i = 1;
            int sum = 0;
            while (i <255)
            {
                sum += i;
                i++;
                Console.WriteLine($@"New Number {i}     | Sum{i}");
            }
        }
        

        public static void LoopArray(int[] numbers)
        {
            // Write a function that would iterate through each item of the given integer array and 
            // print each value to the console. 
            for (int i = 0; i < numbers.Length; i++)
            {
                Console.WriteLine(numbers[i]);
            }
        }
        public static int FindMax(int[] numbers)
        {
            // Write a function that takes an integer array and prints and returns the maximum value in the array. 
            // Your program should also work with a given array that has all negative numbers (e.g. [-3, -5, -7]), 
            // or even a mix of positive numbers, negative numbers and zero.
            int max = int.MinValue;
            for (int i = 0; i < numbers.Length; i++)
            {
                max = Math.Max(max, numbers[i]);
            }
            return max;
        }
        public static void GetAverage(int[] numbers)
        {
            // Write a function that takes an integer array and prints the AVERAGE of the values in the array.
            // For example, with an array [2, 10, 3], your program should write 5 to the console.
            int avg = 0;
            for (int i =0; i < numbers.Length; i++)
            {
                avg +=  numbers[i];
            }
            Console.WriteLine($"The Average is {avg/numbers.Length}");

            int avg2 = 0;
            avg2 = numbers.Aggregate<int>((item1, item2) => item1+item2);
            avg2 = avg2/ numbers.Length;
            Console.WriteLine($"The Average 2 is {avg2}");

        }

        public static int[] OddArray()
        {
            // Write a function that creates, and then returns, an array that contains all the odd numbers between 1 to 255. 
            // When the program is done, this array should have the values of [1, 3, 5, 7, ... 255].
            List<int> list = new List<int>();
            for (int i = 0; i<=255; i++)
            {
                if(i%2 == 1) list.Add(i);
            }
            
            int[] arr = new int[list.Count];
            
            for(int i = 0; i<list.Count; i++)
            {
                arr[i] = list[i];
            }

            Console.WriteLine($"[ {String.Join(", ", arr)} ]");
            return arr;
         }
        public static int GreaterThanY(int[] numbers, int y)
        {
            // Write a function that takes an integer array, and a integer "y" and returns the number of array values 
            // That are greater than the "y" value. 
            // For example, if array = [1, 3, 5, 7] and y = 3. Your function should return 2 
            // (since there are two values in the array that are greater than 3).
            int numsGreaterY = 0;
            foreach(int value in numbers)
            {
                if(value > y) numsGreaterY ++;
            }
            return numsGreaterY;
        }

        public static void SquareArrayValues(int[] numbers)
        {
            // Write a function that takes an integer array "numbers", and then multiplies each value by itself.
            // For example, [1,5,10,-10] should become [1,25,100,100]
            int[] arr = new int[numbers.Length];
            for(int i =0; i < numbers.Length; i++)
            {
                arr[i] = numbers[i]*numbers[i];
            }
            Console.WriteLine($"[ {String.Join(", ", arr)} ]");
        }


        public static void EliminateNegatives(int[] numbers)
        {
            // Given an integer array "numbers", say [1, 5, 10, -2], create a function that replaces any negative number with the value of 0. 
            // When the program is done, "numbers" should have no negative values, say [1, 5, 10, 0].
            int[] arr = new int[numbers.Length];
            for(int i = 0; i < arr.Length; i++)
            {
                arr[i] = numbers[i] > 0 ? numbers[i] : 0; 
            }
            Console.WriteLine($"[ {String.Join(", ", arr)} ]");
        }

        public static void MinMaxAverage(int[] numbers)
        {
            // Given an integer array, say [1, 5, 10, -2], create a function that prints the maximum number in the array, 
            // the minimum value in the array, and the average of the values in the array.
            int min = int.MaxValue;
            int max = int.MinValue;
            float avg = 0;
            foreach(int value in numbers)
            {
                min = Math.Min(min, value);
                max = Math.Max(max, value);
                avg = avg + value;
            }
            avg = avg/numbers.Length;
            Console.WriteLine($"[{min}, {max}, {avg}]");

        }


        public static void ShiftValues(int[] numbers)
        {
            // Given an integer array, say [1, 5, 10, 7, -2], 
            // Write a function that shifts each number by one to the front and adds '0' to the end. 
            // For example, when the program is done, if the array [1, 5, 10, 7, -2] is passed to the function, 
            // it should become [5, 10, 7, -2, 0].
            int[] arr = numbers;
            for(int i = 0; i < numbers.Length-1; i++)
                arr[i] = arr[i+1];
            arr[numbers.Length-1] = 0;
            Console.WriteLine($"[ {String.Join(", ", arr)} ]");

        }
        public static object[] NumToString(int[] numbers)
        {
            // Write a function that takes an integer array and returns an object array 
            // that replaces any negative number with the string 'Dojo'.
            // For example, if array "numbers" is initially [-1, -3, 2] 
            // your function should return an array with values ['Dojo', 'Dojo', 2].
            object[] arr = new object[numbers.Length];
            for(int i = 0; i < arr.Length; i++)
            {
                if (numbers[i] > 0)
                    arr[i] = numbers[i];
                else arr[i] = "Dojo";
            }
            
            return arr;
        }

    }
}



