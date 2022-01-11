import "./style.css";
// import carrierSrc from "../src/assets/images/carrier.svg";
// import destroyerSrc from "../src/assets/images/destroyer.svg";
// import patrolSrc from "../src/assets/images/patrol.svg";
// import submarineSrc from "../src/assets/images/submarine.svg";

// const shipContainer = document.querySelector(".ship-container");
// function addShipsImg() {
//   const div1 = document.createElement("div");
//   const div2 = document.createElement("div");
//   const div3 = document.createElement("div");
//   const div4 = document.createElement("div");
//   const carrierImg = document.createElement("img");
//   const destroyerImg = document.createElement("img");
//   const patrolImg = document.createElement("img");
//   const submarineImg = document.createElement("img");
//   carrierImg.src = carrierSrc;
//   destroyerImg.src = destroyerSrc;
//   patrolImg.src = patrolSrc;
//   submarineImg.src = submarineSrc;
//   div1.classList.add("carrier");
//   // div1.appendChild(carrierImg);
//   // div2.appendChild(destroyerImg);
//   // div3.appendChild(patrolImg);
//   // div4.appendChild(submarineImg);
//   shipContainer.appendChild(div1);
//   shipContainer.appendChild(div2);
//   shipContainer.appendChild(div3);
//   shipContainer.appendChild(div4);
// }
// // addShipsImg();
// const shipsPlacedBoard = document.querySelector(".ships-placed-board");
// const boardContainer = document.querySelector(".board-container");
// const shipsContainer = document.querySelector(".ships-container");
// let selectedShip = null;
// let type = null;
// const cells = document.querySelectorAll(".grid-cell");

// shipsContainer.addEventListener("click", (e) => {
//   let ship = e.target.classList;

//   if (ship.contains("ship")) {
//     selectedShip = e.target;
//     type = e.target.classList[0];
//     console.log(selectedShip);
//   }
// });
// cells.forEach((cell) => {
//   cell.addEventListener("click", (e) => {
//     let spot = e.target.dataset.id;

//     console.log(type);
//     if (selectedShip != null) {
//       console.log(spot[0]);
//       let placedShip = createShipDom(spot, type);
//       shipsPlacedBoard.appendChild(placedShip);
//     }
//   });
// });

// function createShipDom(name, head, length, direction) {
//   const div = document.createElement("div");
//   const idx = head.toString();
//   if (direction === "horizontal") {
//     switch (name) {
//       case "carrier":
//         div.classList.add("carrier");
//         div.style.gridRowStart = `${parseInt(idx[0]) + 1}`;
//         div.style.gridRowEnd = `span 1`;
//         div.style.gridColumnStart = `${parseInt(idx[1]) + 1}`;
//         div.style.gridColumnEnd = `span ${length}`;
//         break;
//       case "battleship":
//         div.classList.add("battleship");
//         div.style.gridRowStart = `${parseInt(idx[0]) + 1}`;
//         div.style.gridRowEnd = `span 1`;
//         div.style.gridColumnStart = `${parseInt(idx[1]) + 1}`;
//         div.style.gridColumnEnd = `span ${length}`;
//         break;
//       case "destroyer":
//         div.classList.add("destroyer");
//         div.style.gridRowStart = `${parseInt(idx[0]) + 1}`;
//         div.style.gridRowEnd = `span 1`;
//         div.style.gridColumnStart = `${parseInt(idx[1]) + 1}`;
//         div.style.gridColumnEnd = `span ${length}`;
//         break;
//       case "cruiser":
//         div.classList.add("cruiser");
//         div.style.gridRowStart = `${parseInt(idx[0]) + 1}`;
//         div.style.gridRowEnd = `span 1`;
//         div.style.gridColumnStart = `${parseInt(idx[1]) + 1}`;
//         div.style.gridColumnEnd = `span ${length}`;
//         break;
//       case "submarine":
//         div.classList.add("submarine");
//         div.style.gridRowStart = `${parseInt(idx[0]) + 1}`;
//         div.style.gridRowEnd = `span 1`;
//         div.style.gridColumnStart = `${parseInt(idx[1]) + 1}`;
//         div.style.gridColumnEnd = `span ${length}`;
//         break;
//       case "patrol":
//         div.classList.add("patrol");
//         div.style.gridRowStart = `${parseInt(idx[0]) + 1}`;
//         div.style.gridRowEnd = `span 1`;
//         div.style.gridColumnStart = `${parseInt(idx[1]) + 1}`;
//         div.style.gridColumnEnd = `span ${length}`;
//         break;
//       default:
//         return;
//     }
//   } else if (direction === "vertical") {
//     switch (name) {
//       case "carrier":
//         div.classList.add("carrier");
//         div.style.gridRowStart = `${parseInt(idx[0]) + 1}`;
//         div.style.gridRowEnd = `span 1`;
//         div.style.gridColumnStart = `${parseInt(idx[1]) + 1}`;
//         div.style.gridColumnEnd = `span ${length}`;
//         break;
//       case "battleship":
//         div.classList.add("battleship");
//         div.style.gridRowStart = `${parseInt(idx[0]) + 1}`;
//         div.style.gridRowEnd = `span 1`;
//         div.style.gridColumnStart = `${parseInt(idx[1]) + 1}`;
//         div.style.gridColumnEnd = `span ${length}`;
//         break;
//       case "destroyer":
//         div.classList.add("destroyer");
//         div.style.gridRowStart = `${parseInt(idx[0]) + 1}`;
//         div.style.gridRowEnd = `span 1`;
//         div.style.gridColumnStart = `${parseInt(idx[1]) + 1}`;
//         div.style.gridColumnEnd = `span ${length}`;
//         break;
//       case "cruiser":
//         div.classList.add("cruiser");
//         div.style.gridRowStart = `${parseInt(idx[0]) + 1}`;
//         div.style.gridRowEnd = `span 1`;
//         div.style.gridColumnStart = `${parseInt(idx[1]) + 1}`;
//         div.style.gridColumnEnd = `span ${length}`;
//         break;
//       case "submarine":
//         div.classList.add("submarine");
//         div.style.gridRowStart = `${parseInt(idx[0]) + 1}`;
//         div.style.gridRowEnd = `span 1`;
//         div.style.gridColumnStart = `${parseInt(idx[1]) + 1}`;
//         div.style.gridColumnEnd = `span ${length}`;
//         break;
//       case "patrol":
//         div.classList.add("patrol");
//         div.style.gridRowStart = `${parseInt(idx[0]) + 1}`;
//         div.style.gridRowEnd = `span 1`;
//         div.style.gridColumnStart = `${parseInt(idx[1]) + 1}`;
//         div.style.gridColumnEnd = `span ${length}`;
//         break;
//       default:
//         return;
//     }
//   }

