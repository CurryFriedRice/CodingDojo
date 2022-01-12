/* 
  Given in an alumni interview in 2021.
  String Encode
  You are given a string that may contain sequences of consecutive characters.
  Create a function to shorten a string by including the character,
  then the number of times it appears. 
  
  
  If final result is not shorter (such as "bb" => "b2" ),
  return the original string.

    - create a function that takes in a string and returns a string
    - create a return string
    - create a count variable that starts at 1
    - EDGE CASE: if string has no length
    - loop through the given string
        - compare the current string index to the index - 1 
        - if true: increase count
            - if character not already in return string then add to return string
        - if false: 
            - add the total count for the variable to return string
            - reset the count variable back to 1
    - return the return variable string...

  */

    const str1 = "aaaabbcddd";
    //const expected1 = "a4b2c1d3";
    
    const str2 = "";
    //const expected2 = "";
    
    const str3 = "a";
    //const expected3 = "a";
    
    const str4 = "bbcc";
    // expected4 = "bbcc";
    
    /**
     * Encodes the given string such that duplicate characters appear once followed
     * by a number representing how many times the char occurs only if the
     * character occurs more than two time.
     * - Time: O(?).
     * - Space: O(?).
     * @param {string} str The string to encode.
     * @returns {string} The given string encoded.
     */
    function encodeStr(str) 
    {
        var count = 0
        var curLetter= str[0]
        var retVal = ''
        for (var i = 0; i < str.length; i++)
        {
            if (curLetter != str[i]) {
                if(count == 1) retVal += curLetter
                else if (count> 1) retVal += curLetter + count
                curLetter = str[i]
                count = 0
            }
            count++
        }
        
        if(count == 1) retVal += curLetter
        else if (count> 1) retVal += curLetter + count
        curLetter = str[i]
        
        return retVal
    }

console.log(encodeStr(str1))
console.log(encodeStr(str2))
console.log(encodeStr(str3))
console.log(encodeStr(str4))
    //   **************************************************************************************

/* 
  String Decode  
*/
console.log("==============")
const str5 = "ae3b2c1d3";
//const expected1 = "aaabbcddd";

const str6 = "a3b2c12d10";
//const expected2 = "aaabbccccccccccccdddddddddd";

/**
 * Decodes the given string by duplicating each character by the following int
 * amount if there is an int after the character.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str An encoded string with characters that may have an int
 *    after indicating how many times the character occurs.
 * @returns {string} The given str decoded / expanded.
 */
function decodeStr(str) 
{
    //console.log(str)
    var letRegEx = new RegExp(`[A-Za-z][0-9]*`)
    var retVal = ''

    
    while (str.length > 0)
    {
        var val = letRegEx.exec(str);
        if(val[0].length == 1) {
            console.log(val[0])
            retVal += val[0]
        }
        else{
            var count = parseInt(val[0].slice(1,val[0].length))
            for(var i= 0; i < count; i++)
            {
                retVal += val[0][0]
            }
        }
        str = str.replace(val[0], "")
    }
    return retVal

}
console.log(decodeStr(str5))