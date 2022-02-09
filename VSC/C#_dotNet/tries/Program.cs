using System;

namespace tries
{
    class Program
    {
        static void Main(string[] args)
        {
            Autocomplete AC = new Autocomplete();
            AC.Add("cool");
            AC.Add("dojo");
            AC.Add("coding");
            Console.WriteLine(AC.Contains("cool"));
            Console.WriteLine(AC.Contains("cosl"));

        }
    }
}
