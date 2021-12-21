var movingLeft = false;
var player =
{
    x: 450,
    y: 620,
    score: 3
}

var horizAxis = 'none';
var vertAxis = 'none';

var missileReady = true;
var allyMissile = [];

var enemyMissile = [];

//So there will only ever be 10 enemies on screen
var enemy =
    [
        { x: 400, y: 100, style: 0},
        { x: 100, y: 50, style: 1 },
        { x: 200, y: 50, style: 2 },
        { x: 300, y: 50, style: 3 },
        { x: 400, y: 50, style: 3 },
        { x: 500, y: 50, style: 3 },
        { x: 600, y: 50, style: 2 },
        { x: 300, y: 100, style: 1 },
        { x: 500, y: 100, style: 0 }
    ];

//Draw the player at the location
function drawPlayer() {

    if (document.getElementById('players').querySelector('.player') == null)
        document.getElementById('players').innerHTML = "<div class='player'>  </div>";

    var pDiv = document.getElementById('players').querySelector('.player');
    pDiv.style.top = player.y + "px";
    pDiv.style.left = player.x + "px";
    //console.log(pDiv.style.top);
    //console.log(player);

}


function drawAllyMissile() 
{
    var j = document.getElementById('allyMissiles').querySelectorAll('.allyMissile').length;

    if(j < allyMissile.length)
    {
        content = '';
        for (var i = j; i < allyMissile.length; i++) {
            content += "<div class='allyMissile'> </div>";
        }
        document.getElementById("allyMissiles").innerHTML += content;
    }
    var query = document.getElementById('allyMissiles').querySelectorAll('*');
    
    console.log(allyMissile)
    for (j = 0; j < query.length; j++) {
        //console.log(allyMissile.length)
        query[j].style.top = allyMissile[j].y + "px";
        query[j].style.left = allyMissile[j].x + "px";
    }

    
}

function movePlayer() {
    var speed = 10;
    if (horizAxis == "left") { // LEFT
        player.x = player.x - speed > 50 ? player.x - speed : 50;
    }
    else if (horizAxis == "right") { // RIGHT
        player.x = player.x + speed < 800 ? player.x + speed : 800;
    }
    if (vertAxis == "down") { // DOWN
        player.y = player.y + speed < 600 ? player.y + speed : 600;
    }
    else if (vertAxis == "up") { // UP
        player.y = player.y - speed > 450 ? player.y - speed : 450;
    }

}

function moveAllyMissile() {
    var speed = 15;
    
    for (var i = 0; i < allyMissile.length; i++) {
        if(!allyMissile[i].hit){
            allyMissile[i].y -= speed;
            allyMissile = allyMissile.filter(offScreen);
        }
        //if(contactEnemy(allyMissile[i]));
    }

    function offScreen(value) {
        return value.y > -50;
    }
}

function drawEnemy() {

    if (document.getElementById('enemies').querySelectorAll('*').length < enemy.length) {
        console.log(document.getElementById('enemies').querySelectorAll('*').length + " | " + enemy.length);
        for (var i = 0; i < enemy.length; i++) {
            content = '';
            var str = "enemy" + enemy[i].style;
            content += `<div class='${str}'> </div>`;
            document.getElementById("enemies").innerHTML += content;
            console.log(str);
        }
    }
    var query = document.getElementById('enemies').querySelectorAll('*');
    for (var j = 0; j < query.length; j++) {
        query[j].style.top = enemy[j].y + "px";
        query[j].style.left = enemy[j].x + "px";
    }



    /*
        var pDiv = document.getElementById('players').querySelector('.player');
        pDiv.style.top = player.y + "px";
        pDiv.style.left = player.x + "px";
        */
    //console.log(player);
}


function moveEnemy() {

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
}

