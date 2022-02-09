using System;
using System.Collections.Generic;


namespace tries
{
    
    class Autocomplete
    {   
        LetterNode Start = new LetterNode(); 
        public void Add(string word)
        {
            //Console.WriteLine(word);
            List<char> letters = new List<char>();
            foreach(char letter in word){
                letters.Add(letter);
                //Console.WriteLine(letter);
            }
            
            LetterNode runner = Start;
            foreach(char letter in letters)
            {
                runner = runner.addLetter(letter);
                Console.WriteLine(letter);
            }
            
            runner.IsWord = true;
            
            Console.WriteLine($"{runner.IsWord}");
        }
        public bool Contains(string word)
        {
            List<char> letters = new List<char>();
            foreach(char letter in word){
                letters.Add(letter);
                //Console.WriteLine(letter);
            }
            LetterNode runner = Start;
            
            foreach(char let in letters)
            {
                runner = runner.Next(let);
                if (runner == null) return false;
            }
            Console.WriteLine(runner.IsWord);
            return runner.IsWord;
        }
        
        // string[] Autocomplete(string prefix)
        // {

        //     List<char> letters = new List<char>();
        //     foreach(char letter in prefix){
        //         letters.Add(letter);
        //         //Console.WriteLine(letter);
        //     }
        //     LetterNode runner = Start;
        //     foreach(char let in letters)
        //     {   //If the prefix doesn't match
        //         runner = runner.Next(let);
        //         if (runner == null) return new string[0];
        //     }


        //     List<string> words = new List<string>();
        //     foreach(LetterNode letter in runner.Nexts)
        //     {
                
                
        //     }
        //     return; 
        // }

    }
}
