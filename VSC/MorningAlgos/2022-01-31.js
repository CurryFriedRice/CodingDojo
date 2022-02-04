/* 
  Recursively sum an arr of ints
*/

const one_nums1 = [1, 2, 3];
const one_expected1 = 6;

/**
 * Add params if needed for recursion
 * Recursively sums the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The sum of the given nums.
 */
function sumArr(nums, i=0) {
    // edge case 

    // base case -> what is going to end the recursion
    if (i === nums.length){
        return 0
    }

    // recursive call
    return nums[i] + sumArr(nums, i + 1)
}

console.log(sumArr(one_nums1));


// *******************************************************


/* 
Recursive Sigma
Input: integer
Output: sum of integers from 1 to Input integer
*/

const num1 = 5;
const expected1 = 15;
// Explanation: (1+2+3+4+5)

const num2 = 2.5;
const expected2 = 3;
// Explanation: (1+2)

const num3 = -1;
const expected3 = 0;

/**
 * Recursively sum the given int and every previous positive int.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} num
 * @returns {number}
 */
function recursiveSigma(num)
{
    /**create a function that takes in a number
     * if the number == 0 or negative return 0
     * return the number + recursivesigma(num-1)
     */
    //num = Math.floor(num)
    return Math.floor(num) <= 0 ?  0 : Math.floor(num) + recursiveSigma(Math.floor(num)-1)
}
console.log("**************************")
console.log(recursiveSigma(num1))
console.log(recursiveSigma(num2))
console.log(recursiveSigma(num3))