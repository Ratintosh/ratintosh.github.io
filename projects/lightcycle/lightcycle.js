var canvas = document.getElementById("game")
var ctx = canvas.getContext("2d")
var title = document.getElementById("title")
var posX = 15
var posY = 15

var screen = {
  width: canvas.width,
  height: canvas.height
}

var gridSize = 5
var speed = gridSize

var isGameOver = false

let gameLoop = null;

var playerOneInfo = {
  position: [15, 15],
  body: [[60, canvas.height / 2]], //position player 2 60 units from the left and in the center of the canvas
  movementVector: [gridSize, 0], //start the player going right
  size: gridSize,
  alive: true,
  color: "#57bcff"
}

var playerTwoInfo = {
  position: [15, 15],
  body: [[canvas.width - 60, canvas.height / 2]], //position player 2 60 units from the right and in the center of the canvas
  movementVector: [-gridSize, 0], //start the player going left
  size: gridSize,
  alive: true,
  color: "#ff9429"
}

//i forgot how canvas does its x and y but its weird iirc
document.addEventListener("keydown", function(e) {
  key = e.key

  //WASD is for player 1
  if (key == "w") {
    playerOneInfo.movementVector = [0, 0]
    playerOneInfo.movementVector[1] = -speed
  }
  if (key == "s") {
    playerOneInfo.movementVector = [0, 0]
    playerOneInfo.movementVector[1] = speed
  }
  if (key == "a") {
    playerOneInfo.movementVector = [0, 0]
    playerOneInfo.movementVector[0] = -speed
  }
  if (key == "d") {
    playerOneInfo.movementVector = [0, 0]
    playerOneInfo.movementVector[0] = speed
  }

  //Arrow Keys is for player 1
  console.log(e.key)
  if (key == "ArrowUp") {
    playerTwoInfo.movementVector = [0, 0]
    playerTwoInfo.movementVector[1] = -speed
  }
  if (key == "ArrowDown") {
    playerTwoInfo.movementVector = [0, 0]
    playerTwoInfo.movementVector[1] = speed
  }
  if (key == "ArrowLeft") {
    playerTwoInfo.movementVector = [0, 0]
    playerTwoInfo.movementVector[0] = -speed
  }
  if (key == "ArrowRight") {
    playerTwoInfo.movementVector = [0, 0]
    playerTwoInfo.movementVector[0] = speed
  }

  if (key == "Enter"){
    if(playerOneInfo.alive == false || playerTwoInfo.alive == false){
      resetGame()
    }
  }
})


//This function draws the first player
function drawPlayerOne() {
  if(isGameOver == false){
    var tempArray = [playerOneInfo.body[0][0], playerOneInfo.body[0][1]]
    playerOneInfo.body.push(tempArray)
  
  
    p1NewPosition = [playerOneInfo.body[0][0] + playerOneInfo.movementVector[0], playerOneInfo.body[0][1] + playerOneInfo.movementVector[1]]
    playerOneInfo.body.unshift(p1NewPosition)
    playerOneInfo.body.pop()
  }

  for (i in playerOneInfo.body) {
    ctx.fillStyle = playerOneInfo.color;
    ctx.beginPath();
    ctx.rect(playerOneInfo.body[i][0], playerOneInfo.body[i][1], playerOneInfo.size, playerOneInfo.size);
    ctx.fill();
  }
}

//This function draws the first player
function drawPlayerTwo() {
  if(isGameOver == false){
    var tempArray = [playerTwoInfo.body[0][0], playerTwoInfo.body[0][1]]
    playerTwoInfo.body.push(tempArray)
  
    p2NewPosition = [playerTwoInfo.body[0][0] + playerTwoInfo.movementVector[0], playerTwoInfo.body[0][1] + playerTwoInfo.movementVector[1]]
    playerTwoInfo.body.unshift(p2NewPosition)
    playerTwoInfo.body.pop()
  }
  for (i in playerTwoInfo.body) {
    ctx.fillStyle = playerTwoInfo.color;
    ctx.beginPath();
    ctx.rect(playerTwoInfo.body[i][0], playerTwoInfo.body[i][1], playerTwoInfo.size, playerTwoInfo.size);
    ctx.fill();
  }
}

