
function randomizeName(element)
{
    //Fetch a random first name and last name
    var fNameArr = ["Jazlynn", "Cael", "Cael", "Aniya", "Aniya", "Mauricio", "Declan", "Declan", "Reina", "Christine", "Colt"];
    var lNameArr =["Beard", "Beard", "Collins", "Boone", "Jacobs", "Olsen", "Hughes", "Horn", "Strong", "Barajas", "Lane", "Thornton"];
    var newName = fNameArr[Math.floor(Math.random()*fNameArr.length)] + " " +  lNameArr[Math.floor(Math.random()*lNameArr.length)] ;
    
    console.log("Replacing '"+ element.querySelector(".cardContent li h1").innerText + "' with '"+ newName + "'");
    element.querySelector(".cardContent li h1").innerText = newName;
}

//This is the accept request
function addToNetwork(element)
{
    //console.log("NETWORK NETWORK NETWORK");
    //from the top we update active requests and network count
    updateActiveRequests();
    updateNetworkCount();
    //console.log(element.querySelector('.otherUser .cardID').innerHTML);
    //then after adding we update the list of connections
    updateNetworkList(element.querySelector('.otherUser .cardID').innerHTML);
    hide(element);
}


function declineRequest(element)
{
    //Well we remove the request 
    //and then hide elements
    //console.log("nah you don't deserve to be on my list")
    updateActiveRequests();
    hide(element);
}

function hide(element)
{
    //generic remove when a button is clicked
    console.log("HIDE!");
    element.remove();
}

function updateActiveRequests()
{
    //fetch the 'available requests' then reduces it by one if it's 0 then remove the connectiopn request
    var elementCount = parseInt(document.getElementById("connectionRequest").querySelector("div h2").innerText)
    elementCount--;
    if(elementCount > 0) document.getElementById("connectionRequest").querySelector("div h2").innerText = elementCount;
    else hide(document.getElementById("connectionRequest"))
    console.log(elementCount);
}

//Create a new list item and append it to the end of the user list
function updateNetworkList(element)
{
    var addedInner = "<li class='cardItem'>" 
        addedInner += "<div class='otherUser'>"
        addedInner += "<div class='cardID'>"
        addedInner += element
        addedInner += "</div>"
        addedInner += '</div>'
        addedInner += '</li>'
    console.log(addedInner);
        document.getElementById("network").innerHTML +=  addedInner;
}

//increases the amount of people in the network
function updateNetworkCount()
{
    var elementCount = parseInt(document.getElementById("userNetwork").innerText)
    elementCount++;
    document.getElementById("userNetwork").innerText = elementCount;
    console.log(elementCount);
}