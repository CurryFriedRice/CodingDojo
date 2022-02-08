using System;

namespace multiplication_table
{
    class Program
    {
        static void Main(string[] args)
        {
            int [,] table = new int[10,10];
            for (int x = 1; x<=10;x++)
            {
                for (int y =1; y<=10; y++)
                {
                    table[x-1,y-1] = x*y;
                }
            }
            
            for (int x = 0; x<10;x++)
            {
                string line = "[ ";

                for (int y =0; y<10; y++)
                {   
                    line += table[x,y].ToString() + ", ";
                }
                Console.WriteLine(line + " ]");
            }
        }
    }
}
