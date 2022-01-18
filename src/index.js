import "./style.css";
import { createShip } from "./ship";
import { createGameBoard } from "./gameboard";
import { createPlayer } from "./player";

let playerBoard;
let computerBoard;
// board Dimensions
const boardWidth = 10;
const boardHeight = 10;
const generateBoard = (() => {
  const p1Board = document.querySelector(".p1-board");
  let p2Board = document.querySelector(".p2-board");
  for (let i = 0; i < 100; i++) {
    let cell1 = document.createElement("div");
    let cell2 = document.createElement("div");

    cell1.classList.add("p1-grid-cell");
    cell1.dataset.id = i;
    cell2.classList.add("p2-grid-cell");
    cell2.dataset.id = i;
    p1Board.appendChild(cell1);
    p2Board.appendChild(cell2);
  }
})();

const shipsContainer = document.querySelectorAll(".ship");
// lets grab the board to be appended to
const p1BoardCells = document.querySelectorAll(".p1-grid-cell");
console.log(p1BoardCells);
const p2BoardCells = document.querySelectorAll(".p2-grid-cell");
const rotateBtn = document.querySelector(".rotate");
const p1Board = document.querySelector(".p1-board");
let direction = "horizontal";
// select a ship
let activeShip = null;

// set event listner on ships
let playerShips = [
  createShip("cruiser", 5),
  createShip("battleship", 4),
  createShip("destroyer", 3),
  createShip("submarine", 3),
  createShip("patrol", 2),
];
shipsContainer.forEach((ship, index) => {
  ship.addEventListener("click", (e) => {
    activeShip = playerShips[index];
    switchActiveShip(index);
    console.log(activeShip);
  });
});
// set event listner on grids
let valid = false;
p1Board.addEventListener("click", (e) => {
  let cell = e.target.classList.contains("p1-grid-cell");
  if (cell) {
    if (activeShip === null) return;
    if (!valid) return;
    clearShip(activeShip, p1BoardCells);
    placeShip(activeShip, p1BoardCells);
  }
  return;
});
// event
rotateBtn.addEventListener("click", (e) => {
  direction = direction == "horizontal" ? "vertical" : "horizontal";
});
//funtions
// not needed
// function rotateShip() {
//   activeShip.direction =
//     activeShip.direction == "horizontal" ? "vertical" : "horizontal";
// }
function clearActiveShip() {
  shipsContainer.forEach((ship) => ship.classList.remove("active"));
}
function switchActiveShip(index) {
  clearActiveShip();
  shipsContainer[index].classList.add("active");
}
function clearShip(ship, board) {
  let name = ship.getName();
  [...board].filter((cell) => {
    let result = cell.classList.contains(name);
    if (result) {
      cell.classList.remove(name);
      cell.classList.remove("taken");
    }
  });
}
function placeShip(ship, board) {
  let name = ship.getName();
  let body = ship.getBody();
  body.forEach((cell) => {
    console.log(name);
    console.log(body);
    board[cell].classList.add(`${name}`);
    board[cell].classList.add("taken");
  });
}

function randomize(ship, board) {
  let randomDirection = Math.floor(Math.random() * 2);
  let randomSpot = Math.floor(Math.random() * 99);
  if (randomDirection === 0) {
    randomDirection = "horizontal";
  } else randomDirection = "vertical";

  ship.buildBody(randomSpot, randomDirection);

  if (isOutsideBoundary(ship)) {
    randomize(ship, board);
    return;
  }
  if (isTaken(ship, board)) {
    randomize(ship, board);
    return;
  }
}
function isTaken(ship, board) {
  let body = ship.getBody();
  let length = ship.getLength();
  let result = false;
  for (let i = 0; i < length; i++) {
    let cell = body[i];
    if (board[cell].classList.contains("taken")) {
      result = true;
      break;
    }
  }
  return result;
}
function isOutsideBoundary(ship) {
  let body = ship.getBody();
  let length = ship.getLength();
  let result = false;
  for (let i = 0; i < length - 1; i++) {
    if (body[i] % 10 === 9) {
      result = true;
      break;
    }
  }
  for (let i = 0; i < length; i++) {
    if (body[i] > 99) {
      result = true;
      break;
    }
  }
  return result;
}
// random button
const randomBtn = document.querySelector(".random");
randomBtn.addEventListener("click", (e) => {
  playerShips.forEach((ship) => {
    randomize(ship, p1BoardCells);
    clearShip(ship, p1BoardCells);
    placeShip(ship, p1BoardCells);
  });
});

// to take the ship body array
// add a background color to the affected spots
// if its valid if its not
// do nothing
// event lisner on grids
p1BoardCells.forEach((cell) => {
  cell.addEventListener("mouseover", (e) => {
    if (activeShip === null) return;
    console.log(e.currentTarget);
    let idx = parseInt(cell.getAttribute("data-id"));
    activeShip.buildBody(idx, direction);
    clearHover();
    console.log(activeShip.getBody());
    if (isOutsideBoundary(activeShip)) {
      cell.style.cursor = "not-allowed";
      valid = false;
      return;
    }

    if (isTaken(activeShip, p1BoardCells)) {
      cell.style.cursor = "not-allowed";
      valid = false;
      return;
    }
    addHover(activeShip);
    valid = true;
  });
});
p1Board.addEventListener("mouseleave", (e) => {
  clearHover();
});

