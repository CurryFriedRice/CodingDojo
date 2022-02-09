public class DllNode
{
    public int Value;
    public DllNode Next;
    public DllNode Prev;
    public DllNode(int val) 
    {
        Value = val;
        Next = null;
        Prev = null;
    }

    public string getInfo()
    {
        if(Next == null) return $"{Value} -> Tail";
        return $"{Value} <-> {Next.getInfo()}";
    }
    
    public string getInfoRev()
    {
        if(Prev == null) return $"Head <- {Value} ";
        return $"{Prev.getInfoRev()} <-> {Value} ";
    }
}

