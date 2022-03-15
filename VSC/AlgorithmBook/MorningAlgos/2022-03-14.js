// given two sorted arrays that may have duplicate values, merge them and remove any duplicates
//          a
var arr1 = [1, 3, 3, 5, 8, 10,];
//          b
var arr2 = [1, 3, 3, 5, 8, 10, 10, 10];

var arrA = [1, 3, 4, 5];
var arrB = [1, 3, 3, 5, 8, 10,];

function mergeDedupe(arr1, arr2) 
{ 
    let a = 0;
    let b = 0;
    let retArr = []
    while (a < arr1.length && b < arr2.length)
    {
        if(retArr.includes(arr1[a])) a = a+1;
        else if(retArr.includes(arr2[b])) b = b+1;

        else if(arr1[a] <= arr2[b])
        {
            retArr.push(arr1[a])
            a = a+1;
        }
        else if (arr1[a]>arr2[b])
        {
            retArr.push(arr2[b])
            b = b+1;
        }
    }

    while(a < arr1.length)
    {
        if(!retArr.includes(arr1[a])) retArr.push(arr1[a])
        a++;
    }
    
    while(b < arr2.length)
    {
        if(!retArr.includes(arr2[b])) retArr.push(arr2[b])
        b++;
    }
    console.log(arr1.length,a,arr2.length,b)
    console.log(retArr);
    return retArr
}

// try out some other tests
mergeDedupe([1, 3, 3, 5, 8, 10], [1, 3, 4, 5]) // [ 1, 3, 4, 5, 8, 10 ]
mergeDedupe([2,3,3,5,8,10,12], [1,3,4,6]) // [1, 2, 3, 4, 5, 6, 8, 10, 12]

// //   a -> 
//     [1, 3, 3, 5, 8, 10]
// //   b
//     [1, 3, 4, 5]