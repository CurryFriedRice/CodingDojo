using System;

namespace singleLinkedList
{
    class Program
    {
        static void Main(string[] args)
        {
            SinglyLinkedList SL = new SinglyLinkedList();
            SL.Add(1);
            SL.Add(2);
            SL.Add(3);
            SL.Add(4);
                   SL.Add(1);
            SL.Add(2);
                   SL.Add(1);
            SL.Add(2);
                   SL.Add(1);
            SL.Add(2);
            Console.WriteLine(SL.FindInt(3).ToString());
            Console.WriteLine(SL.ToString());
            SL.RemoveAt(0);
            Console.WriteLine(SL.ToString());
        }
    }
}
