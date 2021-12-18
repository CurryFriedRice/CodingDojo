//1. Always Hungry
//Write a function that is given an array and each time the value is "food" it should console log "yummy". 
//If "food" was not present in the array console log "I'm hungry" once.
function alwaysHungry(arr) {
    // your code here 
    var yummyCount = 0
    for(var i = 0; i<arr.length; i++)
    {
        if(arr[i] == "food") yummyCount ++;
    }

    if(yummyCount == 0)
    {
        console.log("I'm hungry");
    }else
    {
        while (yummyCount >0)
        {
            console.log("yummy");
            yummyCount--;
        }
    }
    /*
    //Without using 'loops'
    arr = arr.filter(word => word == "food")
    if(arr.length == 0) console.log("I'm hungry");
  	else arr.forEach(food => console.log("yummy"));
    
      //In one Line
    arr.filter(word => word == "food").length == 0 ? console.log("I'm hungry") : arr.forEach(food => console.log("yummy"));
    */
}
console.log("1. Always Hungry")   
alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"

//2. High Pass Filter
//Given an array and a value cutoff, 
//return a new array containing only the values larger than cutoff.

function highPass(arr, cutoff) {
    var filteredArr = [];
    // your code here
    
    for(var i = 0; i < arr.length; i++)
    {
        if(arr[i] > cutoff) filteredArr.push(arr[i]);
    }

    //In one Line
    //filteredArr = arr.filter(element => element > cutoff);

    return filteredArr;
}
console.log("2. High Pass")
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]

//3. Better than average
//Given an array of numbers return a count of how many of the numbers
// are larger than the average.

function betterThanAverage(arr) {
    var sum = 0;
    // calculate the average
    for(var i = 0;i<arr.length;i++)
    {
        sum += arr[i];
    }
    var avg = sum/arr.length;
    
    var count = 0
    // count how many values are greated than the average
    for(i = 0; i< arr.length; i++)
    {
        if(arr[i] > avg) count++;
    }

    return count;
}
console.log("3. Better than Average")
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4


//4. Array Reverse
//Write a function that will reverse the values an array and return them.

function reverse(arr) {
    // your code here
    for(var i = 0; i < arr.length/2; i++)
    {
        var temp = arr[i];
        arr[i] = arr[arr.length-1 - i];
        arr[arr.length-1 - i] = temp;
    }

    return arr;
    //return arr.reverse();
}
console.log("4. Reverse Array");
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

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

