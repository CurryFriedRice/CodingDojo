/*          __                        __         
           /\ \                      /\ \        
 _ __    __\ \ \___      __      ____\ \ \___    
/\`'__\/'__`\ \  _ `\  /'__`\   /',__\\ \  _ `\  
\ \ \//\  __/\ \ \ \ \/\ \L\.\_/\__, `\\ \ \ \ \ 
 \ \_\\ \____\\ \_\ \_\ \__/.\_\/\____/ \ \_\ \_\
  \/_/ \/____/ \/_/\/_/\/__/\/_/\/___/   \/_/\/_/

    Given to a Coding Dojo alumni by Riot Games.
    Rehash an incorrectly hashed string by combining letter count occurrences
    and alphabetizing them.
*/
//                   v
const str1 = "b70a164c32a20c10";
const expected1 = "a184b70c42";

// step 1:
frequencyMap = { }
// step 2:
// extract [keys? values? something?]
// if it's an array -> sort
// ["b70", "a84", "c42"]

// step 3:
// return a string

// hints:
// parseInt(str)
// isNaN(x)
// myObj.hasOwnProperty("key")

function rehash(str) {
    let letterIndex = 0;        //Our letter's starting index
    let currentLetter = str[0]; //setup our starting key and for every letter occurance afterwards
    let i =1;                   //Start at 1 since we covered the basecase here
    //Go through the length of the string
    while(i <= str.length){
        if(isNaN(parseInt(str[i]))){    //If we find an index that is not a number add it io the hash table
            if(frequencyMap.hasOwnProperty(currentLetter))  //If we have the property update our own
                frequencyMap[currentLetter] = frequencyMap[currentLetter]+ parseInt(str.slice(letterIndex+1, i))
            else                                            //Otherwise make the key and set it
                frequencyMap[currentLetter] = parseInt(str.slice(letterIndex+1, i))
            currentLetter = str[i]; //Change the letter we're working on 
            letterIndex = i;        //Set our new letter starting index to i
        }
        i++//Continue iterating through str
    } 
    //Run it one more time because we never ran it for the last one
    // if(frequencyMap.hasOwnProperty(currentLetter)) {frequencyMap[currentLetter] = frequencyMap[currentLetter]+ parseInt(str.slice(letterIndex+1, i))}
    // else{frequencyMap[currentLetter] = parseInt(str.slice(letterIndex+1, i))}

    return stringifyHashMap(frequencyMap)
}
//Converts the hashmap to a string
function stringifyHashMap (obj) {
    let arr = []                //Make an array
    for(const ele in obj){      //Iterate through object keys
        arr.push(`${ele}${obj[ele]}`)   //Then push a string that is letter-number
    }
    console.log(arr.sort().join(""))    //sort and join the array
    return (arr.sort().join(""))        //return the array
}

// rehash(str1);
console.log(rehash(str1) === expected1, "<-- should be \"true\"");