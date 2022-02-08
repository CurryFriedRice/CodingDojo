using System;


namespace phone_assignment
{
    public class Galaxy : Phone, IRingable
    {
        public Galaxy(string versionNumber, int batteryPercent, string carrier, string ringtone) : 
        base(versionNumber, batteryPercent, carrier, ringtone) {}

        public string Ring()
        {
            return $"... {RingTone}...";
        }
        public string Unlock()
        {
            return "Unlocked via Finger Print Sensor";
        }
        public override void DisplayInfo()
        {
            Console.WriteLine("#########################");
            Console.WriteLine($"Galaxy {VersionNumber}");
            Console.WriteLine($"Battery Percent: {BatteryPercent}");
            Console.WriteLine($"Carrier: {Carrier}");
            Console.WriteLine($"Ring Tone: {RingTone}");
            Console.WriteLine("##########################");

            //throw new NotImplementedException();
        }
    }
}