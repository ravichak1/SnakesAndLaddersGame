// All Variable goes here

//title div variables
let title = document.querySelector("#title");
let headingtitle = document.querySelector("#headingtitle"); //title of the page
let playersNumber = document.querySelector("#playersNumber"); //its displays the number of players playing game
let countPlayers = document.querySelector("#countPlayers"); //this button will brings to enter number of players you want
let playerSection = document.querySelector("#playerSection"); //this section contains details about the players input section
let playerInputSection = document.querySelector("#playersInputSection"); //this is the number of players selection prompt section
let playerInputValue = document.querySelector("#playerInputValue"); //you can select how many players you want to play
let playerInputButton = document.querySelector("#playerInputButton"); //this button will help to store the input from user
const colors = ["green", "red", "blue", "yellow"]; //colors array for players to choose
let playerChooseColor = document.querySelector("#playerChooseColor"); //this section will guide to choose the colors for players
let choosingColor = document.querySelectorAll(".colorButton"); //this button add color to selected players
let playersHeading = document.querySelector("#playerSectionTitle"); //this title will show the player who choosed color before

//buttonSection div variables
let buttonsSection = document.querySelector(".buttonsSection"); //this contains the button contains start button
let startButton = document.querySelector("#startButton"); //this button start the game

//container Section Variables
let gameBoard = document.querySelector("#gameBoard"); //this is the main section of the game conatins all 100cells
let diceSection = document.querySelector("#diceSection"); //this sections contains imge and the button for dice to roll
let diceButton = document.querySelector("#diceButton"); //its a button for dice
let diceImage = document.querySelector("#diceImage"); //its image for the dice
const audioRoll = document.querySelector("#audioRoll"); //sounds forrolling an dice
///buttons

let newElement = document.createElement("div");

//popup div variabe
let popUp = document.querySelector("#popUp"); //shows popup

//winning moment section variable
let restartButton = document.querySelector("#restartButton"); //restart the game from beginning
let winnerHeading = document.createElement("h2"); //shows who is the winner
let winnigMoment = document.querySelector("#winningMoment"); // it will show what to do after win

//its for create a player and display at certain place
let players = [];
let eachValue;
const dicePlayersArray = [];
let playerIndex = 0;

// rules Section
let rulesButton = document.querySelector("#rules");
let showRulesSection = document.querySelector("#showRulesSection");
let backToGame = document.createElement("button");
popUp.style.display = "none";
diceButton.disabled = false;
showRulesSection.style.display = "none";
// here is all the event listner
countPlayers.addEventListener("click", handleCountPlayer);
playerInputButton.addEventListener("click", handlePlayerInput);
diceButton.addEventListener("click", rollDice);
startButton.addEventListener("click", handleStart);
window.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    let value = Number(playerInputValue.value);
    players = new Array(value)
      .fill(0)
      .map(() => ({ row: 0, col: 0, color: null }));
    if (value > 4 || value < 2) {
      return (playerInputSection.style.display = "block");
    }

    for (let i = 0; i < value; i++) {
      let player = `Player${i}`;

      console.log(players);
    }

    // console.log(players);
    playersNumber.textContent = playerInputValue.value;
    playerChooseColor.style.display = "grid";
    playerInputSection.style.display = "none";
  }
});

restartButton.addEventListener("click", () => {
  location.reload();
});

rulesButton.addEventListener("click", showRules);
//here is all the functions to run
function handleCountPlayer() {
  colors.forEach((each) => {
    console.log("here");
    eachValue = document.createElement("button");
    eachValue.classList.add(each);
    eachValue.classList.add(`${each}1`);
    eachValue.classList.add("colorButton");
    eachValue.textContent = each;

    playerChooseColor.append(eachValue);
  });
  countPlayers.style.display = "none";
  playerInputSection.style.display = "flex";
  playerChooseColor.append(eachValue);
  playerSection.style.display = "none";
  headingtitle.style.display = "none";
  choosingColor = document.querySelectorAll(".colorButton");
  choosingColor.forEach((each) => {
    each.addEventListener("click", () => {
      if (each.classList.contains("selected")) {
        return;
      }
      console.log(players);
      if (players.some((each) => each.color === null)) {
        each.classList.add("selected");
        const player = players.find((p) => !p.color);
        player.color = each.textContent;
      }
      newElement.innerHTML = `<h2>Player${
        players.filter((p) => p.color).length
      }</h2>`;
      if (players.every((p) => p.color)) {
        playerChooseColor.style.display = "none";
        headingtitle.style.display = "block";
        buttonsSection.style.display = "flex";
      }
    });
  });
}