function drawEnemyMissile() {
    //console.log(enemyMissile);
    content = '';
    for (var i = 0; i < enemyMissile.length; i++) {
        content += "<div class='enemyMissile' style='left:" + enemyMissile[i].x + "px; top:" + enemyMissile[i].y + "px;'> </div>";
    }
    document.getElementById("enemyMissiles").innerHTML = content;

}



function moveEnemyMissile() {
    var speed = -8;
    for (var i = 0; i < enemyMissile.length; i++) {
        enemyMissile[i].y -= speed;
        enemyMissile = enemyMissile.filter(offScreen);
        //if(contactEnemy(allyMissile[i]));
    }

    function offScreen(value) {

        return value.y < 650;
    }
}


document.onkeydown = function (e) {
    //console.log(player);
    if (e.keyCode == 37) { // LEFT
        //player.x = player.x - 10 > 50 ? player.x -10: 50;
        horizAxis = "left";
    }
    else if (e.keyCode == 39) { // RIGHT
        //player.x = player.x + 10 < 800 ? player.x +10: 800;
        horizAxis = "right";
    }
    if (e.keyCode == 40) { // DOWN
        //player.y = player.y + 10 < 600 ? player.y +10: 600;
        vertAxis = "down";
    }
    else if (e.keyCode == 38) { // UP
        //player.y = player.y - 10 > 450 ? player.y -10: 450;
        vertAxis = "up";
    }
    if (e.keyCode == 32)//SPACEBAR
    {
        //Shoot the GUN... then also figure ou
        firingMissile = true;
        if (allyMissile.length <= 5 && missileReady)// && firingMissile)
        {
            allyMissile.push({ x: player.x, y: player.y, hit: false });
            missileReady = false;
            setTimeout(readyMissile, 250);
        }
    }
    function readyMissile() {
        missileReady = true;
    }

}
document.onkeyup = function (e) {
    if (e.keyCode == 37) { // LEFT
        horizAxis = "none";
    }
    else if (e.keyCode == 39) { // RIGHT
        horizAxis = "none";
    }
    else if (e.keyCode == 40) { // DOWN
        vertAxis = "none";
    }
    else if (e.keyCode == 38) { // UP
        vertAxis = "none";
    }
}

function checkCollision(projectileList, id, targetList ) {

    //console.log("Checking Ranges!"); 
    console.log(projectileList);
    for (var i = 0; i < projectileList.length; i++) {
        for (var j = 0; j < targetList.length; j++) {
            if (withinRange(projectileList[i].x, targetList[i].x, 100) &&
            withinRange(projectileList[i].y, targetList[i].y, 100)) 
            {
                
                //So what should happen.... First the projectile turns into an explosion
                if(id == "missile"){
                    document.getElementById(id).querySelectorAll("*")[j].classList.add("explosion")
                    targetList[i].hit = true;  
                    projectileList.splice(i,1);
                    setTimeout(remove(projectileList[i]))
                    player.score += 10;
                }
                if(id == "player")
                {
                    player.score-=500;
                }
                break;
            }
        }
    }

    function withinRange(a, b, distance) {
        if (a - b > -distance && a - b < distance) {
            return true;
        }
        return false;
    }
}


function gameLoop() {
    //moveEnemy();
    drawEnemy();
    //moveEnemyMissile();
    drawEnemyMissile();
}

function fireEnemyMissile() {
    if (enemyMissile.length < 3) {
        var R = Math.floor(enemy.length * Math.random());
        enemyMissile.push({ x: enemy[R].x, y: enemy[R].y });
    }
}

//player loop is slightly faster so the player feels more in control
function playerLoop() {
    movePlayer();
    drawPlayer();
    moveAllyMissile();
    checkCollision(allyMissile, "allyMissiles", enemy);
    if(allyMissile.length > 0)drawAllyMissile();

}

setInterval(playerLoop, 33)
setInterval(gameLoop, 66)
setInterval(fireEnemyMissile, 2000)


//playerLoop();
//gameLoop();
//fireEnemyMissile();