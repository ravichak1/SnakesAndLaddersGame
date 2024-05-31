# Snakes and Ladders Game using JS

<p align='center'>
<img src="./images/Screenshot 2024-05-30 002446.png">
<p>

<details>
  <summary>
   <h2>Learning Goals</h2>
  </summary>

This exercise allows me to practice and apply the concepts and techniques learned in class.

While building this project I have learned.

- Developed a game using JavaScript .
- Used CSS and styled the html elements.
- Mainly this project is build using Flex-Box
- Used some of Higher Order Functions like forEach,some,find...
- Used display property to make web page visible as new page
- used input method to get data from the user

  <br>
  <hr>

</details>
<br>

## Introduction

Snakes and Ladders is an ancient game. The rule is simple whoever reach the 100th box first they are the winner of this game.

Here I made an input from the user to take a number of players to play and select the color they want from (Green, Blue, Red and Yellow). For the obstacles they are some snakes. The role of the snake is if your in the cell where snake face display then you will be eaten by snake and move down to the tail cell. Likewise I added a ladder which help to climbs.

Here I have added all the files and if you like to add any feature you can...

<br>

## Why I choose this game

It seems like an easy one from viewer point but developing from the scratch made too much of complexity, a lot of DOM manipulation and higher order functions.

## Key features

- Player moves down if the player in the snake head cell
- Player moves up if the player in the ladder cell
- used `Math.random()` for dice result
- used user input value for number of players 1 > player < 5 
- player can select their color from ```['green','red','yellow','blue']```
- used some popup for displaying the player was eaten by snake or climbing in ladder

```JavaScript
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
```
## Here is the link for the Game

## <a href="https://ravichak1.github.io/miniProject1/">Here you go </a>

## You can Make your Own 

- Fork this repo
- Clone this repo

<br>

