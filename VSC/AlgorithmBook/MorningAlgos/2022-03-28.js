/*
    Input: arr, callback
    Output: arr (with elements removed)
    Remove every element in the array, starting from idx 0,
    until the callback function returns true when passed the
    iterated element.
    Return an empty array if the callback never returns true
*/
//                     v
const arr1 = [1, 4, 3, 6, 9, 3];
const callback1 = (elem) => {
    return elem > 5;
};
const expected1 = [6, 9, 3];

const arr2 = [1, 4, 3, 6, 9, 3];
const callback2 = (elem) => {
    return elem > 2;
};
const expected2 = [4, 3, 6, 9, 3];

const arr3 = [1, 4, 3, 6, 9, 3];
const callback3 = (elem) => false;
const expected3 = [];




function dropIt2(arr, callback) 
{
    for(let i = 0; i <= arr.length; i++) //Ityerate through the entire array
        if(callback(arr[i]))    //if we match the callback function then return at i
            return arr.slice(i) //
    return []   //otherwise return empty
}

function dropIt3(arr, callback) 
{
    for(let i = 0; i <= arr.length; i++){   //Iterate through the array
        if(callback(arr[0]))    //If the 0th elemen matches then return the array
        return arr              //
        else customShift(arr)   //Otherwise shift the array
    }
    return []   
}

const customShift = (arr) => {  //It does what shift would do
    for(let i = 0; i < arr.length-1; i++)
        [arr[i], arr[i+1]] = [arr[i+1],arr[i]]
    arr.pop()
    return arr;
}


console.log(dropIt3(arr1, callback1));
console.log(dropIt3(arr2, callback2));
console.log(dropIt3(arr3, callback3));