using System;

namespace singleLinkedList
{
    public class SinglyLinkedList
    {
        public SllNode Head;
        public SinglyLinkedList()
        {
            Head = null;
        }
        // SLL methods go here. As a starter, we will show you how to add a node to the list.
        public void Remove()
        {
            if(IsEmpty()) return;
            
            SllNode runner = Head;
            while (runner.Next.Next!=null)
            {
                runner = runner.Next;
            }
            runner.Next = null;
            
        }

        public void Add(int value)
        {
            SllNode newNode = new SllNode(value);
            if (Head == null)
            {
                Head = newNode;
            }
            else
            {
                SllNode runner = Head;
                while (runner.Next != null)
                {
                    runner = runner.Next;
                }
                runner.Next = newNode;
            }
        }
        
        public void PrintValues()
        {
            if(IsEmpty()) return;
            
            SllNode runner = Head;
            while(runner != null)
            {
                Console.WriteLine(runner.Value);
                runner = runner.Next;
            }

        }
        public SllNode FindInt(int value)
        {
            if(IsEmpty())return null;
            SllNode runner = Head;
            while (runner != null)
            {
                if(runner.Value == value) return runner;
                runner=runner.Next;
            }
            return null;
        }
        public void RemoveAt(int index)
        {
            if(IsEmpty())return;
            else if(index == 0)
            {
                Head = Head.Next;
            }else
            {
            SllNode runner = Head;
            for (int i = 0; i < index ;i++)
            {
                if(runner == null) return;
                runner = runner.Next;
            }
            runner.Next = runner?.Next?.Next;
            }
        }

        public bool IsEmpty()
        {
            return Head==null;
        }

        public override string ToString()
        {
            return Head.ToString();
        }
    }
}
