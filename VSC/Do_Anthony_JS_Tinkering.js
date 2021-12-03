var heightReq = 52

function checkHeight(height)
{
    if(height < heightReq) console.log("Sorry kiddo. Maybe next Year");
    else console.log("Get on that ride, kiddo!");
}

function checkHeightOneLine(height)
{
    height > heightReq ? console.log("Get on that ride, kiddo!") : console.log("Sorry kiddo. Maybe next Year");
}
