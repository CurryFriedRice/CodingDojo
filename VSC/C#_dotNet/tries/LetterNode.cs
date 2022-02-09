using System;
using System.Collections.Generic;


namespace tries
{
    class LetterNode
    {
        bool _IsWord;
        public char value;
        public List<LetterNode> Nexts = new List<LetterNode>();

        public LetterNode()
        {
            
            _IsWord = false;
        }

        public LetterNode(char character)
        {
            value = character;
            _IsWord = false;
        }

        public LetterNode addLetter(char letter)
        {
            foreach (LetterNode node in Nexts)
            {
                if (node.value == letter)
                {
                    return node;
                }
            }
            LetterNode newNode = new LetterNode(letter);
            Nexts.Add(newNode);
            return newNode;
        }

        public LetterNode Next(char letter)
        {
            foreach (LetterNode node in Nexts)
            {
                if (node.value == letter)
                {
                    return node;
                }
            }
           
            return null;
        }

        public bool IsWord
        {
            get { return _IsWord; }
            set { _IsWord = true; }
        }
    }
}
