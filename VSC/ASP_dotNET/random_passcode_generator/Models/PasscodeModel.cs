using System;

namespace random_passcode_generator.Models
{
    public class Passcode
    {
        public string code{get;set;} = "";
    
        public Passcode()
        {
            Random Rand = new Random();
            string AllValues = "abcdefghijklmnopqrstuvwxyzABCDEFGHIKJLMNOPQRSTUVWXYZ1234567890*&^%$#@!";
            while (code.Length < 14) 
                code +=  AllValues[Rand.Next(AllValues.Length)];
        }
    }
}
