const num1A = 1;
const num1B = 1;
const expected1 = 1;

const num2A = 5;
const num2B = 10;
const expected2 = 10;

const num3A = 10;
const num3B = 5;
const expected3 = 10;

const num4A = 6;
const num4B = 8;
const expected4 = 24;

const num5A = 15;
const num5B = 25;
const expected5 = 75;

/* 
 * Add params if needed for recursion
 * Finds the lowest common multiple of the two given ints.
 * @param {number} a
 * @param {number} b
 * @returns {number} The lowest common multiple of the given ints.
 */
function lowestCommonMult(a, b, baseA = a, baseB = b) 
{
    /** Create a function that takes in two numbers
     * find the smallest number that they have in common when multiplied up
     * if A is equal to B return the value
     * if A is Smaller than b Add A to A
     * if B is smaller than B add B to B
     */

    if (a == b) return a 
    // if (baseA == 0) baseA = a
    // if (baseB == 0) baseB = b

    if (a < b) return lowestCommonMult(a+baseA, b, baseA, baseB)
    return lowestCommonMult(a, b+baseB, baseA, baseB)
}
console.log(lowestCommonMult(num1A,num1B))
console.log(lowestCommonMult(num2A,num2B))
console.log(lowestCommonMult(num3A,num3B))
console.log(lowestCommonMult(num4A,num4B))
console.log(lowestCommonMult(num5A,num5B))



// function lowestCommonDemon(a,b)
// {
//     /**Create a Function that Takes in two integers
//      * use modulos if the lower input is the demoninator of the lower number than
//      * if the Modulus operator is 0 then you've found the multiple
//      * 
//      * Change the higher number to the difference and recurse again
//      */

//     let max = Math.max(a,b)
//     let min = Math.min(a,b)
//     let Remainder = max % min
//     if (max % min == 0) return min
//     console.log(`Max ${max} | Min ${min}`)
//     return lowestCommonMult(min, max- min)
// }

// console.log("********************")
// console.log(lowestCommonMult(num1A, num1B))
// console.log("********************")
// console.log(lowestCommonMult(num2A, num2B))
// console.log("********************")
// console.log(lowestCommonMult(num3A, num3B))


// **

/* 
  Binary String Expansion
  You are given a STRING containing chars "0", "1", and "?"
  For every "?" character, either "0" or "1" can be substituted.
  Write a recursive function to return array of all valid strings with "?" chars expanded to "0" or "1". 
*/

const two_str1 = "1?0?";
const two_expected1 = ["1000", "1001", "1100", "1101"];
// output list order does not matter

//         1?0?
//        /    \
//     100?     110?
//    /   \    /   \
// 1001 1000 1100 1101

/**
 * Add params if needed for recursion
 * Expands a string such that each "?" in the given string will be replaced
 * with a "0" and a "1".
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str The string containing to expand.
 * @returns {Array<string>} The expanded versions of the given string.
 */
function binaryStringExpansion(str, solutions =[], partial = '')
{
    /**Do the final return
     * if the arr.length is equal to questionmarks squared
     * iterate through and pickout the ? 
     * if we hit a ? do a For loop between 0 and 1 inclusive
     * replace the ? with j of the loop (it'll be 0 or 1)
     * push the results into the array
     * return the function of the array
     */

    /**Parse the str as an integer, if it is then return the string
     * Otherwise run the rest of the routine Which is?
     * 
     */

    /** Iterate through the array of each function
     * Slice it out replace ? with a 0 and 1 push it to the array then call the function again
     * return arr
     */
    // for(const str of arr)
    // {
    //     for (let i=0; i< str.length; i++)
    //     {
    //         if (str[i] == '?')
    //         {
    //             for (let j=0; j<2; j++)
    //             {
    //                 arr.push(str.slice(0,i) + j + str.slice(i+1))
    //             }
    //         }
    //     }
    //     arr.splice(arr.has('?'),1)
    //     binaryStringExpansion(arr)
    // }
    // return arr

    let index = str.indexOf('?')
    
    if (index < 0) solutions.push(partial)
    else 
    {
        let front = str.slice(0,index)
        let back =  str.slice(index+1)
        let prefix = partial + front

        binaryStringExpansion(back,solutions, prefix+ '0')
        binaryStringExpansion(back,solutions, prefix+ '1')
    }

    return solutions
}

console.log(binaryStringExpansion(two_str1))