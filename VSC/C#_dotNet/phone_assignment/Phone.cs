using System;

namespace phone_assignment
{
    public abstract class Phone
    {
        private String _versionNumber;
        private int _batteryPercent;
        private String _carrier;
        private String _ringTone;
        public Phone(string versionNumber, int batteryPercentage, string carrier, string ringTone)
        {
            _versionNumber = versionNumber;
            _batteryPercent = batteryPercentage;
            _carrier = carrier;
            _ringTone = ringTone;
        }

        public abstract void DisplayInfo();
        public string VersionNumber{get{return _versionNumber;}}
        public int BatteryPercent{get{return _batteryPercent;}}
        public string Carrier{get{return _carrier;}}
        public string RingTone{get{return _ringTone;}}



    }
}
