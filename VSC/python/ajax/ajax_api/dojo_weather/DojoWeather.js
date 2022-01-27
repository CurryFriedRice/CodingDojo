

function setTemp(value)
{
    var temps = document.getElementsByClassName("temperatureField");
    //console.log(temps);
    if(value=="cel")
    {
        for(var i = 0; i < temps.length; i++)
        {
            temps[i].querySelectorAll('h2')[0].innerText = Math.round(toCel(parseInt(temps[i].querySelectorAll('h2')[0].innerText)))+"°";
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

function changeRegion()
{
    alert("Loading Weather Report....")
}
