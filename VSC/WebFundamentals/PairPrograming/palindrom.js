/* 
  String: Is Palindrome
  Create a function that returns a boolean whether the string is a strict palindrome. 
    - palindrome = string that is same forwards and backwards

  Do not ignore spaces, punctuation and capitalization
 */

  const str1 = "a x a";
  //const expected1 = true;

  const str2 = "racecar";
  //const expected2 = true;

  const str3 = "Dud";
  //const expected3 = false;

  const str4 = "oho!";
  //const expected4 = false;

  /* Determines if the given str is a palindrome (same forwards and backwards).
   * - Time: O(?).
   * - Space: O(?).
   * @param {string} str
   * @returns {boolean} Whether the given str is a palindrome or not.
   */
function isPalindrome(str) 
{
    /*
  Pseudo Code
  Create a function that takes in a string
  Create a var that takes and returns a string
  Create a Loop ,then loop through the string backwards
  Add the string into the empty var
  If the newstring is equal to the given string; return true
  Anything else ; return false
  */
    var retVal = ''
    for (var i = str.length-1; i >= 0;i--)
    {
        retVal += str[i]
    }
    if (retVal == str) return true;
    else return false;
}
console.log(isPalindrome(str1))
console.log(isPalindrome(str2))
console.log(isPalindrome(str3))
console.log(isPalindrome(str4))
//   **

/* 
  Longest Palindrome
  For this challenge, we will look not only at the entire string provided, but also at the substrings within it. Return the longest palindromic substring. 
  Strings longer or shorter than complete words are OK.
  All the substrings of "abc" are:
  a, ab, abc, b, bc, c
*/

const two_str1 = "what up, daddy-o";
const two_expected1 = "dad";

const two_str2 = "uh, not much";
const two_expected2 = "u";

const two_str3 = "Yikes! my favorite racecar erupted!";
const two_expected3 = "e racecar e";

const two_str4 = "a1001x20002y5677765z";
const two_expected4 = "5677765";

const two_str5 = "a1001x20002y567765z";
const two_expected5 = "567765";

/**
 * Finds the longest palindromic substring in the given string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The longest palindromic substring from the given string.
 */

function longestPalindromicSubstring(str)
{
    /**
     * have a variable to hold the longest palindrome
     * have a start and a runner to create the substring
     * use a loop to iterate through the string 
     * have a nested loop that runs from the first loop to the end
     * get a substring based off of the loop indexes
     * store the longest palindrome in a variable
     * return longest palindrome 
     */

    var retVal = ''
    for(var wordStart = 0; wordStart < str.length; wordStart++)
    {
        for (var wordEnd = wordStart; wordEnd<= str.length; wordEnd++)
        {
            newStr = str.substring(wordStart,wordEnd)
            if(newStr.length > retVal.length &&isPalindrome(newStr)) retVal = newStr
        }
    }
    return retVal
}
console.log("======longestPalindromicSubstring=====")
console.log(longestPalindromicSubstring(two_str1))
console.log(longestPalindromicSubstring(two_str2))
console.log(longestPalindromicSubstring(two_str3))
console.log(longestPalindromicSubstring(two_str4))
console.log(longestPalindromicSubstring(two_str5))

