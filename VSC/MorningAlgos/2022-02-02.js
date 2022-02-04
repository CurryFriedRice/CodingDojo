/* 
  Recursively reverse a string
  helpful methods:
  str.slice(beginIndex[, endIndex])
  returns a new string from beginIndex to endIndex exclusive
*/

const str1 = "abc";
const expected1 = "cba";

const str2 = "";
const expected2 = "";

const str3 = "aardvark"
/**
 * Recursively reverses a string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The given str reversed.
 * 
 * 1. edge case
 * 2. base case
 * 3. recursive call
 */
function reverseStr(str) 
{
    /**
     * Create a function that takes in a string
     * if the string is zero return whats left of the string
     * otherwise fetch the last letter and slice it off and add the rest.
     * Returns a string
     */
    if (str.length == 0) return str

    return str[str.length-1] + reverseStr(str.slice(0,str.length-1))
}
console.log(reverseStr(str3))
// ****************************************************************

/*
  Recursive Binary Search
  Input: SORTED array of ints, int value
  Output: bool representing if value is found
  Recursively search to find if the value exists, do not loop over every element.
  Approach:
  Take the middle item and compare it to the given value.
  Based on that comparison, narrow your search to a particular section of the array
*/

const two_nums1 = [1, 3, 5, 6];
const two_searchNum1 = 4;
const two_expected1 = false;

const two_nums2 = [4, 5, 6, 8, 12];
const two_searchNum2 = 5;
const two_expected2 = true;

const two_nums3 = [3, 4, 6, 8, 12];
const two_searchNum3 = 3;
const two_expected3 = true;

/**
 * Add params if needed for recursion
 * Recursively performs a binary search (divide and conquer) to determine if
 * the given sorted nums array contains the given number to search for.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedNums
 * @param {number} searchNum
 * @returns {boolean} Whether the searchNum was found in the sortedNums array.
 */
function binarySearch(sortedNums, searchNum)
{
    /** Create a function that takes in a sorted array of numbers and the search result
     *  floor the search number to ensure that it is an integer
     * start at the center of the array
     *  If the current index number is less than the result take the bottom half of the array
     *  if the current index number is larger than our search num take the top half of the array
     * if the number that we're looking for does not appear while searching return false
     * if we find the number return true
     */
    searchNum = Math.floor(searchNum)       // This is the value we're lookng for
    console.log(sortedNums[Math.floor(sortedNums.length/2)])
    if(sortedNums[Math.floor(sortedNums.length/2)] == searchNum) return true

    else if(sortedNums.length == 1) return false
    
    else return sortedNums[Math.floor(sortedNums.length/2)] > searchNum ? 
            binarySearch(sortedNums.slice(0,Math.floor(sortedNums.length/2)),searchNum) :  
            binarySearch(sortedNums.slice(Math.floor(sortedNums.length/2),sortedNums.length), searchNum)
}

console.log(binarySearch(two_nums1, two_searchNum1))
console.log(binarySearch(two_nums2, two_searchNum2))
console.log(binarySearch(two_nums3, two_searchNum3))

let arr = [] 
for (let i =0; i< 1000000; i++)
    arr.push(i)

// console.log(arr)

console.log(binarySearch(arr, 1))
