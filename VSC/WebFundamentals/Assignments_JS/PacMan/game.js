/* 
var maze = document.getElementById("pacMaze");
var pacman = document.getElementById("pacman");
var pactwo = document.getElementById("pactwo");
var inkyDiv = document.getElementById("inky");
var pinkyDiv = document.getElementById("pinky");
var blinkyDiv = document.getElementById("blinky");
var clydeDiv = document.getElementById("clyde");
var scoreDiv = document.getElementById("scoreboard"); 
*/


var moveRate = 1 / 20; //this determines how fast things move

var player =
{
    "direction": "down",
    "bufferedDirection": "none",
    "position": {
        "x": 1,
        "y": 1,
        "dx": 0,
        "dy": 0
    },
    "lives": 3,
    "score": 0,
    "pelletDuration": 0,
    "combo": 0,
    "pelletsToFruit": 5
}
var player2 =
{
    "direction": "down",
    "bufferedDirection": "none",
    "position": {
        "x": 5,
        "y": 5,
        "dx": 0,
        "dy": 0
    },
    "lives": 3,
    "score": 0,
    "pelletDuration": 0,
    "combo": 0,
    "pelletsToFruit": 20
}

var warpTile =
{
    'x1': 0,
    'y1': 0,
    'x2': 0,
    'y2': 0
}
var spawn = 
{
    "x": 0,
    "y": 0
}
var ghost = 
{
    "inky" :
    {
        "direction": 'left',
        'bufferedDirection':'down',
        "position": {
            "x": 5,
            "y": 5,
            "dx": 0,
            "dy": 0
        }
    },
    "blinky" :
    {
        "direction": 'left',
        'bufferedDirection':'down',
        "position": {
            "x": 5,
            "y": 5,
            "dx": 0,
            "dy": 0
        }
    },
    "pinky" :
    {
        "direction": 'left',
        'bufferedDirection':'down',
        "position": {
            "x": 5,
            "y": 5,
            "dx": 0,
            "dy": 0
        }
    }, 
    "clyde" :
    {
        "direction": 'left',
        'bufferedDirection':'down',
        "position": {
            "x": 5,
            "y": 5,
            "dx": 0,
            "dy": 0
        }
    }
}

//popluate more worlds here....
var uniGrid =
    [
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 0],
            [0, 3, 0, 2, 0, 0, 2, 0, 2, 0, 0, 2, 0, 3, 0],
            [0, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 0],
            [0, 2, 0, 2, 0, 1, 0, 0, 0, 1, 0, 2, 0, 2, 0],
            [0, 2, 2, 2, 0, 1, 1, 0, 1, 1, 0, 2, 2, 2, 0],
            [0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0],
            [0, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 0],
            [0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0],
            [0, 2, 2, 2, 2, 1, 1, 8, 1, 1, 2, 2, 2, 2, 0],
            [0, 2, 0, 0, 2, 0, 0, 1, 0, 0, 2, 0, 0, 2, 0],
            [0, 2, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 0],
            [0, 0, 2, 0, 0, 2, 0, 1, 0, 2, 0, 0, 2, 0, 0],
            [0, 0, 2, 3, 2, 2, 1, 1, 1, 2, 2, 3, 2, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ]
    ]

var worldGrid = [];

var worldDict =
{
    0: "wall",         //Units cannot pass this
    1: "blank",        //Blank no points are awareded but anything can pass
    2: "pellet",       //Gives points when eaten
    3: "powerPellet",  //Gives power pellet effect Makes ghosts eatable for points
    4: "fruit",        //Gives an abundance of points
    5: "ghostStart",   //Where a ghost Starts 
    6: "ghostSpawn",   //Where a ghost returns to come back
    7: "ghostWall",    //A wall that only Ghosts can go through
    8: "startingPoint",//Where Pacman Spawns
    9: "warp"          //A warp Tile
}

