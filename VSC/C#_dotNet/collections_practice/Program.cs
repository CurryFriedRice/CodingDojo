using System;
using System.Collections.Generic;

namespace collections_practice
{
    class Program
    {
        static void Main(string[] args)
        {

            string[] names = ThreeBasicArrays();
            Console.WriteLine("------------------------");
            List<string> flavors = ListOfFlavors();
        
            UserInfoDict(names, flavors);
        }
        
        static string[] ThreeBasicArrays()
        {
            int[] arr1 = {0,1,2,3,4,5,6,7,8,9};
            string[] arr2 = {"Tim", "Martin", "Nikki", "Sara"};
            bool[] arr3 = new bool[10];
            for (int i = 0; i < arr3.Length; i++)
            {
                if (i%2 == 0)
                {
                    arr3[i] = true;
                }
            }
            foreach(var item in arr1)
                Console.WriteLine(item.ToString());
            foreach(var item in arr2)
                Console.WriteLine(item.ToString());
            foreach(var item in arr3)
                Console.WriteLine(item.ToString());
            // Console.WriteLine(arr2.ToString());
            // Console.WriteLine(arr3.ToString());
            return arr2;
        }

        static List<string> ListOfFlavors()
        {
            List<string> flavors = new List<string>();
            flavors.Add("Vanilla");
            flavors.Add("Chocolate");
            flavors.Add("Strawberry");
            flavors.Add("cookies n cream");
            flavors.Add("Mint Chocochip");

            Console.WriteLine($"There are {flavors.Count} Flavors Availalbe");
            string removedFlavor = flavors[3];
            flavors.RemoveAt(3);
            Console.WriteLine($"The Third Flavor is {removedFlavor}");

            Console.WriteLine($"There are {flavors.Count} Flavors Availalbe");
            // foreach(string flavor in flavors)
            // {
            //     Console.WriteLine(flavor);
            // }

            return flavors;
        }

        static void UserInfoDict(string[] nameArr, List<string> flavorList )
        {
            Dictionary<string,string> userInfo = new Dictionary<string,string>();
            Random rnd = new Random();
            foreach(string name in nameArr)
            {
                int favFlav = rnd.Next(flavorList.Count);
                userInfo.Add(name, flavorList[favFlav]);
            }

            foreach(var entry in userInfo)
            {
                Console.WriteLine($"{entry.Key} Likes {entry.Value} flavored icecream");
            }
        }
    }
}
