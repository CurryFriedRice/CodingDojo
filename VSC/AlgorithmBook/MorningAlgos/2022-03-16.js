// This is an actual interview algorithm given to a Coding Dojo alum

// Find Consecutive Sums

// You are given arr, a list of positive integers 0-255
// You are given k, a integer between 1-255

// Find all the consecutive groups of integers that add up to the value k

// inputs
// k = 16
// arr = [2, 5, 3, 6, 7, 0, 0, 23, 11]

// outputs
// [
//   [2, 5, 3, 6],
//   [3, 6, 7]  // 3, 6, 7 appear consecutively, so they are included in the solution
//   [3, 6, 7, 0],
//   [3, 6, 7, 0, 0]
// ]

function CheckSum(arr, newNum, target)
{
    let sum = 0;
    for (const item of arr)
    {
        sum+=item;
    }
    sum+= newNum
    return sum > target;
}

function SumEquals(arr,target)
{
    let sum = 0;
    for (const item of arr)
    {
        sum+=item;
    // console.log(item)

    }
    return sum === target;
}

// create new arrays
// if no matches, return empty array

//using 'helper' functions to manage loop state
function findConsecutiveSums1(arr, k) 
{
    let ValidArr = []// Empty Array to start
    for(let startingIndex=0; startingIndex < arr.length; startingIndex++)
    {
        let ConsecutiveValues =[]
        for (let runningIndex = startingIndex; runningIndex < arr.length; runningIndex++)
        {
            //If we overflow then we should just break out of this
            if(CheckSum(ConsecutiveValues, arr[runningIndex],k))
            {
                break;
            }else
            {
                ConsecutiveValues.push(arr[runningIndex]);
                if(SumEquals(ConsecutiveValues,k))
                {
                    ValidArr.push([...ConsecutiveValues]);
                }
            }
        }
    }
    return ValidArr;

}


function findConsecutiveSums2(arr, k) 
{
    const ValidArr = []
    for(let startingIndex=0; startingIndex < arr.length; startingIndex++)
    {
        let ConsecutiveValues =[]
        let runningIndex = startingIndex;
        let sum = 0;
        while (sum <= k)
        {
            ConsecutiveValues.push(arr[runningIndex]);
            sum += arr[runningIndex] 
            runningIndex++;
            if(sum === k) ValidArr.push([...ConsecutiveValues]);
        }
    }
    return ValidArr;
}

console.log(findConsecutiveSums1([2,5,3,6,7,0,0,23,11], 16));
console.log(findConsecutiveSums2([2,5,3,6,7,0,0,23,11], 16));