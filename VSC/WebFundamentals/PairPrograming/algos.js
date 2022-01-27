//make a function that is able to roll a number between 1 and 6
function d6() {
    //This rolls a random number between 0 and 1
    var roll = Math.random();
    roll = Math.ceil(roll*6);
    return roll;
}

function diceDuel(valueA, valueB)
{
    if(valueA == valueB)
    {
        console.log("The players tied");
        return diceDuel(d6(),d6());
    }else if(valueA <valueB)
    {
        console.log("The player 2 rolled: " + valueB);
        return valueB;
    }else
    {
        console.log("The player 1 rolled: " + valueA);
        return valueA; 
    }
}


for (var i = 0; i < 10; i++){   
    var playerRoll = d6();
    diceDuel(d6(),d6());
} 


var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

function fortune(array)
{
    var value = Math.floor(Math.random()*array.length);
    return array[value];
}

for(var j = 0; j< 5; j++)
{
    console.log(fortune(lifesAnswers))
}