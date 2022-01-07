
function print1_225()
{
    for(var i = 0; i<=255; i++)
        console.log(i) 
}

function printSum0_255()
{
    var sum = 0;
    for(var i = 0; i<=255; i++){
        sum += i;
    }
    console.log(sum)
}

function findAndPrintMax(arr)
{
    console.log(Math.max(...arr));
}

function arrayWithOdds()
{
    var arr =[]
    for (var i = 0; i <= 255; i++){

        if(i%2== 1 ) arr.push(i)
    }
    return arr
}

function greaterThanY(arr, y)
{
    var count = 0;
    arr.forEach(element => {
        element > y ? count++ : count;
    });
    return count;
}

function MaxMinAverage(arr)
{
    var max = Math.max(...arr);
    var min = Math.min(...arr);

    var avg = 0;
    
    for(var i = 0; i< arr.length; i++)
    {
        avg+= arr[i];
    }

    avg /= arr.length;
    console.log(max);
    console.log(min);
    console.log(avg);
}

function ReplaceDojo(arr)
{
    for(var i = 0; i<arr.length; i++)
    {
        if(arr[i] < 0) arr[i] = 'dojo';
    }
    return arr;
}


function ReplaceDojo(arr)
{
    for(var i = 0; i<arr.length; i++)
    {
        if(arr[i] < 0) arr[i] = 'dojo';
    }
    return arr;
}

function printOdds1_255()
{
    for(var i = 0; i<=255; i++)
    {
            if(i%2 == 1) console.log(i);
    }
}


function iterateAndPrint(arr)
{
    arr.forEach(element => console.log(element));
}

function getAndPrintAverage(arr)
{
    var avg = 0; 
    arr.forEach(element => avg += element)
    return avg/arr.length;
}

function squareTheValues(arr)
{
    var retArr =[];
    arr.forEach(element => retArr.push(element*element));
    return retArr;
}

function zeroOutNegative(arr)
{
    var retArr  =[];
    arr.forEach((element) => {element > 0 ? retArr.push(element) : retArr.push(0) ;});
    return retArr;
}

function shiftArrayValue(arr)
{
    arr.shift();
    arr.push(0)
    return arr;
}

var arrayData = [0,11,-2,-1,20]

console.log("01 print1_225");
print1_225();

console.log("=====");
console.log("02 printSum0_255");
printSum0_255();

console.log("=====");
console.log("03 findAndPrintMax");
findAndPrintMax(arrayData);


console.log("=====");
console.log("04 arrayWithOdds");
console.log(arrayWithOdds());

console.log("=====");
console.log("05 greaterThanY"); 
console.log(greaterThanY(arrayData,5));

console.log("=====");
console.log("06 MaxMinAverage");
MaxMinAverage(arrayData);

console.log("=====");
console.log("07");
console.log(ReplaceDojo(arrayData))


console.log("=====");
console.log("08");
printOdds1_255();

console.log("=====");
console.log("09");
iterateAndPrint(arrayData);

console.log("=====");
console.log("10");
console.log( getAndPrintAverage(arrayData))

console.log("=====");
console.log("11");
console.log(squareTheValues(arrayData))

console.log("=====");
console.log("12");
console.log(zeroOutNegative(arrayData))

console.log("=====");
console.log("13");
console.log(shiftArrayValue(arrayData));