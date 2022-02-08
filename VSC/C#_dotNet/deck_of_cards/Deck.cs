using System;
using System.Collections.Generic;

namespace deck_of_cards
{
    public class Deck
    {
     
        Stack<Card> stack = new Stack<Card>(); 
        public Deck()
        {
            Reset();
        }

        public Card Draw()
        {
            if(stack.Count != 0)
                return stack.Pop();
            else{
                Console.WriteLine("There are no cards left");
                return null;
            }
        }
        public void Reset()
        {
            List<Card> Cards = new List<Card>();
            Array suites = Enum.GetValues(typeof(Suite));
            CardValues[] cardValues = (CardValues[])Enum.GetValues(typeof(CardValues));
            foreach(Suite suite in suites)
            {
                int i = 1;
                foreach(CardValues value in cardValues)
                {
                    //Console.WriteLine($"{value} of {suite}");
                    Cards.Add(new Card(value.ToString(),suite,i));
                    i++;
                }
            }
            // foreach(Card c in Cards)
            // {
            //     Console.WriteLine(c.ToString());
            // }
            int deckCount = Cards.Count;
            Random rand = new Random();
            for (int i  = 0; i < deckCount; i++)
            {
                int cardIdx = rand.Next(Cards.Count);
                stack.Push(Cards[cardIdx]);
                Cards.RemoveAt(cardIdx);
            }
        }
    
    }

}
