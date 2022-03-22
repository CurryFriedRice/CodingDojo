// findObjectsFilter(searchFor, itemsArr)

// given a 'search for' object with primitive values and a list of objects
// return a new list of objects containing the same key value pairs as the search for

// given searchFor and items
const items = [
    { Hello: "Bob", lastName: "Robert", age: 31 },
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "White", age: 31 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
];

const searchFor1 = {
    firstName: "Bob",
    age: 31
};
// return a new list of objects containing the same key pair values
const output1 = [
    { firstName: "Bob", lastName: "Robert", age: 31 },
    { firstName: "Bob", lastName: "White", age: 31 },
    //   { firstName: "Bob", lastName: "Smith", age: 27 },
];

const searchFor2 = {
    lastName: "Smith",
};
const output2 = [
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
];

function findObjectsFilter(searchObj, items){
    let matchingObj = [] //Create a new list to add to
    for(const item of items)    //Loop through the ITEMS of the list
    {
        // console.log(item);
        let matching = true    //Just have a simple matching variable
        for(const key in searchObj) //Look through all the keys
        {
            if(!item.hasOwnProperty(key) && item[key] !== searchObj[key]){ //If the item key doesn't match then we don't match
                matching = false; 
                break;
            } 
        }
        if(matching===true) //Well if it's still matching push the item
        {
            matchingObj.push(item)
        }
    }
    // console.log(matchingObj);
    return matchingObj
}

const findObjectsFilter3 = (searchObj, items)=>
{
    let keys = Object.keys(searchObj) //Get the keys in the Object
    let filtered =items.filter(item => {    //Filter out the matching ones
        for(const key of keys)
        {
            if(!item.hasOwnProperty(key) || item[key] !== searchObj[key])
            {
                //If the value at the key doesn't match search then it's false
                return false
            }
        }
        return true   //Return if it's matching...
    });
    //Then once we've filtered return the filter
    return filtered;
}

console.log(findObjectsFilter3(searchFor1, items));
console.log(findObjectsFilter3(searchFor2, items));
