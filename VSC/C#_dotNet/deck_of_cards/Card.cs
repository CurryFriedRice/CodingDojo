using System;


namespace deck_of_cards
{
        
    public enum Suite
    {
        Clubs, Spades, Hearts, Diamonds
    }
    public enum CardValues
    {
        Ace, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten, Jack, Queen, King
    }
    public class Card
    {
        public string stringVal{get; set;}
        public Suite suite{get; set;}
        public int val{get; set;}
        // static void Main(string[] args)
        // {
        //     Console.WriteLine("Hello World!");
        // }

        public Card(string strVal, Suite suite, int value)
        {
            this.stringVal = strVal;
            this.suite = suite;
            this.val = value;
        }
        public override string ToString()
        {
            //return base.ToString();
            return $"{stringVal} of {suite} with a value of {val}";
        }


    }
}