//
document.onkeydown = function (e) {	//so if the lives is greater than 0
    if (player['lives'] > 0) {
        if (e.keyCode == 37) { // LEFT
            player.bufferedDirection = "left"
        }
        else if (e.keyCode == 39) { // RIGHT
            player.bufferedDirection = "right"
        }
        else if (e.keyCode == 40) { // DOWN
            player.bufferedDirection = "down"
        }
        else if (e.keyCode == 38) { // UP
            player.bufferedDirection = "up"
        }
    }
    if(player2['lives'] > 0)
    {
        if (e.keyCode == 65) { // LEFT
            player2.bufferedDirection = "left"
        }
        else if (e.keyCode == 68) { // RIGHT
            player2.bufferedDirection = "right"
        }
        else if (e.keyCode == 83) { // DOWN
            player2.bufferedDirection = "down"
        }
        else if (e.keyCode == 87) { // UP
            player2.bufferedDirection = "up"
        }
    }
    //console.log(player.bufferedDirection);
}

function drawWorld() {
    output = "";
    for (var row = 0; row < worldGrid.length; row++) {
        //Open the row
        output += "<div class='row'>";
        //Open the Column
        for (var col = 0; col < worldGrid[row].length; col++) {
            //for every element in the column make a div
            output += `<div class = ${worldDict[worldGrid[row][col]]} ></div>`
        }

        //Close the row
        output += "</div>"
    }
    //console.log(maze)
    document.getElementById("pacMaze").innerHTML = output;

}

function setupBoard() {
    for (var row = 0; row < worldGrid.length; row++) {
        for (var col = 0; col < worldGrid[row].length; col++) {
            //console.log(worldDict[worldGrid[row][col]])
            
            if(worldGrid[row][col] == 8)
            {
                worldDict[worldGrid[row][col]] 
                spawn['x']= col;
                spawn['y']= row;
            }
            if(worldGrid[row][col] == 9)
            {
                if(warpTile.x1 == 0)
                {
                    warpTile.x1 = col
                    warpTile.y1 = row
                }else
                {
                    warpTile.x2 = col
                    warpTile.y2 = row
                }
            }
        }
        //Close the row
    }
    player.position.x = spawn.x;
    player.position.y = spawn.y;
    ghost.inky.position.x = 1;
    ghost.inky.position.y = 1;
}

function move(unit) {
    //So we check for a wall in relation to our own position in a direction
    //console.log(unit);
    if (!isWall(unit.position.x, unit.position.y, unit.bufferedDirection) && unit.bufferedDirection !='none') {
        //If there is no wall in the buffered Direction then we move that direction...
        
        //then we move in the buffered direction and reset the deltas if any 
        if(unit.bufferedDirection != 'none')
            unit.direction = unit.bufferedDirection;
        unit.bufferedDirection = "none";
        MoveDirection(unit);

    }
    else if(!isWall(unit.position.x, unit.position.y, unit.direction))
    {
        //if there is a wall in the way of our buffered direction then we keep moving our normal direction
        MoveDirection(unit);
    }else
    {

    }

    function isWall(x,y,direction) 
    {
        //console.log(x, y, direction);
        switch(direction)
        {
            case 'left':
                //console.log(worldGrid[y][x-1] == 0);
                return worldGrid[y][x-1] == 0
            case 'right':
                //console.log(worldGrid[y][x+1] == 0);
                return worldGrid[y][x+1] == 0
            case 'down':
                //console.log(worldGrid[y+1][x] == 0);
                return worldGrid[y+1][x] == 0
            case 'up':
                //console.log(worldGrid[y-1][x] == 0);
                return worldGrid[y-1][x] == 0
            default:
                return true;
        }
    }

    function MoveDirection(object) {
        switch (object.direction) {
            case "left":
                object.position.dx -= moveRate;
                object.position.dy = 0;
                break;
            case "right":
                object.position.dx += moveRate;
                object.position.dy = 0;
                break;
            case "down":
                object.position.dy += moveRate;
                object.position.dx = 0;
                break;
            case "up":
                object.position.dy -= moveRate;
                object.position.dx = 0;
                break;
            default:
                break;
        }
        
        if(object.position.dx >= 1) //Move right
        {
            object.position.x += 1;
            object.position.dx = 0;
        }
        else if (object.position.dx <= -1) //Move left
        {
            object.position.x -= 1;
            object.position.dx = 0;
        }

        if(object.position.dy >= 1) //Move down
        {
            object.position.y += 1;
            object.position.dy = 0;
        }
        else if (object.position.dy <= -1) //Move up
        {
            object.position.y -= 1;
            object.position.dy = 0;
        }
    }
}



