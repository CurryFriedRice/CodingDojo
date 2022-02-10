using System;
using System.Collections.Generic;

namespace deck_of_cards{
   
    class Player
    {
        public string Name{get;set;}
        public List<Card> Hand{get;set;} = new List<Card>();
        static void Main(string[] args)
        {
            Deck deck = new Deck();

            Console.WriteLine("Hello World!");
            Player myself = new Player();
            myself.Draw(deck);
            myself.Draw(deck);
            myself.Draw(deck);
            myself.Discard(0);
            myself.Discard(0);
            myself.Discard(0);

        }
        public Card Draw(Deck _Deck)
        {
            Card drawn = _Deck.Draw();
            Console.WriteLine($"Drawn Card is : {drawn.ToString()}");
            Hand.Add(drawn);
            return drawn;
        }

        public Card Discard(int handIndex)
        {
            if (Hand.Count == 0) return null;
            if (Hand[handIndex] != null)
            {
                Card discarded = Hand[handIndex];
                Hand.RemoveAt(handIndex);
                Console.WriteLine($"Discarded Card is : {discarded.ToString()}");
                return discarded;
            }
            return null;
        }
    }
}
