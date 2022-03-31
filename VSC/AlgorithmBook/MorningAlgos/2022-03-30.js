/* 
  Interview Question:
  Given a string
  return whether or not it's possible to make a palindrome out of the string's characters
  What is it about a string that makes it possible for it to be a palindrome?
  Determine whether or not it is possible for the string's characters to be
  rearranged into a palindrome.
  */

// racecar

const str1 = "";
const expected1 = false;

const str2 = "a";
const expected2 = true;

const str3 = "ddaa";
const expected3 = true;
// Explanation: "daad" or "adda"

const str4 = "dda";
const expected4 = true;
// Explanation: "dad"

//            V
const str5 = "aadda";
const expected5 = true;
// Explanation: "daaad"


// check length?
// {
  //     a: 3,
  //     d: 2
  // }
  // for in 
  // is Odd flag?
  // check odds/even? length?
  
  
  const str6 = "abc";
  const expected6 = false;

/* 
  For a string to be able to be re-ordered into a palindrome
  It must have an even occurrence of every character
  Unless it is odd length, then it can have 1 character that
  can have an odd number of occurrences.
  Another way to look at it would be, if you cancel out ever char that has a pair,
  it can be a palindrome if you are left with 0 or 1 char remaining:
    - "dad" the "d" cancels with itself to leave "a"
    - "daad" the "d" and "a" cancel with itself to leave nothing
    - "daam" the "a" cancels with itself leaving "dm", more than 1 char remaining, can't be palindrome
*/

function canBecomePalindrome(str) 
{
    const strLen = str.length
    if (strLen === 0) return false;
    let hashTable = {}
    for(const letter of str){
        if (hashTable.hasOwnProperty(letter)) hashTable[letter] += 1; 
        else hashTable[letter] = 1;
    }
    // console.log(hashTable)
    
    const oddEven = {odd:0, even:0}

    for(const key in hashTable){
        if(hashTable[key] % 2 === 0) oddEven.even +=1;
        else oddEven.odd += 1
    }
    // console.log(oddEven)
    if (strLen %2 === 0)
    {
        if(oddEven.odd != 0) return false
        else return true
    }else if (strLen % 2 === 1) 
    {
        if(oddEven.odd > 1) return false;
        else if (oddEven.odd === 1) return true;
        else return false
    }
}

function canBecomePalindrome2(str) 
{
    // console.log("********************")
    if (str.length === 0) return false; //Just if the string is 0 it's not a palindromable by our standards
    else if(str.length === 1) return true;
    const hashTable = {}              //A hash table to hold all the letters
    
    for(const letter of str){       //Go through each letter of the string
        hashTable.hasOwnProperty(letter) ? hashTable[letter] += 1 : hashTable[letter] = 1;   //If the table has a properter of letter increment it
    }
    
    // console.log(hashTable)   //Just a console log for a bit of code and test
    const oddEven = {odd:0, even:0} //Even odd tracker Though we only really need odd
    for(const key in hashTable){    //So we iterate through our hash table and add to even/odd accordingly
        hashTable[key] % 2 === 0 ?  oddEven.even +=1 : oddEven.odd += 1
    }
    
    // console.log(oddEven)     //console log for a bit more code then test
    return str.length %2 === 0 ? oddEven.odd === 0 : oddEven.odd === 1;
}


console.log(canBecomePalindrome2(str1));
console.log(canBecomePalindrome2(str2));
console.log(canBecomePalindrome2(str3));
console.log(canBecomePalindrome2(str4));
console.log(canBecomePalindrome2(str5));
console.log(canBecomePalindrome2(str6));
// canBecomePalindrome(str2);
// canBecomePalindrome(str3);
// canBecomePalindrome(str4);
// canBecomePalindrome(str5);