function detectSelfCollision() {

  //iterate over player one's body to see if it is colliding with itself
  for (i in playerOneInfo.body) {
    if (playerOneInfo.body[0][0] == playerOneInfo.body[i][0] && playerOneInfo.body[0][1] == playerOneInfo.body[i][1]) {
      if (i != 0) {
        playerOneInfo.alive = false;
        clearInterval(gameLoop)
        gameOver(2)
      }
    }
  }

  //iterate over player two's body to see if it is colliding with itself
  for (i in playerTwoInfo.body) {
    if (playerTwoInfo.body[0][0] == playerTwoInfo.body[i][0] && playerTwoInfo.body[0][1] == playerTwoInfo.body[i][1]) {
      if (i != 0) {
        playerTwoInfo.alive = false;
        clearInterval(gameLoop)
        gameOver(1)
      }
    }
  }


}


function detectWallCollision() {

  //if player1 is out of bounds
  if (playerOneInfo.body[0][0] < 0 || playerOneInfo.body[0][0] > canvas.width) {
    playerOneInfo.alive = false;
    stopLoop()
    gameOver(2)
  }
  if (playerOneInfo.body[0][1] < 0 || playerOneInfo.body[0][1] > canvas.height) {
    playerOneInfo.alive = false;
    stopLoop()
    gameOver(2)
  }
  //if player2 is out of bounds
  if (playerTwoInfo.body[0][0] < 0 || playerTwoInfo.body[0][0] > canvas.width) {
    playerTwoInfo.alive = false;
    stopLoop()
    gameOver(1)
  }
  if (playerTwoInfo.body[0][1] < 0 || playerTwoInfo.body[0][1] > canvas.height) {
    playerTwoInfo.alive = false;
    stopLoop()
    gameOver(1)
  }
}

function detectOtherCollision(){
  for (i in playerTwoInfo.body){
    if(playerOneInfo.body[0][0] == playerTwoInfo.body[i][0] && playerOneInfo.body[0][1] == playerTwoInfo.body[i][1]){
      console.log("Blue crashed into red")
      playerOneInfo.alive = false;
      stopLoop()
      gameOver(2)
    }
  }

  for (i in playerOneInfo.body){
    if(playerTwoInfo.body[0][0] == playerOneInfo.body[i][0] && playerTwoInfo.body[0][1] == playerOneInfo.body[i][1]){
      console.log("Red crashed into blue")
      playerTwoInfo.alive = false;
      stopLoop()
      gameOver(1)
    }
  }
}

function startLoop(){
  if (gameLoop !== null) return; //exit early if already running
  stopLoop();
  gameLoop = setInterval(function() {
    console.log("A")
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //draw players
    drawPlayerOne();
    drawPlayerTwo();

    //do logic first
    detectWallCollision();
    detectSelfCollision();
    detectOtherCollision();
}, 50)
}
function stopLoop(){
  clearInterval(gameLoop); // Stops the interval
  gameLoop = null;
  console.log("Loop stopped.");
}

document.getElementById("start").addEventListener("click", function() {
  document.getElementById("hud").style = "display:none;"
  resetGame();
  startLoop();
})

function gameOver(winner) {
  isGameOver = true
  //ctx.clearRect(0, 0, canvas.width, canvas.height);
  document.getElementById("hud").style = "display:flex;"
  if(winner == 1){
    title.classList.add("player1")
    title.innerHTML = "Player 1 Wins"
    //startExplosion(playerTwoInfo.color, playerTwoInfo.body[0][0], playerTwoInfo.body[0][1])
  }else if(winner == 2){
    title.classList.add("player2")
    title.innerHTML = "Player 2 Wins"
    //startExplosion(playerOneInfo.color, playerOneInfo.body[0][0], playerOneInfo.body[0][1])
  }
}

//this function handles resetting the game so you don't have to refresh the page
function resetGame(){
  console.log("RESET CALLED")
  isGameOver = false
  playerOneInfo.alive = true
  playerTwoInfo.alive = true

  playerOneInfo.body = [[60, canvas.height / 2]]
  playerOneInfo.movementVector = [gridSize, 0]


  playerTwoInfo.body = [[canvas.width - 60, canvas.height / 2]] //default position
  playerTwoInfo.movementVector = [-gridSize, 0]

  console.log(playerOneInfo);
}
