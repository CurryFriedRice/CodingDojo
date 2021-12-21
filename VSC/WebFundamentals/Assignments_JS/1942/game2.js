var movingLeft = false;

var player = [
    {x: 450, y: 600, score: 0, horizAxis:'none', vertAxis : 'none', missileReady:true}
]


var missileReady = true;

var allyMissile = []
var enemyMissile = []

var enemy =
[
    { x: 150, y: 250, style: 0, hit : false },
    { x: 250, y: 250, style: 1, hit : false },
    { x: 350, y: 250, style: 1, hit : false },
    { x: 450, y: 250, style: 1, hit : false },
    { x: 550, y: 250, style: 0, hit : false },
    { x: 250, y: 150, style: 2, hit : false },
    { x: 350, y: 150, style: 2, hit : false },
    { x: 450, y: 150, style: 2, hit : false },
    { x: 350, y: 50, style: 3, hit : false }
]


//So what do we need to do to make this game....

//Move Enemies
//Move Players

//Draw Item at location

//Check Collision
//On collision change the target's class to 

function setupDraw()
{
    //MAKE A PLAYER DIV TO RENDER
    if (document.getElementById('players').querySelector('.player') == null)
        document.getElementById('players').innerHTML = "<div class='player'></div>";
    
    
    //MAKE ENEMY SHIP DIVS
    while(document.getElementById("enemies").querySelectorAll(".enemy").length < enemy.length)
    {
        var index = document.getElementById("enemies").querySelectorAll(".enemy").length > 0 ? 
        document.getElementById("enemies").querySelectorAll(".enemy").length : 0
        
        console.log(index) 
        var enemyDiv = `<div class='enemy type${enemy[index]['style']}'> </div>`
        document.getElementById("enemies").innerHTML += enemyDiv
    }
}

//THIS IS USED TO DRAW MISSILES
function draw(data, html)
{
    for(var i = 0; i < html.querySelectorAll("*").length; i++)
    {
        html.querySelectorAll("*")[i].style.top = data[i].y + "px";
        html.querySelectorAll("*")[i].style.left = data[i].x + "px";
    }
}

//remove the data and HTML element
function remove(data, html, index)
{
    
}

/* INPUT READING FOR THE PLAYER*/
document.onkeydown = function (e) {
    //console.log(player);
    //console.log(e.code);
    if (e.code === "ArrowLeft") { // LEFT
        player[0].horizAxis = "left";
    }
    else if (e.code === "ArrowRight") { // RIGHT
        player[0].horizAxis = "right";
    }
    else if (e.code === "ArrowUp") { // DOWN
        player[0].vertAxis = "up";
    }
    else if (e.code === "ArrowDown") { // UP
        player[0].vertAxis = "down";
    }
    else if(e.code ==="Space"){ 
        //Shoot the GUN....
        if (allyMissile.length <= 3 && player[0].missileReady)// && firingMissile)
        {
            //Missile Object made
            var audio = new Audio(`snd/fire.wav`)
            audio.play();

            allyMissile.push({ x: player[0].x, y: player[0].y, hit: false });
            player[0].missileReady = false;
            document.getElementById("allyMissiles").innerHTML += "<div class='allyMissile'></div>"
            setTimeout(function() {
                player[0].missileReady = true;
            },500);

        }
        
    }
}
    


document.onkeyup = function (e) {
    if (e.code === "ArrowLeft") { // LEFT
        player[0].horizAxis = "none";
    }
    else if (e.code === "ArrowRight") { // RIGHT
        player[0].horizAxis = "none";
    }
    else if (e.code === "ArrowDown") { // DOWN
        player[0].vertAxis = "none";
    }
    else if (e.code === "ArrowUp") { // UP
        player[0].vertAxis = "none";
    }
}

//Just Move the enemies as a group
function moveEnemy() {
/*
    MoveHorizontal();
    function MoveHorizontal() {
        var direction = movingLeft ? -10 : 10;

        for (var i = 0; i < enemy.length; i++) {
            if (enemy[i].x <= 50) {
                movingLeft = false;
                moveVertical();
            }
            else if (enemy[i].x >= 800) {
                movingLeft = true;
            }
            enemy[i].x += direction;
        }
    }

    function moveVertical() {
        for (var i = 0; i < enemy.length; i++) {
            enemy[i].y = (enemy[i].y + 10) <= 600 ? enemy[i].y + 10 : 600;
        }
    }
    */
}

