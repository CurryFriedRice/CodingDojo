using System;

namespace dojodachi.Models
{
    public enum PetMood 
    {
        HAPPY, SAD, TIRED, DISLIKE, WIN, LOSE
    }
    public class Pet
    {
        public int happiness{get;set;}
        public int fullness{get; set;}
        public int energy {get;set;}
        public int meals{get;set;}

        public PetMood Mood{get;set;} = PetMood.HAPPY;
        public Pet()
        {
            happiness=20;
            fullness=20;
            energy= 50;
            meals = 3;
        }

        public int Feed()
        {
            Random rand = new Random();
            meals -= 1;
            if(rand.Next(4) == 0)
            {
                Mood = PetMood.DISLIKE;
                return 0; //just a 1/4 chance to not do the thing
            }
            int amount = rand.Next(5,11);
            fullness += amount; //Needs to be +1 since it's exclusive
            UpdateMood();
            return amount;
        }

        public int Play()
        {
            energy = energy - 5;
            Random rand = new Random();
            if(rand.Next(4) == 0)
            {
                Mood = PetMood.DISLIKE;
                Console.WriteLine("Disliked Playing");
                return 0; //just a 1/4 chance to not do the thing
            }
            int amount = rand.Next(5,11);;
            happiness += amount; //Needs to be +1 since it's exclusive
            UpdateMood();
            return amount;
        }

        public int work()
        {
            energy = energy - 5;
            Random rand = new Random();
            meals += 3;
            UpdateMood();
            return 3;
        }

        public int sleep()
        {
            energy += 15;
            fullness -=5;
            happiness -= 5;
            UpdateMood();
            return 15;
        }

        public bool win()
        {
            if( energy >= 100 && fullness >= 100 && happiness >= 100)
            {
                Mood =PetMood.WIN;
                return true; 
            }
            return false;
        }

        public bool lose()
        {
            if(happiness <= 0 || fullness <= 0){
                Mood =PetMood.LOSE;
                return true;
            }
            return false;
        }

        void UpdateMood()
        {
            if (happiness < 20 || fullness < 20) 
                Mood = PetMood.SAD;
            else if(energy < 20) 
                Mood = PetMood.TIRED;
            else 
                Mood = PetMood.HAPPY;
        }
    }

    public class PetErr
    {
        public string err{get;set;}
        
        public PetErr(string error)
        {
            err = error;
        }
    }


}
