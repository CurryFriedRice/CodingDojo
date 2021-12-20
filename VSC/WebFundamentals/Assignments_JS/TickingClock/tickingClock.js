function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() +
        new Date().getMinutes() * 60 +
        new Date().getHours() * 3600;
}


setInterval(function () {updateClock()}, 1000);
updateClock()

//Due to transition I need to do some wacky maths
function updateClock()
{
    var time = getSecondsSinceStartOfDay();
    console.log(time);
    // your code here
    hour = (time / 3600);              //So this is up to 0-24
    minute = (hour *60);               //This is between 0-1440
    seconds = time;                    //This is between 0-86400
    console.log(Math.floor(hour) + ':' + Math.floor(minute/60) + ':' + Math.floor((time%60)));
    console.log(Math.floor(hour) + ':' + Math.floor(minute) + ':' + Math.floor(seconds));
    
    //So the max an hour rotates is like... 2....
    var rotHour = (((hour/12)) * 360) -180 
    //an hour is 2 full rotations a DAY
    var rotMinute = ((minute/60) * 360) -180
    //12 rotations per hour
    var rotSecond = ((seconds/60) * 360) - 180

    console.log(Math.floor(rotHour) + ':' + Math.floor(rotMinute) + ':' + Math.floor(rotSecond));

    document.getElementById('hour').style.transform = "rotate(" + rotHour + "deg)";
    document.getElementById('minutes').style.transform = "rotate(" + rotMinute + "deg)";
    document.getElementById('seconds').style.transform = "rotate(" + rotSecond + "deg)";
    document.getElementById("face").style.transform = "scale(" + 1 + ")";
}