//move based on what the player has input
function movePlayer(unit) {
    var speed = 10;
    if (unit.horizAxis == "left") { // LEFT
        unit.x = unit.x - speed > 50 ? unit.x - speed : 50;
    }
    else if (unit.horizAxis == "right") { // RIGHT
        unit.x = unit.x + speed < 800 ? unit.x + speed : 800;
    }
    if (unit.vertAxis == "down") { // DOWN
        unit.y = unit.y + speed < 600 ? unit.y + speed : 600;
    }
    else if (unit.vertAxis == "up") { // UP
        unit.y = unit.y - speed > 450 ? unit.y - speed : 450;
    }

}

function move(data, html, speed)
{
    for(var i = 0; i< data.length; i++)
    {
        if(!data[i].hit)
        {
            data[i].y += speed;
            html.querySelectorAll("*")[i].style.top = data[i].y + "px";
            html.querySelectorAll("*")[i].style.left = data[i].x + "px";
        }
    }

}

function checkCollision(damagingList, targetList, distance, player, points)
{
    for(var i = 0; i<damagingList.length; i++)
    {
        for(var j = 0; j<targetList.length; j++)
        {
            if( Math.abs(damagingList[i].x- targetList[j].x) < distance &&
                Math.abs(damagingList[i].y- targetList[j].y) < distance )
                {
                    damagingList[i].hit = true;
                    targetList[j].hit = true;
                    player.score += points;
                    var audio = new Audio(`snd/explosion${Math.floor(Math.random()*2)}.wav`)
                    audio.play();
                    break;
                }
        }
    }
}

function cleanUp()
{
    //So what needs to be cleaned up here....
    //missiles that have hit
    //missiles that are offscreen
    //Enemies that are beyond the limit;

    //Clean up Ally missiles
    for (var i = 0; i < allyMissile.length;i++){
        if(allyMissile[i].y < -100 || allyMissile[i].hit)
        {
            allyMissile.splice(i,1);
            document.getElementById("allyMissiles").querySelectorAll("*")[i].remove();
            
        }
    }

    //Clean up Enemy Ships
    for (var i = 0; i < enemy.length;i++){
        if(enemy[i].y > 700 || enemy[i].hit)
        {
            //CREATE EXPLOSION
            document.getElementById("explosions").innerHTML +=`<div class='explosion'></div>`
            var len = document.getElementById("explosions").querySelectorAll(".explosion").length;
            var explosion = document.getElementById("explosions").querySelectorAll(".explosion")[len-1];
            explosion.style.left = enemy[i].x +'px';
            explosion.style.top = enemy[i].y+'px';
            
            setTimeout(function(){
                explosion.remove();
            },700);
            //remove the enemy 
            enemy.splice(i,1);
            document.getElementById("enemies").querySelectorAll("*")[i].remove();
        }
    }
}

function hardClean()
{
    document.getElementById("explosions").innerHTML ="";
}

function drawScoreboard(element, stats)
{
    //if there were more players then we could put MORE scoreboards on there
    element.innerHTML = `<p>SCORE: ${stats[0].score}</p`
}

setupDraw();

function gameLoop()
{
    movePlayer(player[0]);

    move(enemy, document.getElementById("enemies"), 1)
    move(allyMissile, document.getElementById("allyMissiles"),-15)
    move(enemyMissile, document.getElementById("enemyMissiles"), 10)
    
    //convention for collisions
    //Attacker, Defencer, Radius, player, Points
    checkCollision(allyMissile, enemy, 50, player[0], 10);
    checkCollision(enemy, player, 100, player[0], -500);

    draw(player, document.getElementById("players"));
    //moveEnemy();
    draw(enemy, document.getElementById("enemies"));

    drawScoreboard(document.getElementById("scoreboard"), player);
    cleanUp();
}

setInterval(gameLoop, 33)
setInterval(hardClean, 1400);