//simple swap positions
const swap = (items, left, right) =>
{
    let temp = items[left];
    items[left] = items[right];
    items[right] = temp;
}

//Looked this up because John Brought it up
const partition = (items, left, right) =>
{
    let pivot   = items[Math.floor((left+right)/2)],        //Keeps the item array and gets relative middle value
        iLeft   = left,                                     //sets local values for left and right
        iRight  = right;
    while (iLeft <= iRight)                                 //As long as left is less than right we're good to loop
    {
        while(items[iLeft] < pivot)                         //Find a VALUE that is bigger than our pivot value
        {
            iLeft++;
        }
        while(items[iRight] > pivot)                        //Find a VALUE that is smaller than our pivot Value
        {
            iRight--;
        }
        if(iLeft<= iRight)                                  //If left is less than right INDEXes swap them then 
        {                                                   //Then move on to the next indexes left up, right down
            swap(items, iLeft, iRight);
            iLeft++;
            iRight--;
        }
    }
    return iLeft;
}

const quickSort = (items, left=0, right=items.length-1) =>
{
    let index;
    if(items.length > 1) 
    {
        index = partition(items, left, right);              //index returned from partition and left ALL left is smaller ALL right is larger
        if (left < index - 1) {                             //Sort the left side
            quickSort(items, left, index - 1);
        }
        if (index < right) {                                //Sorts the right side
            quickSort(items, index, right);
        }
    }
    return items;
}

let array= [5,4,2,6,1,8,3,9,7,0];
console.log(quickSort(array));
// console.log(sorted);