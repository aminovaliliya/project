result = 'start'
let possibleMoves = ['rock', 'paper', 'scissors']

let beats = {
    'rock': 'scissors',
    'paper': 'rock',
    'scissors': 'paper'
}
let totalPlays = 0
let wins = 0
let draws = 0
let losses = 0
let winsPercent = 0
let drawsPercent = 0
let lossesPercent = 0

function playerMove(choice){

    let player = choice
    let computer = possibleMoves[Math.floor(Math.random() * possibleMoves.length)]

    document.getElementById('gameLog').innerHTML = 'Player: ' + player + '<br>Computer: ' + computer
    totalPlays++
    document.getElementById('totalPlays').innerHTML = 'Total plays: ' + totalPlays
    if (player == computer){
        document.getElementById('title').innerHTML = 'Draw'
        draws++
        drawsPercent = (draws / totalPlays) * 100
        document.getElementById("winImage").style.display = "none";
        document.getElementById("loseImage").style.display = "none";
        document.getElementById("drawImage").style.display = "inline";

    } else if (beats[player] == computer){
        document.getElementById('title').innerHTML = 'You Win'
        wins++
        winsPercent = (wins / totalPlays) * 100
        document.getElementById("winImage").style.display = "inline";
        document.getElementById("loseImage").style.display = "none";
        document.getElementById("drawImage").style.display = "none";
    } else {
        document.getElementById('title').innerHTML = 'You Lose'
        losses++
        lossesPercent = (losses / totalPlays) * 100
        document.getElementById("winImage").style.display = "none";
        document.getElementById("loseImage").style.display = "inline";
        document.getElementById("drawImage").style.display = "none";
    }

    document.getElementById('winsCell').innerHTML = wins
    document.getElementById('drawsCell').innerHTML = draws
    document.getElementById('lossesCell').innerHTML = losses

    document.getElementById('winsPercentCell').innerHTML = winsPercent.toFixed(1) + ' %'
    document.getElementById('drawsPercentCell').innerHTML = drawsPercent.toFixed(1) + ' %'
    document.getElementById('lossesPercentCell').innerHTML = lossesPercent.toFixed(1) + ' %'
}