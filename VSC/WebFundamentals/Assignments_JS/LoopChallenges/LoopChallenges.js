
//Prepare a variable that 
var i;
var result;
// 1. Print odds 1-20
// Using a loop write code that will console.log all of the odd values from 1 up to 20.

console.log("1. Print odds 1-20");
for(i = 1; i<=20 ;i++)
{
    //if we % 2 and it returns 1 then it's odd.  
    if(i%2 == 1) console.log(i);
}

// 2. Decreasing Multiples of 3
// Using a loop write code that will console.log all of the values 
// that are evenly divisible by 3 from 100 down to 0.

console.log("2. decreasing multiples of 3");
var decreaseVal = 1;
for(i = 100; i > 0; i-=decreaseVal)
{
    if(i % 3 ==0)
    {
        decreaseVal = 3;
        console.log(i);
    } 
}

// 3. Print the sequence
// Using a loop write code that will console.log the values in this sequence 
// 4, 2.5, 1, -0.5, -2, -3.5.

console.log("3. Print the sequence")
i = 4;
while(i >= -3.5)
{
    console.log(i);
    i -= 1.5;
}

// 4. Sigma
// Write code that will add all of the values from 1-100 onto some variable sum 
// and at the end console.log the result 1 + 2 + 3 + ... + 98 + 99 + 100. 
// We should get back 5050 at the end.


console.log("4. SIGMA");
i = 1
result = 0;
while(i <= 100)
{
    //If we add i to i then it's effectively doubling every time.. so we need a 3rd variable
    result += i;
    i++;
}
console.log(result);

// 5. Factorial
//Write code that will multiply all of the values from 1-12 onto some variable product 
//and at the end console.log the result 1 * 2 * 3 * ... * 10 * 11 * 12. 
//We should get back 479001600 at the end.

console.log("5. Factorial");
//DON'T START AT 0.... other 0*x = 0
i = 1;
result = 1;
while (i <= 12)
{
    //Keep i seperate from the result
    result *= i;
    i++;
}

console.log(i);