//   return div;
// }
// // Random Button Logic
// const shipArray = [
//   {
//     name: "carrier",
//     length: 5,
//     directions: ["horizontal", "vertical"],
//   },
//   {
//     name: "battleship",
//     length: 5,
//     directions: ["horizontal", "vertical"],
//   },
//   {
//     name: "destroyer",
//     length: 4,
//     directions: ["horizontal", "vertical"],
//   },
//   {
//     name: "cruiser",
//     length: 4,
//     directions: ["horizontal", "vertical"],
//   },
//   {
//     name: "submarine",
//     length: 3,
//     directions: ["horizontal", "vertical"],
//   },
//   {
//     name: "patrol",
//     length: 2,
//     directions: ["horizontal", "vertical"],
//   },
// ];

// const randomButton = document.querySelector(".randomize");
// randomButton.addEventListener("click", (e) => {
//   let randomNumber = generateRandomNumber(0, 99);
//   let randomShip = createShipDom(randomNumber, "ship-type-carrier");
//   shipsPlacedBoard.appendChild(randomShip);
// });
// function generateRandomNumber(max, min) {
//   return Math.floor(Math.random() * (max - min) + min);
// }
// function generateRandomShipPositions(ship) {
//   let randomDirection = generateRandomNumber(1, 0);
//   let currentDirection = ship.directions[randomDirection];
//   switch (direction) {
//     case 0:
//       direction = 1;
//       break;
//     case 1:
//       direction = 10;
//       break;
//     default:
//       return;
//   }

//   let randomStart = Math.abs(
//     Math.floor(
//       Math.random() * computerSquares.length -
//         ship.directions[0].length * direction
//     )
//   );

//   const isTaken = current.some((index) =>
//     computerSquares[randomStart + index].classList.contains("taken")
//   );
//   const isAtRightEdge = current.some(
//     (index) => (randomStart + index) % width === width - 1
//   );
//   const isAtLeftEdge = current.some(
//     (index) => (randomStart + index) % width === 0
//   );

//   if (!isTaken && !isAtRightEdge && !isAtLeftEdge)
//     current.forEach((index) =>
//       computerSquares[randomStart + index].classList.add("taken", ship.name)
//     );
//   else generate(ship);
// }
/// generate board

const generateBoard = (() => {
  const board = document.querySelector(".board-container");

  for (let i = 0; i < 100; i++) {
    let div = document.createElement("div");
    div.classList.add("grid-cell");
    div.dataset.id = i;
    board.appendChild(div);
  }
})();
// lets grab the corresponding ships divs
const shipsContainer = document.querySelectorAll(".ship");
// lets grab the board to be appended to
const boardCells = document.querySelectorAll(".grid-cell");
const rotateBtn = document.querySelector(".rotate");
const board = document.querySelector(".board-container");

// the objective is to append a selected ship into a grid cell
// Id need to select the ship
// id need to select the target grid cell
// id need to set the set the head of my selected ship to the targeted grid cell
// id need to be able to move it from cell to cell

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
board.addEventListener("click", (e) => {
  let cell = e.target.classList.contains("grid-cell");
  if (cell) {
    if (activeShip === null) return;
    if (!valid) return;
    clearShip(activeShip);
    placeShip(activeShip);
  }
  return;
  let idx = parseInt(cell.getAttribute("data-id"));

  // activeShip.body = generateShipBody(
  //   idx,
  //   activeShip.direction,
  //   activeShip.length
  // );

  // console.log(activeShip.body);

  // if (isOutsideBoundary(activeShip)) {
  //   alert("outside boundry");
  //   return;
  // }
  //
  // if (isTaken(activeShip)) {
  //   alert("is taken");
  //   return;
  // }

  // console.log(cell);
});

rotateBtn.addEventListener("click", (e) => {
  if (activeShip == null) return;
  clearShip(activeShip);
  rotateShip();
});
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
  [...boardCells].filter((cell) => {
    let result = cell.classList.contains(ship.name);
    if (result) {
      cell.classList.remove(ship.name);
      cell.classList.remove("taken");
    }
  });
}
function placeShip(ship) {
  ship.body.forEach((cell) => {
    boardCells[cell].classList.add(ship.name);
    boardCells[cell].classList.add("taken");
  });
}
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
    if (boardCells[cell].classList.contains("taken")) {
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
// function biggerThan99(coordinate) {
//   return coordinate.some((element) => element > 99);
// }
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
boardCells.forEach((cell) => {
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
function addHover(ship) {
  ship.body.forEach((cell) => {
    boardCells[cell].classList.add("hover");
  });
}
function clearHover() {
  [...boardCells].filter((cell) => {
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
