/* 
  Given a string that may have extra spaces at the start and the end,
  return a new string that has the extra spaces at the start and the end trimmed (removed)
  do not remove any other spaces.
*/

const str1 = "   hello world     ";
const expected1 = "hello world";

const str2 = "        ";
const expected2 = "";

const str3 = "   hello world earth     ";
const expected3 = "hello world earth";

/**
 * Trims any leading or trailing white space from the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The given string with any leading or trailing white space
 *    stripped.
 */
function trim(str) 
{/**
    Create a function taht takes in a string
    create a start and end 
    work from the start and work inward until you reach a non space character
    record the index 
    find a way to  create the normalized value
  */

    let start = 0;
    let end = str.length-1;

    for (start; start <str.length; start++){
        if (str[start] != " ")
            break;
        else if (start == end) return ""
    }
    
    for (end; end > 0; end--)
    {
        if (str[end] != " ")
            break;
    }

    return customSubStr(str, start, end)
}


function customSubStr(str, start,end)
{
    retval = ''
    for(start; start<=end; start++)
        retval += str[start]
    return retval
}


console.log(trim(str1))
console.log(trim(str2))
console.log(trim(str3))

// ************************************************************************

/* 
  An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
  typically using all the original letters exactly once.
  Is there a quick way to determine if they aren't an anagram before spending more time?
  Given two strings
  return whether or not they are anagrams
*/

const two_strA1 = "yes3";
const two_strB1 = "3eys";
const two_expected1 = true;

const two_strA2 = "yes";
const two_strB2 = "eYs";
const two_expected2 = true;

const two_strA3 = "no";
const two_strB3 = "noo";
const two_expected3 = false;

const two_strA4 = "silent";
const two_strB4 = "listen";
const two_expected4 = true;

const two_strA5 = "not";
const two_strB5 = "noo";
const two_expected5 = false;

/**
 * Determines whether s1 and s2 are anagrams of each other.
 * Anagrams have all the same letters but in different orders.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean} Whether s1 and s2 are anagrams.
 */
function isAnagram(s1, s2) 
{
    /**
     * create a funtion taht takes in two strings
     * check to see if the strings are equal in length
     *  if they are not equal then return false
     * create two dictionaries for S1 and S2
     * iterate through both strings to collect the amount of letters 
     * adding or incrementing the key in the dictionary
     * compare them and return true/folse
     */

    if (s1.length != s2.length)
        return false

    // let s1Dict = getHashMap(s1.toLowerCase());
    // let s2Dict = getHashMap(s2.toLowerCase());
    let sComp = getDuoHashMap(s1.toLowerCase(), s2.toLowerCase())
    //console.log(sComp)
    // for ([key, value] of Object.entries(s1Dict))
    // {
    //     if(value != s2Dict[key])
    //         return false
    // }

    // for (key in Object.keys(s1Dict))
    //     {
    //         if(s1Dict[key] != s2Dict[key])
    //             return false
    //     }
    for (Key in Object.keys[sComp['s1']])
    {
        if(sComp['s1'][key] != sComp['s2'][key])
        return false
    }

    return true
}

function getHashMap(str)
{
    map = {}
    for(var i =0; i<str.length; i++)
    {
        if (map.hasOwnProperty(str[i]))
            map[str[i]] = map[str[i]] + 1
        else map[str[i]] = 1
    }   
    return map
}

function getDuoHashMap(str1, str2)
{
    map1 = {}
    map2 = {}
    for(var i =0; i<str1.length; i++)
    {
        if (map1.hasOwnProperty(str1[i]))
            map1[str1[i]] = map[str1[i]] + 1
        else map1[str1[i]] = 1

        if (map2.hasOwnProperty(str2[i]))
        map2[str2[i]] = map[str2[i]] + 1
        else map2[str2[i]] = 1
    }   
    return {"s1":map1, "s2": map2}
}


console.log(isAnagram(two_strA1, two_strB1))
console.log(isAnagram(two_strA2, two_strB2))
console.log(isAnagram(two_strA3, two_strB3))
console.log(isAnagram(two_strA4, two_strB4))