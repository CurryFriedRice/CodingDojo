using System;

namespace doubleyLinkedLists
{
    class doubleyLinkedLists
    {
        public DllNode Head;
        public DllNode Tail;

        public void Add(int Value)
        {
            DllNode newNode = new DllNode(Value);

            if(Head == null)
            {
                Head = newNode;
                Tail = newNode;
            }else
            {
                Tail.Next = newNode;
                newNode.Prev = Tail;
                Tail = Tail.Next;
            }
        }
        public bool Remove(int Value)
        {
            DllNode runner = Head;
            if (runner.Value == Value)
            {
                Head = Head.Next;
                Head.Prev = null;
                return true;
            }else if(Tail.Value == Value)
            {
                Tail = Tail.Prev;
                Tail.Next = null;
            }

            while(runner.Next != null)
            {
                if(runner.Value == Value)
                {
                    Console.WriteLine("Found the number");
                    DllNode left = runner.Prev;
                    DllNode right = runner.Next;
                    left.Next = right;
                    right.Prev = left;
                    return true;
                }
                runner = runner.Next;
            }
            return false;
        }

        public void Reverse()
        {
            DllNode Runner_h = Head;
            DllNode Runner_t = Tail;

            while( Runner_h.Next != null
                && Runner_t.Prev != null
                )
            {
               
                int temp = Runner_h.Value;
                Runner_h.Value =  Runner_t.Value;
                Runner_t.Value = temp;
                // Console.WriteLine("LINE");
                // Console.WriteLine(Runner_h == Runner_t);
                // Console.WriteLine($"{Runner_h.Value} | {Runner_t.Value}");
                Runner_h = Runner_h.Next;
                Runner_t = Runner_t.Prev;
                // Console.WriteLine("POST");
                // Console.WriteLine(Runner_h == Runner_t);
                // Console.WriteLine($"{Runner_h.Value} | {Runner_t.Value}");
               
               
                if(Runner_h == Runner_t) return;
                else if(Runner_h.Next == Runner_t) {
                    temp = Runner_h.Value;
                    Runner_h.Value =  Runner_t.Value;
                    Runner_t.Value = temp;
                    return;
                }
            }
            
        }
    }

}
