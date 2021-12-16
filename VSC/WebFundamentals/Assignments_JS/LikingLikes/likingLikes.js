
//TODO: Make a way to ensure that a user can only like once

function increaseLikes(element)
{
    //So this passes in a HTML element 
    //Through that we modifiy the "span" tag of that element
    //If i wanted to be more specific I would have it target a class or ID
    //console.log(element);
    //console.log(element.querySelector("span").innerText);
    var likesPlusOne = parseInt(element.querySelector("span").innerText) + 1;
    element.querySelector("span").innerText = likesPlusOne;
}

