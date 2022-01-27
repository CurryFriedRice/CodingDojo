/* 
  Given two arrays, interleave them into one new array.
  The arrays may be different lengths. The extra items should be added to the
  back of the new array.
*/

const arrA1 = [1, 2, 3];
const arrB1 = ["a", "b", "c"];
const expected1 = [1, "a", 2, "b", 3, "c"];

const arrA2 = [1, 3];
const arrB2 = [2, 4, 6, 8];
const expected2 = [1, 2, 3, 4, 6, 8];

const arrA3 = [1, 3, 5, 7];
const arrB3 = [2, 4];
const expected3 = [1, 2, 3, 4, 5, 7];

const arrA4 = [];
const arrB4 = [42, 0, 6];
const expected4 = [42, 0, 6];

/*
 * Interleaves two arrays into a new array. Interleaving means alternating
 * the items starting from the first array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} arr1
 * @param {Array<any>} arr2
 * @returns {Array<any>} A new array of interleaved items.
 */

function interleaveArrays(arr1, arr2) 
{
  /** Create a function that takes in two arrays
   * create a return array that is a combination of the two
   * Find a way to work through both arrays alternating their values and adding them to the return array until you get through all of it
   * return the return array
   */
  let i = 0
  let retArr = []
  while (i < arr1.length || i < arr2.length)
  {
    if (i < arr1.length) {
      retArr.push(arr1[i])
    }
    if (i < arr2.length){
      retArr.push(arr2[i])
    }
    i++
  }

  return retArr;
}

console.log(interleaveArrays(arrA1, arrB1))
console.log(interleaveArrays(arrA2, arrB2))
console.log(interleaveArrays(arrA3, arrB3))
console.log(interleaveArrays(arrA4, arrB4))
/*
  Array: Binary Search (non recursive)
  Given a sorted array and a value, return whether the array contains that value.
  Do not sequentially iterate the array. Instead, ‘divide and conquer’,
  taking advantage of the fact that the array is sorted .
  Bonus (alumni interview): 
    first complete it without the bonus, because they ask for additions
    after the initial algo is complete
    return how many times the given number occurs
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

// bonus, how many times does the search num appear?
const two_nums4 = [2, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9];
const two_searchNum4 = 2;
const two_expected4 = 4;

/*
 * Efficiently determines if the given num exists in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedNums
 * @param {number} searchNum
 * @returns {boolean} Whether the given num exists in the given array.
 */
function binarySearch(sortedNums, searchNum) 
{
  /**
   * Create a function that takes in an array and a search value to search for
   * Start at the middle of the array and check the value against the search
   * if it is larger then we move up or down if the current value is larger or smaller
   * check the middle of that segment of the array
   * loop until you find the value or that the amount you move is 0
   */
  let index = Math.floor(sortedNums.length/2)
  let step = Math.ceil(index/2);
  while (step != 0 && sortedNums[index] != searchNum)
  {
    if(step == 1)
    {
      console.log("Step " + step)
      console.log("index " + index)
      console.log("value " + sortedNums[index])

      if(sortedNums[index] > searchNum)
        index = index - step
      else if(sortedNums[index] < searchNum)
        index = index + step
      step = 0
    }
    if(sortedNums[index] == searchNum)
    {
      return true;
    }
    else if (sortedNums[index] < searchNum) //If it is less than the number we're searching for we go up
    {
      index = index + step
      step = Math.ceil((step)/2)
    }else if(sortedNums[index] > searchNum) //If it is GREATER than the number we're looking for we go downward
    {
      index = index - step
      step = Math.ceil((step)/2)
    }
  }
  
  return false
}

console.log("**********************")
console.log(binarySearch(two_nums1,two_searchNum1))
console.log("**********************")
console.log(binarySearch(two_nums2,two_searchNum2))
console.log("**********************")
console.log(binarySearch(two_nums3,two_searchNum3))
console.log("**********************")
console.log(binarySearch(two_nums4,two_searchNum4))