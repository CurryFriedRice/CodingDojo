
function buttonClick(){
    let username = document.getElementById("myName").value
    console.log("Hello")
    fetch("https://api.github.com/users/"+username)
    .then(response => response.json() )
    .then(coderData => display(coderData))//document.getElementById("display").innerText= (coderData.login) )
    .catch(err => console.log(err) )
}

function display(data)
{
    console.log(data)
    let text = "<table>" 
    for (value in data)
    {   text += "<tr>"
        text += "<td>"+value+ "</td> : <td>" + data[value]+"</td>\n"
        text += "</tr>"
    }
    text += "</table>"
    document.getElementById("display").innerHTML= text
    return data
}