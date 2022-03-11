// Step 1 - If the element is the first element, assume that it is already sorted. Return 1.
// Step2 - Pick the next element, and store it separately in a key.
// Step3 - Now, compare the key with all elements in the sorted array.
// Step 4 - If the element in the sorted array is smaller than the current element, then move to the next element. Else, shift greater elements in the array towards the right.
// Step 5 - Insert the value.
// Step 6 - Repeat until the array is sorted.


//Swaps the values in the array
function insertionSort(arr) 
{ 
    for (let i = 1; i < arr.length; i++)
    {
        for(let j = i; j>0; j--)
        {
            let temp = arr[j]
            if(temp < arr[j-1]){
                [arr[j],arr[j-1]] = [arr[j-1],arr[j]];
            }else
            {
                break;
            }
        }
    }
    return arr;
}


//
function insertionSort2(arr) {
   for(let i=1;i<arr.length;i++)
   {
        let temp=arr[i]
        let j = i - 1;
        while(j >=0  && temp <= arr[j])
        {
            arr[j+1] = arr[j]
            j--;
        }
        arr[j+1] = temp
   }
   console.log(arr);
}

// let arr=[4,3,7,1,5,8,6,0,9,2]
// console.log(insertionSort(arr));

insertionSort([3, 5, 2, 1, 0,3,3])
insertionSort([3, 0])
insertionSort([0])
insertionSort([])
insertionSort([1, 2, 3, 4, 5])
insertionSort([5, 4, 3, 2, 1])
insertionSort([5, 4, 0, 2, 1])

// let i, j, temp;  
// for (i = 1; i < arr.length; i++) {  
//     temp = arr[i];  
//     j = i - 1;  

//     while(j>=0 && temp <= arr[j])  /* Move the elements greater than temp to one position ahead from their current position*/  
//     {    
//         arr[j+1] = arr[j];     
//         j = j-1;    
//     }    
//     arr[j+1] = temp;    
// }  
// console.log(arr)