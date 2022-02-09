using System;

namespace doubleyLinkedLists
{
    class Program
    {
        static void Main(string[] args)
        {
            doubleyLinkedLists List = new doubleyLinkedLists();
            List.Add(1);
            List.Add(2);
            List.Add(3);
            List.Add(4);
            List.Add(5);
            List.Add(6);
            Console.WriteLine(List.Head.getInfo());
            //List.Remove(3);
            Console.WriteLine(List.Head.getInfo());
            Console.WriteLine(List.Tail.getInfoRev());
            List.Reverse();
            Console.WriteLine(List.Head.getInfo());

        }
    }
}
