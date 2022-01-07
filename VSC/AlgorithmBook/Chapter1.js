console.log("=====SIGMA=====");
i = 1
result = 0;
while(i <= 100)
{
    //If we add i to i then it's effectively doubling every time.. so we need a 3rd variable
    result += i;
    i++;
}
console.log(result);



console.log("=====Factorial=====");
//DON'T START AT 0.... other 0*x = 0
i = 1;
result = 1;
while (i <= 12)
{
    //Keep i seperate from the result
    result *= i;
    i++;
}
console.log(result);

//I guess I really wanted to make a function. Though you could put all of this inside of the loop
console.log("=====Three Five=====")

function fizzBuzz(number)
{
    if(number % 3 == 0 && number % 5 == 0) console.log("FizzBuzz");
    else if (number % 3 == 0) console.log("Fizz");
    else if (number % 5 == 0) console.log("Buzz");
    else console.log(number)
}


for(var i = 1; i <= 100; i++)
{   
    fizzBuzz(i);
}
 

//Coin Challenge
console.log("=====CoinChallenge=====")
function generateCoins(cents)
{
    var currentValue = 0;
    var quarters = Math.floor(cents/25);
    currentValue = quarters*25;
    var dimes = Math.floor((cents-currentValue)/10);
    currentValue += dimes*10;
    var nickels = Math.floor((cents-currentValue)/5);
    currentValue += nickels*5;
    var pennies = Math.floor(cents-currentValue);
    
    console.log(quarters+"|"+dimes+"|"+nickels+"|"+pennies)
    return quarters+dimes+nickels+pennies;
}


console.log(generateCoins(142));



console.log("=====RollDice=====")

function rollD6()
{
    return Math.ceil(Math.random()*6);
}

function Doubles(A,B, C=1)
{
    console.log(A + " | "+ B);
    return A==B ?  C : Doubles(rollD6(),rollD6(), C+1) ; 
}

console.log(Doubles(rollD6(),rollD6()))

console.log("=====SumToOneDigit=====")

function SumToOneDigit(value)
{
    value = value.toString().split("");
    var sum = 0;
    for (var i = 0; i < value.length; i++)
    {
        sum += parseInt(value[i]);
    }
    
    return sum < 10 ? sum : SumToOneDigit(sum);
}

console.log(SumToOneDigit(19384))


//5. Fibonacci Array
//Fibonacci numbers have been studied for years and appear often in nature. 
//Write a function that will return an array of Fibonacci numbers up to a given length n. 
//Fibonacci numbers are calculated by adding the last two values in the sequence together. 
//So if the 4th value is 2 and the 5th value is 3 then the next value in the sequence is 5.

function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    // your code here
    for(var i = 1; i < n-1; i++)
    {
        fibArr.push(fibArr[i] + fibArr[i-1]);
    }
    return fibArr;
}
console.log("5. Fibonacci Array")
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]


console.log("===Last Digit AB=====")
function lastDigitAB(a,b)
{
    if(a <0 || b<0) return "ERROR: INPUT LESS THAN ZERO";

    var number = Math.pow(a,b)

    number = number.toString().split("");
    return number[number.length-1];
}

console.log(lastDigitAB(3,4));
console.log(lastDigitAB(12,5));



function updateClock()
{
    var time = getSecondsSinceStartOfDay();
    console.log(time);
    // your code here
    hour = (time / 3600);              //So this is up to 0-24
    minute = (hour *60);               //This is between 0-1440
    seconds = time;                    //This is between 0-86400
    //console.log(Math.floor(hour) + ':' + Math.floor(minute/60) + ':' + Math.floor((time%60)));
    //console.log(Math.floor(hour) + ':' + Math.floor(minute) + ':' + Math.floor(seconds));
    
    //So the max an hour rotates is like... 2....
    var rotHour = (((hour/12)) * 360) -180 
    //an hour is 2 full rotations a DAY
    var rotMinute = ((minute/60) * 360) -180
    //12 rotations per hour
    var rotSecond = ((seconds/60) * 360) - 180

    console.log(Math.floor(rotHour)%360 + ':' + Math.floor(rotMinute)%360 + ':' + Math.floor(rotSecond)%360);
}


function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() +
        new Date().getMinutes() * 60 +
        new Date().getHours() * 3600;
}

updateClock(getSecondsSinceStartOfDay())