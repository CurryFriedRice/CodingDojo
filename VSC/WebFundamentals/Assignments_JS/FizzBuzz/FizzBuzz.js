

//I guess I really wanted to make a function. Though you could put all of this inside of the loop
function fizzBuzz(number)
{
    if(number % 3 == 0 && number % 5 == 0) console.log("FizzBuzz");
    else if (number % 3 == 0) console.log("Fizz");
    else if (number % 5 == 0) console.log("Buzz");
    else console.log(number)
}


for(var i = 0; i < 100; i++)
{   
    fizzBuzz(i);
}
 