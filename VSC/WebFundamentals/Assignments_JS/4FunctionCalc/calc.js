//So we get the display and then we also 
var display = document.getElementById("display");
var operator;


function press(input) {
    //if we have not set an operator yet
    var idTag = ''
    if (display.querySelector("#operand").innerText.length == 0) idTag = '#lha'
    else idTag = '#rha'

    display.querySelector(idTag).innerText = (display.querySelector(idTag).innerText == '0')
        ? input
        : display.querySelector(idTag).innerText + input;
}

function setOP(op) {
    //So if we don't have a right hand 
    if (display.querySelector("#rha").innerText.length != 0) {
        calculate();
    }

    if (display.querySelector("#operand").innerText.length == 0
        || display.querySelector("#rha").innerText.length == 0)
        display.querySelector("#operand").innerText = op;
}

function calculate() {
    var x = parseFloat(display.querySelector('#lha').innerText);
    var y = parseFloat(display.querySelector('#rha').innerText);
    var operand = display.querySelector("#operand").innerText;
    var total = 0;
    switch (operand) {
        case '*':
            total = x * y;
            break;
        case '/':
            total = x / y;
            break;
        case '+':
            total = x+y;
            break;
        case '-':
            total = x-y;
            break;
        defualt:
            console.log("ERROR");    
            break;
    }
    
    display.querySelector("#lha").innerText =   total.toFixed(5); 
    display.querySelector("#operand").innerText = '';
    display.querySelector("#rha").innerText = '';

}

function clr() {
    display.innerHTML = "<span id='lha'>0</span><span id='operand'></span><span id='rha'></span>";
}

clr();