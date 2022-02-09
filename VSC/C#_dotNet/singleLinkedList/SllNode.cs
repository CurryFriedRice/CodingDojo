using System;

namespace singleLinkedList
{
    public class SllNode
    {
        public int Value;
        public SllNode Next;
        public SllNode(int value)
        {
            Value = value;
            Next = null;
        }

        public override string ToString()
        {
            if (Next != null)
                return Value + " -> " + Next.ToString(); 
            else return Value + " -> END";
        }
    }
}