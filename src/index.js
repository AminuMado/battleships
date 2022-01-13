import "./style.css";

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
const rotateBtn = document.querySelector(".rotate");
const p1Board = document.querySelector(".p1-board");

// select a ship
let activeShip = null;

// set event listner on ships
let ships = [
  { name: "cruiser", length: 5, direction: "horizontal", body: [] },
  { name: "battleship", length: 4, direction: "horizontal", body: [] },
  { name: "destroyer", length: 3, direction: "horizontal", body: [] },
  { name: "submarine", length: 3, direction: "horizontal", body: [] },
  { name: "patrol", length: 2, direction: "horizontal", body: [] },
];
shipsContainer.forEach((ship, index) => {
  ship.addEventListener("click", (e) => {
    activeShip = ships[index];
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
    clearShip(activeShip);
    placeShip(activeShip);
  }
  return;
});
// event
rotateBtn.addEventListener("click", (e) => {
  if (activeShip == null) return;
  clearShip(activeShip);
  rotateShip();
});
//funtions
function rotateShip() {
  activeShip.direction =
    activeShip.direction == "horizontal" ? "vertical" : "horizontal";
}
function clearActiveShip() {
  shipsContainer.forEach((ship) => ship.classList.remove("active"));
}
function switchActiveShip(index) {
  clearActiveShip();
  shipsContainer[index].classList.add("active");
}
function clearShip(ship) {
  [...p1BoardCells].filter((cell) => {
    let result = cell.classList.contains(ship.name);
    if (result) {
      cell.classList.remove(ship.name);
      cell.classList.remove("taken");
    }
  });
}
function placeShip(ship) {
  ship.body.forEach((cell) => {
    p1BoardCells[cell].classList.add(ship.name);
    p1BoardCells[cell].classList.add("taken");
  });
}
//to be replaced with the build body function in ship.js
function generateShipBody(head, direction, length) {
  let body = [];
  let valid = false;
  if (direction === "horizontal") {
    for (let i = 0; i < length; i++) {
      let coordinate = [head + i];
      body.push(coordinate);
      valid = true;
    }
  } else
    for (let i = 0; i < length; i++) {
      let coordinate = [head + i * 10];
      body.push(coordinate);
      valid = true;
    }

  return body;
}
function isTaken(ship) {
  let result = false;
  for (let i = 0; i < ship.length; i++) {
    let cell = ship.body[i];
    if (p1BoardCells[cell].classList.contains("taken")) {
      result = true;
      break;
    }
  }
  return result;
}
function isOutsideBoundary(ship) {
  let result = false;
  for (let i = 0; i < ship.length - 1; i++) {
    if (ship.body[i] % 10 === 9) result = true;
  }
  for (let i = 0; i < ship.length; i++) {
    if (ship.body[i] > 99) result = true;
  }
  return result;
}

function randomize(ship) {
  let randomDirection = Math.floor(Math.random() * 2);
  let randomSpot = Math.floor(Math.random() * 99);
  if (randomDirection === 0) {
    randomDirection = "horizontal";
  } else randomDirection = "vertical";
  ship.direction = randomDirection;
  ship.body = generateShipBody(randomSpot, ship.direction, ship.length);

  if (isOutsideBoundary(ship)) {
    randomize(ship);
    return;
  }
  if (isTaken(ship)) {
    randomize(ship);
    return;
  }
  clearShip(ship);
  placeShip(ship);

  console.log(randomDirection);
}
// random button
const randomBtn = document.querySelector(".random");
randomBtn.addEventListener("click", (e) => {
  ships.forEach((ship) => randomize(ship));
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
    activeShip.body = generateShipBody(
      idx,
      activeShip.direction,
      activeShip.length
    );
    clearHover();
    if (isOutsideBoundary(activeShip)) {
      cell.style.cursor = "not-allowed";
      valid = false;
      return;
    }

    if (isTaken(activeShip)) {
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
  ship.body.forEach((cell) => {
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
}

/// now we are at the computer board
// wee need to play
