/* 
  Array: Mode
  
  Create a function that, given an array of ints,
  returns the int that occurs most frequently in the array.
    - What if there are multiple items that occur the same number of time?
        - return all of them (in an array)
    - what if all items occur the same number of times?
        - return empty array
*/

const nums1 = [];
const expected1 = [];

const nums2 = [1];
const expected2 = [1];

const nums3 = [5, 1, 4];
const expected3 = [];

const nums4 = [5, 1, 4, 1];
const expected4 = [1];

const nums5 = [5, 1, 4,4, 1,1,1,5,5, 5];
const expected5 = [5, 1];

const nums6 = [5, 1, 5,1];
const expected6 = [];

//  - order doesn't matter

/**
 * Finds the mode or all modes if there are more than one. The mode is the
 *    value which occurs the most times in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Test
 * @returns {Array<number>} Mode or modes in any order.
 */

function mode(nums) 
{
    /**
     * Create a Empty Object and array
     * Assign a key value pair
     * 
     * iterate through the object to get the highest occurance
     */
    if (nums.length <= 1) return nums;
    let maxOccurence = 0 
    let minOccurences = 999999
    let occurences = {}
    for (let i = 0; i < nums.length; i++){
        if (occurences.hasOwnProperty(nums[i])){
            occurences[nums[i]] = occurences[nums[i]] + 1
        }
        else{
            occurences[nums[i]] = 1
        }
    }

    for(const object in occurences){

        if(maxOccurence < occurences[object])
            maxOccurence = occurences[object]
        
        if(minOccurences > occurences[object])
            minOccurences = occurences[object]
    }
    
    if(maxOccurence* mostOccured == nums.length)
    if (maxOccurence == minOccurences) return []
        
    let retArr = []
    for (const object in occurences)
        if(maxOccurence == occurences[object])
            retArr.push(parseInt(object))

    return retArr
}

// let blah = {"Potato":"salad"}
// console.log(blah)
// console.log(blah.hasOwnProperty("Potato"))

console.log(mode(nums1))
console.log(mode(nums2))
console.log(mode(nums3))
console.log(mode(nums4))
console.log(mode(nums5))
console.log(mode(nums6))