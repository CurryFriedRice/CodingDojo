// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.



function updateText(data)
{
    document.getElementById("happiness").innerText = data['happiness'];
    document.getElementById("fullness").innerText = data['fullness'];
    document.getElementById("meals").innerText = data['meals'];
    document.getElementById("energy").innerText = data['energy'];
    let img = '';
    switch(data["mood"])//So ideally this would be a better represntation....
    {
        default:
        case 0: 
            img="happy"; 
            break;
        case 1: 
            img="sad";
            break;
        case 2:
            img="tired";
            break;
        case 3:
            img="dislike";
            break;
        case 4: 
            img = "win";
            break;
        case 5:
            img = "lose";
            break;
    }
    console.log( `<img src="~/img/${img}.png">`)
    console.log(window.location.pathname)
    document.getElementById("emotionPic").innerHTML = `<img src="/img/${img}.png">`;

}

function feed()
{
    fetch("home/feed")
    .then(res => res.json())
    .then(data =>{
        console.log(data);
        if(data['err'])
        {
            document.getElementById("message").innerText = data['err'];
        }
        else{
            document.getElementById("message").innerText = `Ate a meal and gained ${data['amount']} fullness and 1 meal`;

            updateText(data['pet']);
        }
        updateState();
    })
}

function play()
{
    fetch("home/play")
    .then(res => res.json())
    .then(data =>{
        console.log("Play Was Called");
        console.log(data)
        document.getElementById("message").innerText = `Played and gained ${data['amount']} happiness and lost 5 energy`;
        updateText(data['pet']);
        updateState();
    })
}


function work()
{
    fetch("home/work")
    .then(res => res.json())
    .then(data =>{
        console.log("Work Was Called");
        document.getElementById("message").innerText = `Worked and gained 3 meals and lost 5 energy`;
        updateText(data['pet']);
        updateState();
    })

}


function sleep()
{
    fetch("home/sleep")
    .then(res => res.json())
    .then(data =>{
        console.log("Sleep Was Called");
        document.getElementById("message").innerText = `Slept and gained 15 energy and lost 5 Fullness and 5 Happiness`;
        updateText(data['pet']);
        updateState();
    })
}

function updateState()
{
    fetch("home/checkState")
    .then(res => res.json())
    .then(data => {
        if(data['win'])
        {
            document.getElementById("emotionPic").innerHTML = `<img src="/img/win.png">`;
            document.getElementById("message").innerText = `YOU WIN`;
            document.getElementById("buttonRow").innerhtml = "<button onclick='home/restart' class='btn btn-primary'>Restart?</button>"
        }
        else if (data['lose'])
        {
            document.getElementById("emotionPic").innerHTML = `<img src="/img/lose.png">`;
            document.getElementById("message").innerText = `YOU LOSE`;
            document.getElementById("buttonRow").innerhtml = "<button onclick='home/restart' class='btn btn-primary'>Restart?</button>"
        }
        console.log(data);
    })
}

document.getElementById("feed").addEventListener("click", feed);
document.getElementById("play").addEventListener("click", play);
document.getElementById("work").addEventListener("click", work);
document.getElementById("sleep").addEventListener("click", sleep);