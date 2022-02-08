/*
  Sum To One Digit
  Implement a function sumToOne(num)​ that,
  given a number, sums that number’s digits
  repeatedly until the sum is only one digit. Return
  that final one digit result.
  Tips:
    to access digits from a number, need to convert it .toString() to access each digit via index
    parseInt(arg) returns arg parsed as an integer, or NaN if it couldn't be converted to an int
    isNaN(arg) used to check if something is NaN
*/

const num1 = 5;
const expected1 = 5;

const num2 = 10;
const expected2 = 1;

const num3 = 25;
const expected3 = 7;

const num4 = 987234;
const expected4 = 6
// 9+8+7+2+3+4 = 3+3 = 6

/**
 * Sums the given number's digits until the number becomes one digit.
 * @param {number} num The number to sum to one digit.
 * @returns {number} One digit.
 */
function sumToOneDigit(num, index = 0)
{
    /** Create a function that takes in an integer
     * Convert the integer to a string
     * take the first index of the string and convert it back to an integer
     * iterate to the next value in the digits index
     */

    var numString = num.toString()

    if (index == numString.length) return 0
    else if(parseInt(numString[index]) == NaN)
    {
        return NaN
    }
    else
    {
        var result = parseInt(numString[index]) + sumToOneDigit(num, index+1)
        // var result = 0
        // for (let i = 0; i < numString.length; i++)
        //     result += parseInt(numString[i])
        return result > 10 ? sumToOneDigit(result) : result
    }
}


console.log(sumToOneDigit(num1))
console.log(sumToOneDigit(num2))
console.log(sumToOneDigit(num3))
console.log(sumToOneDigit(num4))

// **********************************************************

/* 
  String Anagrams
  Given a string,
  return array where each element is a string representing a different anagram (a different sequence of the letters in that string).
  Ok to use built in methods
*/

// const str1 = "lim";
// const two_expected1 = ["ilm", "iml", "lim", "lmi", "mil", "mli"];
// // Order of the output array does not matter

// /**
//  * Add params if needed for recursion.
//  * Generates all anagrams of the given str.
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param {string} str
//  * @returns {Array<string>} All anagrams of the given str.
//  */
// function generateAnagrams(str, start ='') 
// {
//     //If the string is equal to 1 just return the string
//     if ( str.length == 1 ) {
//         return [ start + str ];
//     } else {
//         //Otherwise make a list of returnable values
//         var returnResult = [];
//         //Iterate through the string that we are passed
//         for (var i=0; i < str.length; i++) {  
//             //Our results are equal to the letters from 0 to our index + then from our index + 1 then go to the end 
//             var result = generateAnagrams (str.substr(0, i) + str.substr(i+1), str[i]);
//             //Then for Every result that we 
//             for (var j=0; j<result.length; j++) {
//                 returnResult.push(start + result[j]);
//             }
//         }

//         return returnResult;
//     }
// }

// console.log("**********************************************")
// console.log(generateAnagrams(str1))