function addHover(ship) {
  let body = ship.getBody();
  body.forEach((cell) => {
    p1BoardCells[cell].classList.add("hover");
  });
}
function clearHover() {
  [...p1BoardCells].filter((cell) => {
    let hover = cell.classList.contains("hover");
    let cursor = cell.style.cursor;
    if (hover) {
      cell.classList.remove("hover");
    }
    if (cursor === "not-allowed") {
      cell.style.cursor = "pointer";
    }
  });
}
/// start button
const startBtn = document.querySelector(".start");
startBtn.addEventListener("click", startGame);
function startGame() {
  const p1BoardContainer = document.querySelector(".p1-board-container");
  const p2BoardContainer = document.querySelector(".p2-board-container");
  const shipSelectionContainer = document.querySelector(
    ".ship-selection-container"
  );
  const boardInfo = document.querySelector(".board-info");
  console.log(boardInfo);
  p1BoardContainer.classList.add("disable");
  p2BoardContainer.classList.add("show");
  shipSelectionContainer.classList.add("inactive");
  boardInfo.classList.remove("inactive");
  activeShip = null;
  playerBoard = playerSetup();
  console.log(playerBoard.getGameBoard());
  computerBoard = computerSetup();
}

// The setups below creates the players and their boards after
// the function calls for them we can finally play the game
function playerSetup() {
  const player = createPlayer("Player", "human", boardHeight, boardWidth);
  const playerBoard = player.getGameBoard();
  playerShips.forEach((ship) => playerBoard.placeShip(ship));
  return playerBoard;
}
function computerSetup() {
  // you should be an object and have a file for yourself with an init method and attack method
  const computer = createPlayer("Player2", "computer", boardWidth, boardHeight);
  const computerBoard = computer.getGameBoard();
  const computerShips = [
    createShip("cruiser", 5),
    createShip("battleship", 4),
    createShip("destroyer", 3),
    createShip("submarine", 3),
    createShip("patrol", 2),
  ];
  // this generates the ships at random locations
  computerShips.forEach((ship) => {
    randomize(ship, p2BoardCells);
    addTaken(ship, p2BoardCells);
  });
  //this means your ships arrays have a body in them ready to placed on a board
  computerShips.forEach((computerShip) =>
    computerBoard.placeShip(computerShip)
  );
  clearTaken(p2BoardCells);
  function addTaken(ship, board) {
    const body = ship.getBody();
    body.forEach((cell) => {
      board[cell].classList.add("taken");
    });
  }
  function clearTaken(board) {
    board.forEach((cell) => {
      cell.classList.remove("taken");
    });
  }
  return computerBoard;
}

// how to attack is by selecting an index and calling the
// recieve attack function from the opposing board
// for the ai they select a spot thats not attacked yet
// and attack that spot

// for the player you select a spot on the opponenet board
// start with the input
const p2Board = document.querySelector(".p2-board");
p2Board.addEventListener("click", (e) => {
  let cell = e.target;

  let idx = parseInt(cell.getAttribute("data-id"));
  // i want to be able to call recieveAttack on the gameboard
  computerBoard.receiveAttack(idx);
  computerAttack();
  render();
  console.log(computerBoard.getGameBoard());
  sunkShip(computerBoard);
  sunkShip(playerBoard);
  gameOver(computerBoard);
  gameOver(playerBoard);
});
function render() {
  computerBoard.getGameBoard().forEach((cell, index) => {
    if (cell == 0) {
      //miss

      p2BoardCells[index].classList.add("miss");
    } else if (cell === 1) {
      //hit

      p2BoardCells[index].classList.add("hit");
    }
  });
  playerBoard.getGameBoard().forEach((cell, index) => {
    if (cell == 0) {
      //miss

      p1BoardCells[index].classList.add("miss");
    } else if (cell === 1) {
      //hit

      p1BoardCells[index].classList.add("hit");
    }
  });
}
function computerAttack() {
  let randomSpot = Math.floor(Math.random() * 99);
  let board = playerBoard.getGameBoard();
  if (board[randomSpot] === 0 || board[randomSpot] === 1) {
    computerAttack();
  } else playerBoard.receiveAttack(randomSpot);
}

// at the end of the day i want this file to just be
// an object with just fucntions in them generateBoard() etc etc

/// implement gameOver
function gameOver(board) {
  if (board.allShipsSunk()) alert("gameover");
}

function sunkShip(board) {
  let ships = board.getShips();
  let count = 5;
  for (const ship of ships) {
    if (ship.isSunk()) {
      count--;
    }
  }
  console.log(count);
}
