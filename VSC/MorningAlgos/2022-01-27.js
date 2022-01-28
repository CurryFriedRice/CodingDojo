/* 
  Given an int to represent how much change is needed
  calculate the fewest number of coins needed to create that change,
  using the standard US denominations
*/

const cents1 = 25;
const expected1 = { quarter: 1 };

const cents2 = 50;
const expected2 = { quarter: 2 };

const cents3 = 9;
const expected3 = { nickel: 1, penny: 4 };

const cents4 = 99;
const expected4 = { quarter: 3, dime: 2, penny: 4 };

/**
 * Calculates the fewest coins of the standard American denominations needed
 *    to reach the given cents amount.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} cents
 * @param {string} sick
 * @returns {Object<string, number>} - A denomination table where the keys are
 *    denomination names and the value is the amount of that denomination
 *    needed.
 */

var coinValue = {
    //"dollarcoin": 100,
    //"half-dollar":50,
    "quarters": 25,
    "dimes" : 10,
    "nickels" : 5,
    "pennies": 1
}
function fewestCoinChange(cents) 
{
    /**
     * create a function that takes in an integer
     * Create an object that holds our coin values
     * Create an object that holds how much change of each there is
     * Divide to get the coins needed and Modulate for the remaining values
     * Add the coins needed to the change object
     */
    change = {
    // "quarters": 0,
    // "nickels" : 0,
    // "dimes" : 0,
    // "pennies": 0
    }
    if(cents >= coinValue['quarters']){
        change['quarters'] = Math.floor(cents/coinValue['quarters'])
        cents = cents%coinValue['quarters']
    }
    if(cents >= coinValue["dimes"]){
        change['dimes'] = Math.floor(cents/coinValue['dimes'])
        cents = cents%coinValue['dimes']
    }
    if(cents >= coinValue['nickels']){
        change['nickels'] = Math.floor(cents/coinValue['nickels'])
        cents = cents%coinValue['nickels']
    }

    if (cents != 0){
        change['pennies'] = cents
    }


    //console.log(change)
    return change
}

console.log(fewestCoinChange(cents1))
console.log(fewestCoinChange(cents2))
console.log(fewestCoinChange(cents3))
console.log(fewestCoinChange(cents4))
/* 
  Missing Value
  You are given an array of length N that contains, in no particular order,
  integers from 0 to N . One integer value is missing.
  Quickly determine and return the missing value.
*/

const two_nums1 = [3, 0, 1];
const two_expected1 = 2;

const two_nums2 = [3, 0, 1, 2];
const two_expected2 = null;
// Explanation: nothing is missing

/*
  Bonus: now the lowest value can now be any integer (including negatives),
  instead of always being 0. 
*/

const two_nums3 = [2, -4, 0, -3, -2, 1];
const two_expected3 = -1;

const two_nums4 = [5, 2, 7, 8, 4, 9, 3];
const two_expected4 = 6;

/**
 * Determines what the missing int is in the given unordered array of ints
 *    which spans from 0 to N where only one int is missing. With this missing
 *    int, a consecutive sequence of ints could be formed from the array.
 * Bonus: Given ints can span from N to M (start and end anywhere).
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} unorderedNums
 * @returns {number|null} The missing integer needed to be able to form an unbroken
 *    consecutive set of integers from the given array or null if none is missing.
 */

function missingValue2(unorderedNums)
{
    //Do math to add up the values of the minimum up to the max
    //Add up the values of the array and the values between min and max
    //Then expected - unordered to get what's missing
}
function missingValue(unorderedNums)
{
    /** Create a function that takes in an unorders array of numbers
     * find the max value of the given array
     * find the minimum value of the given array
     * for every element in the array check if the maximum value is present in the array
     * we want to see if every element between those two is present
     * if we find one that is not present return the number
     */

    let maxVal = max(unorderedNums)
    let minVal = min(unorderedNums)
    let missingNo =null;
    while (maxVal >= minVal)
    {
        let found = false;
        for(let i= 0; i< unorderedNums.length;i++){
            if (unorderedNums[i] == maxVal)
            {
                //console.log("The max value is present! " + maxVal)
                found = true
                break
            }else
            {
                //console.log("the Max Value is NOT this number: " + maxVal)
            }
        }
        if(found == false) missingNo = maxVal
        maxVal = maxVal-1
        //console.log("Max Value:" + maxVal)
    }
    return missingNo
}

function max(unorderedNums){
    let MaxVal = -99999999999;
    for (var i = 0; i< unorderedNums.length; i++){
        if (unorderedNums[i] >MaxVal) MaxVal = unorderedNums[i]
    }
    return MaxVal
}
function min(unorderedNums){
    let MinVal = 999999;
    for (var i = 0; i< unorderedNums.length; i++){
        if (unorderedNums[i] <MinVal) MinVal = unorderedNums[i]
    }
    return MinVal
}

console.log("*********************************");
console.log(missingValue(two_nums1))
console.log(missingValue(two_nums2))
console.log(missingValue(two_nums3))
console.log(missingValue(two_nums4))