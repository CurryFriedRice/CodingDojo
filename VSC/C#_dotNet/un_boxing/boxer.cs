using System.Collections.Generic;

namespace un_boxing
{
    public class Boxer{
        public static List<object> boxed()
        {
            List<object> stuff = new List<object>();
            stuff.Add(7);
            stuff.Add(28);
            stuff.Add(-1);
            stuff.Add(true);
            stuff.Add("chair");
            
            return stuff;
        }
        }
}