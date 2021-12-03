var childHeight = 54
var heightReq = 52

function displayIfChildIsAbleToRideTheRollerCoaster(height)
{
    if(height < heightReq) console.log("Sorry kiddo. Maybe next Year");
    else console.log("Get on that ride, kiddo!");
}

//I wrote this one first
function displayIfChildIsAbleToRideTheRollerCoasterOneLine(height)
{
    height > heightReq ? console.log("Get on that ride, kiddo!") : console.log("Sorry kiddo. Maybe next Year");
}