function handlePlayerInput() {
  playersNumber.textContent = playerInputValue.value;
  let value = Number(playerInputValue.value);
  players = new Array(value)
    .fill(0)
    .map(() => ({ row: 0, col: 0, color: null }));
  if (value > 4 || value < 2) {
    return (playerInputSection.style.display = "block");
  }

  for (let i = 0; i < value; i++) {
    let player = `Player${i}`;

    console.log(players);
  }

  playerInputSection.style.display = "none";
  playerChooseColor.style.display = "grid";
}

function handleStart() {
  startGame();
}

function startGame() {
  let game = new Game();
  let gameContainer = new Gamecontainer();
  game.display();
//   title.style.display = "none";
  playersHeading.style.display = "none";
  startButton.style.display = "none";
  gameContainer.createContainer();
  displayPlayer(players[playerIndex]);

  // for (let i = 1; i <= playerInputValue.value; i++) {
}

function displayPlayer(player) {
  console.log(player);
  const { row, col, color } = player;
  // const color = chosedColorPlayer[1];
  const playerCell = document.querySelector(`[row="${row}"][col="${col}"]`);
  playerCell.classList.add(color);
}

function createPlayer(array) {
  array = players;
  dicePlayersArray = [];
  for (let i = 0; i < array.length; i++) {
    dicePlayersArray.push({
      row: 0,
      col: 0,
      color: `${array.i}`,
    });
  }
  displayPlayer(dicePlayersArray[playerIndex]);
}

function hidePlayer(player) {
  const { row, col, color } = player;
  const playerCell = document.querySelector(`[row="${row}"][col="${col}"]`);
  playerCell.classList.remove(color);
}

function rollDice() {
  audioRoll.play();
  const player = players[playerIndex];
  const result = Math.floor(Math.random() * 6) + 1;
  console.log(result);

  diceImage.setAttribute("src", `./images/dice${result}.png`);
  displayPlayer(player);
  hidePlayer(player);

  winningStake(player, result);

  if (player.col > 9) {
    player.row++;
    player.col %= 10;
  }
  win(player);
  snakes(player);
  ladders(player);

  displayPlayer(player);
  playerIndex++;
  playerIndex %= players.length;
  displayPlayer(players[playerIndex]);
}

function snakes(player) {
  if (player.row === 2 && player.col === 6) {
    player.row = 0;
    player.col = 4;
    popUpMenu(player, "Oh no no");
  } else if (player.row === 3 && player.col === 9) {
    player.row = 0;
    player.col = 2;
    popUpMenu(player, "Oh no no");
  } else if (player.row === 4 && player.col === 2) {
    player.row = 1;
    player.col = 7;
    popUpMenu(player, "Oh no no");
  } else if (player.row === 5 && player.col === 3) {
    player.row = 3;
    player.col = 0;
    popUpMenu(player, "Oh no no");
  } else if (player.row === 6 && player.col === 5) {
    player.row = 5;
    player.col = 4;
    popUpMenu(player, "Oh no no");
  } else if (player.row === 7 && player.col === 5) {
    player.row = 6;
    player.col = 7;
    popUpMenu(player, "Oh no no");
  } else if (player.row === 8 && player.col === 8) {
    player.row = 5;
    player.col = 2;
    popUpMenu(player, "Oh no no");
  } else if (player.row === 9 && player.col === 8) {
    player.row = 4;
    player.col = 0;
    popUpMenu(player, "Oh no no");
  }
}

