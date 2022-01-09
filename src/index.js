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

// lets grab the corresponding ships divs
const shipsContainer = document.querySelectorAll(".ship");
// lets grab the board to be appended to
const boardCells = document.querySelectorAll(".grid-cell");
const rotateBtn = document.querySelector(".rotate");

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
  { name: "destroyer", length: 4, direction: "horizontal", body: [] },
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
boardCells.forEach((cell) => {
  cell.addEventListener("click", (e) => {
    let idx = parseInt(cell.getAttribute("data-id"));
    if (activeShip === null) return;

    clearShip();
    generateShipBody(idx, activeShip.direction, activeShip.length);
    placeShip(activeShip.body);
    console.log(cell);
  });
});
rotateBtn.addEventListener("click", (e) => {
  if (activeShip == null) return;
  clearShip();
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
function clearShip() {
  [...boardCells].filter((cell) => {
    let result = cell.classList.contains(activeShip.name);
    if (result) {
      cell.classList.remove(activeShip.name);
      cell.classList.remove("taken");
    }
  });
}
function placeShip(coordinates) {
  coordinates.forEach((cell) => {
    boardCells[cell].classList.add(activeShip.name);
    boardCells[cell].classList.add("taken");
  });
}
function generateShipBody(head, direction, length) {
  let body = [];
  let valid = false;
  if (direction === "horizontal") {
    for (let i = 0; i < length; i++) {
      body.push([head + i]);
      valid = true;
    }
  } else
    for (let i = 0; i < length; i++) {
      body.push([head + i * 10]);
      valid = true;
    }
  if (valid) activeShip.body = body;
  return valid;
}
function isTaken(coordinate) {
  let taken = coordinate.some((cell) => {
    boardCells[cell].classList.contains("taken");
  });
}
function isOutsideBoundary(coordinate, length) {
  let;
}
const isTaken = activeShip.body.some((index) =>
  [randomStart + index].classList.contains("taken")
);
const isAtRightEdge = current.some(
  (index) => (randomStart + index) % width === width - 1
);
const isAtLeftEdge = current.some(
  (index) => (randomStart + index) % width === 0
);

// Generate at random
// randomize direction
// randomize head
// check valid spot
// i want a visual aid that shows where you want your ship to be at
// i want to add the ship properties to the grid cell itself
// i want to change the styling of the grid cell
// i can have a ships object that stores all the information for creating a ship on the ui
// eg { name : carrier,
// head: ??
// direction: ??
// length: 5}
// ships.forEach((ship)=>{
//   createShip(ship.head,ship.direction,ship.length)
// })
