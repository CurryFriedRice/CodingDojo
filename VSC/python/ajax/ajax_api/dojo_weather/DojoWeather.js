let city = "seattle"
function setTemp(value)
{

    
    var temps = document.getElementsByClassName("temperatureField");
    //console.log(temps);
    if(value=="cel")
    {
        for(var i = 0; i < temps.length; i++)
        {
            temps[i].querySelectorAll('h2')[0].innerText = Math.round(toCel( parseInt(temps[i].querySelectorAll('h2')[0].innerText)))+"°";
            temps[i].querySelectorAll('h2')[1].innerText = Math.round(toCel(parseInt(temps[i].querySelectorAll('h2')[1].innerText)))+"°";
        }
    }else
    {
        for(var i = 0; i < temps.length; i++)
        {
            temps[i].querySelectorAll('h2')[0].innerText = Math.round(toFahren(parseInt(temps[i].querySelectorAll('h2')[0].innerText)))+"°";
            temps[i].querySelectorAll('h2')[1].innerText = Math.round(toFahren(parseInt(temps[i].querySelectorAll('h2')[1].innerText)))+"°";
        }
    }

    //let username = document.getElementById("myName").value
    let data = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=eb13edaeb2f4b2c211f8f30d653c837a`)
    .then(response => response.json() )
    .then(temperatureData => display(temperatureData, value))//document.getElementById("display").innerText= (coderData.login) )
    .catch(err => console.log(err) )
}

function display(data,unit="far")
{   
    console.log(data['main']['temp_max'])
    let max = data['main']['temp_max']
    let min = data['main']['temp_min']
    if(unit == "far") 
    {
        max = max * 1.8 - 459.67
        min = min * 1.8 - 459.67
    }else if(unit == "cel")
    {
        max = max - 273.15
        min = min - 273.15
    }
    let returnVal = `
            <h1>${data["name"]}</h1>
            <div class="card"  <h1 class="cardHeader">Saturday</h1>
                <img src="assets/some_sun.png" alt="Some Clouds" class="round pictureMedium">
                <p>Some Sun</p>
                <div class="cardFooter temperatureField">
                        <h2>${max}°</h2>
                        <h2>${min}°</h2>
                </div>
            </div>`
    document.querySelector("#Output").innerHTML= returnVal
    let rawData = ``
    for(const key in data['main'])
        rawData += key + " " + data["main"][key] + "\n"
    document.getElementById("Output2").innerText = rawData
        
}

function dismiss(target)
{
    target.remove();
}

function toCel(fahren)
{
    return (fahren - 32) / 1.8
}

function toFahren(cel)
{
    return (cel * 1.8)+ 32;
}

function changeRegion(newLoc)
{
    console.log("chanigng regions" + newLoc)
    city = newLoc
    setTemp("far")
}


