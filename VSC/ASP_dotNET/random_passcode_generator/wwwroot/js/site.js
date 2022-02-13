// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

let PassCount;

function updatePasscode()
{
    fetch("home/generate")
    .then(data => data.json())
    .then(json => {
        console.log(json);
        document.querySelector("#passcode").innerText= json['code'];

    })

}

function updateCount()
{
    console.log("Hello?");
    if (PassCount == undefined)
        PassCount = 0;
    PassCount ++;
    document.querySelector("#numberOfCodes").innerText = `(passcode #${PassCount})`;
}

document.querySelector("#generate").addEventListener("click",updatePasscode);
document.querySelector("#generate").addEventListener("click",updateCount);