function ladders(player) {
  if (player.row === 0 && player.col === 3) {
    player.row = 2;
    player.col = 4;
    popUpMenuLadder(player, "Your Lucky");
  } else if (player.row === 1 && player.col === 2) {
    player.row = 4;
    player.col = 5;
    popUpMenuLadder(player, "Your Lucky");
  } else if (player.row === 3 && player.col === 2) {
    player.row = 4;
    player.col = 8;
    popUpMenuLadder(player, "Your Lucky");
  } else if (player.row === 4 && player.col === 9) {
    player.row = 6;
    player.col = 8;
    popUpMenuLadder(player, "Your Lucky");
  } else if (player.row === 4 && player.col === 1) {
    player.row = 6;
    player.col = 2;
    popUpMenuLadder(player, "Oh no no no");
  } else if (player.row === 6 && player.col === 1) {
    player.row = 8;
    player.col = 0;
    popUpMenuLadder(player, "Your Lucky");
  } else if (player.row === 7 && player.col === 3) {
    player.row = 9;
    player.col = 1;
    popUpMenuLadder(player, "Your Lucky");
  }
}

function winningStake(player, result) {
  if (player.row === 9 && player.col === 4 && result === 6) {
    player.row = 9;
    player.col = 4;
  } else if (player.row === 9 && player.col === 5 && result >= 5) {
    player.row = 9;
    player.col = 5;
  } else if (player.row === 9 && player.col === 6 && result >= 4) {
    player.row = 9;
    player.col = 6;
  } else if (player.row === 9 && player.col === 7 && result >= 3) {
    player.row = 9;
    player.col = 7;
  } else {
    player.col += result;
  }
}

function win(player) {
  if (player.row === 9 && player.col === 9) {
    console.log(`${player.color} wins`);
    gameBoard.style.display = "none";
    diceSection.style.display = "none";
    let text = `${player.color} Wins`;

    winnigMoment.append(text.toLocaleUpperCase());
    restartButton.style.display = "block";
  }
}

function popUpMenu(player, message) {
  let popUpText = document.createElement("div");
  popUpText.innerText = `${message}`;
  popUp.append(popUpText);

  popUp.style.display = "flex";
  popUp.style.backgroundColor = `${player.color}`;
  timeOutId = setTimeout(() => {
    popUp.style.display = "none";
    popUpText.innerText = "";
  }, 1000);
}

function popUpMenuLadder(player, message) {
  let popUpText = document.createElement("div");
  popUpText.innerText = `${message}`;
  popUp.append(popUpText);
  popUp.style.display = "flex";
  popUp.style.backgroundColor = `${player.color}`;
  timeOutId = setTimeout(() => {
    popUp.style.display = "none";
    popUpText.innerText = "";
  }, 1000);
}

function showRules() {
  playerSection.style.display = "none";
  showRulesSection.style.display = "flex";
  backToGame.classList.add("btn");
  backToGame.classList.add("backGame");
  backToGame.textContent = "Back To Game";
  //   let rulesSection = document.createElement("div");
  //   rulesSection.classList.add("showrule");

  //   rulesSection.append(unorderList);
  showRulesSection.append(unorderList);
  showRulesSection.append(backToGame);
}

backToGame.addEventListener("click", backToback);
function backToback() {
  showRulesSection.style.display = "none";
  playerSection.style.display = "flex";
}

const howToPlay = [
  `Each player puts their sprite on the starting point which is cell 0.`,
  `Take it in turns to roll the dice. Move your counter forward the number of spaces shown on the dice.`,
  `If your counter lands at the bottom of a ladder, you can move up to the top of the ladder.`,
  `If your counter lands on the head of a snake, you must slide down to the bottom of the snake.`,
  `The first player to get to the sprite that reached '100' is the winner.`,
];

let unorderList = document.createElement("ul");
unorderList.classList.add("unOrderListClass");
for (let i = 0; i < howToPlay.length; i++) {
  let each = howToPlay[i];
  let listOfRules = document.createElement("li");
  listOfRules.classList.add("listOfRulesClass");
  listOfRules.textContent = each;
  unorderList.append(listOfRules);
}
