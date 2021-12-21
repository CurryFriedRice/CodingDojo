var theDojo =
    [
        [1, 0, 1, 1, 1, 0, 4, 0, 8, 0],
        [3, 1, 0, 7, 0, 0, 6, 0, 8, 8],
        [5, 0, 7, 0, 3, 6, 6, 6, 0, 0],
        [2, 3, 0, 9, 0, 0, 6, 0, 8, 0],
        [6, 0, 3, 3, 0, 2, 0, 3, 0, 4],
        [0, 0, 3, 3, 0, 0, 2, 2, 3, 0],
        [0, 0, 0, 0, 5, 0, 1, 2, 0, 6],
        [2, 2, 2, 2, 0, 7, 1, 1, 1, 0],
        [5, 2, 0, 2, 0, 0, 0, 1, 1, 2],
        [9, 2, 2, 2, 0, 7, 0, 1, 1, 0]
    ];
var dojoDiv = document.querySelector("#the-dojo");
var uiDiv = document.querySelector("#the-UI");
var GameOvered = false;


// Creates the rows of buttons for this game
function render(theDojo) {
    var result = "";
    for (var i = 0; i < theDojo.length; i++) {
        for (var j = 0; j < theDojo[i].length; j++) {
            result += `<button class="tatami" onclick="howMany(${i}, ${j}, this)"></button>`;
        }
    }
    return result;
}

// TODO - Make this function tell us how many ninjas are hiding 
//        under the adjacent (all sides and corners) squares.
//        Use i and j as the indexes to check theDojo.
function howMany(i, j, element) {
    if (!GameOvered) {
        console.log({ i, j });
        var totalValue = 0;
        if (parseInt(theDojo[i][j]) == 1) {
            element.innerText = "X"
            gameOver();
        }
        else {
            for (var row = i - 1; row <= i + 1; row++) {
                if (row <= -1 || row > theDojo[i].length - 1) {
                    //console.log(row + " : Row Out of Bounds");
                }
                else {
                    //console.log(row + " : Row in Bounds");    
                    for (var col = j - 1; col <= j + 1; col++) {
                        if (col < 0 || col > theDojo[i, j].length - 1) {
                            //console.log(col + " : Column Out of Bounds");
                        }
                        else if (row == i && col == j) {
                            //console.log("Don't add the tile we're on");
                        }
                        else {
                            //console.log(col + " : Column in Bounds");
                            //console.log("adding: " + parseInt(theDojo[row][col]) + " To the total Value" );
                            totalValue += parseInt(theDojo[row][col])
                        }
                    }
                }

            }
            UpdateScore();
            element.innerText = totalValue;
        }
    } else {
        alert("Click Restart to reset restart Game");
    }
    //alert("TODO - determine how many ninjas are hiding in adjacent squares");
}


// BONUS CHALLENGES
// 1. draw the number onto the button instead of alerting it
// 2. at the start randomly place 10 ninjas into theDojo with at most 1 on each spot
// 3. if you click on a ninja you must restart the game 
//    dojoDiv.innerHTML = `<button onclick="location.reload()">restart</button>`;

function setupBoard() {
    var retBoard =
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ];
    var ninjaCount = 0;
    console.log("Populating Grid: " + ninjaCount)
    while (ninjaCount <= 10) {
        retBoard.forEach(element => element.filter(value => console.log(value == 1)));

        var indexRow = Math.floor(retBoard.length * Math.random());
        var indexCol = Math.floor(retBoard.length * Math.random());
        console.log(indexRow, indexCol);
        retBoard[indexRow][indexCol] = 1;
        ninjaCount++;
        console.log(ninjaCount);
    }

    console.log("Populating Grid: " + ninjaCount)
    return retBoard
}

//Sets the state to gameover and shows the restart button
function gameOver() {
    console.log("GAME OVER MAN! GAME OVER!");
    GameOvered = true;
    document.getElementById("restartButton").innerHTML= "<button class='buttonSpace' onClick = 'restartGame()'>RESTART</button>"
}

//Updates the score field to show the score
function UpdateScore()
{
    console.log("Updating Score");
    console.log(uiDiv.querySelector("h2 span"))
    uiDiv.querySelector("h2 span").innerText = parseFloat(uiDiv.querySelector("h2 span").innerText) + 1; 
}

//Just sets up the scoreboard
function setupUI()
{
    return"<h2> Score: <span>0</span> </h2>";
}

//Button that restarts the game
function restartGame()
{
    console.log("Game Restarting");
    gameOver = false
    theDojo=setupBoard();
    dojoDiv.innerHTML = render(theDojo);
    uiDiv.innerHTML = setupUI();
    document.getElementById("restartButton").innerHTML= ""
}

// start the game
// message to greet a user of the game
var style = "color:cyan;font-size:1.5rem;font-weight:bold;";
console.log("%c" + "IF YOU ARE A DOJO STUDENT...", style);
console.log("%c" + "GOOD LUCK THIS IS A CHALLENGE!", style);
// shows the dojo for debugging purposes
console.table(theDojo);
theDojo = setupBoard();

//theUI = setupUI();

console.table(theDojo);
// adds the rows of buttons into <div id="the-dojo"></div> 
dojoDiv.innerHTML = render(theDojo);
uiDiv.innerHTML =  setupUI();
