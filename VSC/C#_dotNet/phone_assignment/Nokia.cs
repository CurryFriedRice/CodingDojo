using System;


namespace phone_assignment
{
    public class Nokia : Phone, IRingable
    {
        public Nokia(string versionNumber, int batteryPercent, string carrier, string ringtone) : 
        base(versionNumber, batteryPercent, carrier, ringtone) {}

        public string Ring()
        {
            return $"... {RingTone}...";
        }
        public string Unlock()
        {
            return "Unlocked via PIN 6969";
        }
        public override void DisplayInfo()
        {
            Console.WriteLine("$$$$$$$$$$$$$$$$$$$$$$$$$$");
            Console.WriteLine("Nokia 1100");
            Console.WriteLine($"Battery Percent: {BatteryPercent}");
            Console.WriteLine($"Carrier: {Carrier}");
            Console.WriteLine($"Ring Tone: {RingTone}");
            Console.WriteLine("$$$$$$$$$$$$$$$$$$$$$$$$$$");

            //throw new NotImplementedException();
        }
    }
}