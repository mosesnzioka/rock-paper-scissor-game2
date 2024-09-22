
const computers_points = document.getElementById("computerPoints");
const players_points = document.getElementById("playersPoints");
const drawPoints = document.getElementById("drawPoints")
const computerPlayerItem = document.getElementById("currentComputerPlayer");
const playerItem = document.getElementById("currentPlayer");

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

let computerScore = 0;
let playerScore = 0;
let drawScore = 0;

function play() {
  const playerOptions = [rockBtn, paperBtn, scissorsBtn];

  const computerOptions = ["👊", "✋", "✌", "✋","✌", "👊", "👊","✌","✋", "✋","👊"];

  playerOptions.forEach((options) => {
    options.addEventListener("click", function () {
      let player = options.textContent;
      playerItem.textContent = player;
      const choiceNumber = Math.floor(Math.random() * 11);
  
      const computerValue = computerOptions[choiceNumber];

      computerPlayerItem.textContent = computerValue;

      results(player, computerValue);
    });
  });
}

const results = (player, computer) => {
  const game_results = document.getElementById("results");

  

  if (player === computer) {
    game_results.textContent = "Draw";
    drawScore++
    drawPoints.textContent = drawScore
  } else if (player == "✌") {
    if (computer == "✋") {
      game_results.textContent = "Player Wins";
      playerScore++;
      players_points.textContent = playerScore;
    } else {
      game_results.innerText = "Computer Wins";
      computerScore++;
      computers_points.textContent = computerScore;
    }
  } else if (player === "👊") {
    if (computer === "✌") {
      game_results.textContent = "Player Wins";
      playerScore++;
      players_points.textContent = playerScore;
    } else {
      game_results.textContent = "Computer Wins";
      computerScore++;
      computers_points.textContent = computerScore;
    }
  } else if (player == "✋") {
    if (computer == "👊") {
      game_results.textContent = "Player Wins";
      playerScore++;
      players_points.textContent = playerScore;
    } else {
      game_results.textContent = "Computer Wins";
      computerScore++;
      computers_points.textContent = computerScore;
    }
  }else if (player == "👊") {
    if (computer == "✋") {
      game_results.textContent = "computer wins";
      playerScore++;
      players_points.textContent = playerScore;
    } else {
      game_results.textContent = "player wins";
      computerScore++;
      computers_points.textContent = computerScore;
    }
  }
};

play();
