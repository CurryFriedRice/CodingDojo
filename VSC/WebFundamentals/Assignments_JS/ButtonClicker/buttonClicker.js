//This is here just to keep track of what buttons are clicked
var btnLike = [false, false];

function toggle(element)
{
    console.log("toggle!");
    element.innerText = element.innerText == "Log In" ? "Log Out" : "Log In";
}

function increase(element, btnID = -1)
{
    
    if(btnID > btnLike.length || btnID < 0) 
    {
        console.error("Button Reference is a bit broken...." + btnID);
        element.innerText = (parseInt(element.innerText)+1) + " Likes";
        alert("ninja was liked");
    }
    else if(!btnLike[btnID]){
        element.innerText = (parseInt(element.innerText)+1) + " Likes";
        alert("ninja was liked");
        btnLike[btnID] = true;
    }
    else{
        element.innerText = (parseInt(element.innerText)-1) + " Likes";
        alert("ninja was un-liked");
        btnLike[btnID] = false;
    }
    console.log(btnLike);
}



function hide(element)
{
    console.log("HIDE!");
    element.remove();
}