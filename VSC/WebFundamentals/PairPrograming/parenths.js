/* 
Parens Valid
Given an str that has parenthesis in it
return whether the parenthesis are valid
*/

const str1 = "Y(3(p)p(3)r)s";
const expected1 = true;

const str2 = "N(0(p)3";
const expected2 = false;
// Explanation: not every parenthesis is closed.

const str3 = "N(0)t ) 0(k";
const expected3 = false;
// Explanation: because the second ")" is premature: there is nothing open for it to close.

const str4 = "a(b))(c";
const expected4 = false;

const str5 = "()()()()()"

// Explanation: same number of opens and closes but the 2nd closing closes nothing.

/**
 * Determines whether the parenthesis in the given string are valid.
 * Each opening parenthesis must have exactly one closing parenthesis.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {boolean} Whether the parenthesis are valid.
 */
function parensValid(str) {
    // Your code here
    /* So the things we need to keep track of are opening and closing statements
        Create a function that  takes in a string
        create a way to keep track of a the opening and closing of parenths
        create an empty array called stack
        iterate through the string and add to the stack and pop when we reach a closing statement 
        if we attempt to pop while empty then we've tried to close a statement before opening one
            e.g. return false
        if we reach the end of the string with a non empty stack then the statement is invalid
            e.g. return false
        if we reach the end of the string with an empty stack statement is valid
            e.g. return true
    */

    var stack = []
    for (let i = 0; i<str.length; i++)
    {
        if (str[i] == '(')
            stack.push("open")
        else if (str[i] == ')'){
            var value = stack.pop()
            if (value == undefined)
            return false;
        }
    }

    if(stack.length > 0) return false;
    return true;
}

console.log(parensValid(str1))
console.log(parensValid(str2))
console.log(parensValid(str3))
console.log(parensValid(str4))
console.log(parensValid(str5))

/* 
Braces Valid
Given a string sequence of parentheses, braces and brackets, determine whether it is valid. 
*/

const two_str3 = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!";
//const expected3 = true;

const two_str4 = "D(i{a}l[ t]o)n{e";
//const expected4 = false;

const two_str5 = "A(1) [(] {) 0}k";
//const expected5 = false;

const two_str6 = "<{()[]}>"
/**
 * Determines whether the string's braces, brackets, and parenthesis are valid
 * based on the order and amount of opening and closing pairs.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {boolean} Whether the given strings braces are valid.
 */
function bracesValid(str) {
    // Your code here
    /**
     * create a function that takes in a string
     * find a way to keep track of the most recent open parenths type 
     * make sure it is closed by the same parenths before another closing parenths

        iterate through the string and add to the according stack and pop when we
        reach a closing statement 
        When we reach an opening statement update the most recent parenths

        if we attempt to pop while empty then we've tried to close a statement before opening one
            e.g. return false
        if we attempt to close a mismatched statement then we 
            e.g. return false
        if we reach the end of the string with a non empty stack then the statement is invalid
            e.g. return false
        if we reach the end of the string with an empty stack statement is valid
            e.g. return true
    */
    var stack = []
    var opening ="({[<"
    var key = {'}' : '{',
                ')': '(' ,
                ']': '[',
                '>': '<',
                }
                
    for (let i = 0; i <str.length; i++)
    {
        let value = str[i];
        if(opening.includes(value))
            stack.push(value)
        else if(key.hasOwnProperty(value))
        {
            let poppedItem = stack.pop()   
            if (poppedItem != key[value]) return false
        }
    }

    if(stack.length > 0) return false;
    return true;
}
console.log("************************************************")
console.log(bracesValid(two_str3))
console.log(bracesValid(two_str4))
console.log(bracesValid(two_str5))
console.log(bracesValid(two_str6))

/*****************************************************************************/