//this should be the div put into it the location
function draw(div, unit)
{
    div.style.top = (unit.position.y + unit.position.dy) * 40+ "px";
    div.style.left = (unit.position.x +unit.position.dx) * 40+ "px";
    var angle = 0
        switch(unit.direction)
        {
            case 'left':
                angle =  90
                break;
            case 'right':
                angle = -90
                break;
            case 'up':
                angle = 180
                break;
            case 'down':
                angle =  0
                break;
        }
    
    //console.log(angle);
    div.style.transform = "rotate(" + angle + "deg)"; 
}

function checkTile(unit)
{  
    if(worldGrid[unit.position.y][unit.position.x] == 2) // if it's a pellet
    {
        unit.score += 1;
        worldGrid[unit.position.y][unit.position.x] = 1;
        unit.pelletsToFruit -= 1;
    }else if(worldGrid[unit.position.y][unit.position.x] == 3)//It's a power pellet
    {
        unit.score += 25;
        unit.pelletDuration = 20;
        unit.pelletsToFruit -= 5;
        worldGrid[unit.position.y][unit.position.x] = 1;
    }else if(worldGrid[unit.position.y][unit.position.x] == 4)//It's a fruit
    {
        unit.score += 50;
        worldGrid[unit.position.y][unit.position.x] = 1;
        unit.pelletsToFruit = 20;
    }
    if(unit.pelletsToFruit <= 0)
    {
        //console.log("fruit!")
        //console.log(spawn);
        worldGrid[spawn.y][spawn.x] = 4;
        unit.pelletsToFruit = 20
    }
    if(worldGrid[unit.position.y][unit.position.x] == 9)
    {
        if((unit.position.x + unit.position.dx )== warpTile.x1 && 
        (unit.position.y+ unit.position.dx) == warpTile.y1)
        {
            unit.position.x = warpTile.x2;
            unit.position.y = warpTile.y2;
        }else if((unit.position.x + unit.position.dx ) == warpTile.x2 && 
        (unit.position.y+ unit.position.dy) == warpTile.y2)
        {   
            unit.position.x = warpTile.x1;
            unit.position.y = warpTile.y1;
        }
    }
    if(unit.position.x == ghost.inky.position.x && unit.position.y == ghost.inky.position.y)
    {
        unit.lives--;
        unit.position.x = spawn.x;
        unit.position.y = spawn.y;
    }
    

}

function drawScoreboard(element)
{
    element.innerHTML = `<div><p>Player 1</p><p>Score : ${player.score}</p><p>Lives : ${player.lives}</div> 
    <div><p>Player 2</p><p>Score : ${player2.score}</p><p>Lives : ${player2.lives}</div>`

}

worldGrid = uniGrid[0];
setupBoard();
drawWorld();

setInterval(function () {
    move(player);
    checkTile(player);
    draw(document.getElementById("pacman"), player);
    
    move(player2);
    checkTile(player2);
    draw(document.getElementById("pactwo"), player2);


    //console.log(ghost.inky);
    move(ghost.inky);
    draw(document.getElementById("inky"), ghost.inky);

    drawWorld();

    
    drawScoreboard(document.getElementById("scoreboard"));
    //console.log(player);
}, 10)

setInterval(function()
{
    var randomDir = ['up','down','left','right'];
    if(ghost.inky.bufferedDirection == 'none')
    ghost.inky.bufferedDirection= randomDir[Math.floor(Math.random()*randomDir.length)];
    else ghost.inky.direction = randomDir[Math.floor(Math.random()*randomDir.length)];
    console.log(ghost.inky)
},1000)