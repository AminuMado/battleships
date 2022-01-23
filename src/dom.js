//This handles all the dom stuff

import { createFleet, ships } from "./helpers";

const dom = (() => {
  //constants
  const p1Board = document.querySelector(".p1-board");
  const p2Board = document.querySelector(".p2-board");
  const fleet = createFleet(ships);
  let direction = "horizontal";
  let activeShip = null;
  const generateBoard = (width, height) => {
    const boardSize = width * height;
    for (let i = 0; i < boardSize; i++) {
      let cell1 = document.createElement("div");
      let cell2 = document.createElement("div");
      cell1.classList.add("p1-grid-cell");
      cell1.dataset.id = i;
      cell2.classList.add("p2-grid-cell");
      cell2.dataset.id = i;
      p1Board.appendChild(cell1);
      p2Board.appendChild(cell2);
    }
  };
  const getFleet = () => fleet;
  //ship container
  const ship = (() => {
    //this should be an initialized function
    const ships = document.querySelectorAll(".ship");
    ships.forEach((ship, index) => {
      ship.addEventListener("click", (e) => {
        activeShip = fleet[index];
        switchActiveShip(index);
      });
    });
    const clearActiveShip = () => {
      ships.forEach((ship) => ship.classList.remove("active"));
    };
    const switchActiveShip = (index) => {
      clearActiveShip();
      ships[index].classList.add("active");
    };
    // const rotate = () => {
    //   const rotateBtn = document.querySelector(".rotate");
    //   rotateBtn.addEventListener("click", (e) => {
    //     direction = direction == "horizontal" ? "vertical" : "horizontal";
    //   });
    // };
    return { clearActiveShip, switchActiveShip };
  })();
  const board = (() => {
    const clearShip = (ship, board) => {
      let name = ship.getName();
      [...board].filter((cell) => {
        let result = cell.classList.contains(name);
        if (result) {
          cell.classList.remove(name);
          cell.classList.remove("taken");
        }
      });
    };
    const placeShip = (ship, board) => {
      let name = ship.getName();
      let body = ship.getBody();
      body.forEach((cell) => {
        board[cell].classList.add(`${name}`);
        board[cell].classList.add("taken");
      });
    };
    const isTaken = (ship, board) => {
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
    };
    const isOutsideBoundary = (ship) => {
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
    };
    const randomize = (ship, board) => {
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
    };
    const addHover = (ship, board) => {
      let body = ship.getBody();
      body.forEach((cell) => {
        board[cell].classList.add("hover");
      });
    };
    const clearHover = (board) => {
      [...board].filter((cell) => {
        let hover = cell.classList.contains("hover");
        let cursor = cell.style.cursor;
        if (hover) {
          cell.classList.remove("hover");
        }
        if (cursor === "not-allowed") {
          cell.style.cursor = "pointer";
        }
      });
    };
    return {
      clearShip,
      placeShip,
      addHover,
      clearHover,
      randomize,
      isOutsideBoundary,
      isTaken,
    };
  })();
  const start = () => {
    const p1BoardContainer = document.querySelector(".p1-board-container");
    const p2BoardContainer = document.querySelector(".p2-board-container");
    const shipSelectionContainer = document.querySelector(
      ".ship-selection-container"
    );
    const boardInfo = document.querySelector(".board-info");
    p1BoardContainer.classList.add("disable");
    p2BoardContainer.classList.add("show");
    shipSelectionContainer.classList.add("inactive");
    boardInfo.classList.remove("inactive");
    activeShip = null;
  };
  const render = (player, board) => {
    const p1BoardCells = document.querySelectorAll(".p1-grid-cell");
    const p2BoardCells = document.querySelectorAll(".p2-grid-cell");
    if (player === "p1") {
      board.forEach((cell, index) => {
        if (cell == 0) {
          //miss
          p1BoardCells[index].classList.add("miss");
        } else if (cell === 1) {
          //hit
          p1BoardCells[index].classList.add("hit");
        }
      });
    } else if (player === "p2") {
      board.forEach((cell, index) => {
        if (cell == 0) {
          //miss
          p2BoardCells[index].classList.add("miss");
        } else if (cell === 1) {
          //hit
          p2BoardCells[index].classList.add("hit");
        }
      });
    }
  };
  return {
    generateBoard,
    activeShip,
    ship,
    getFleet,
    start,
    board,
    direction,
    render,
  };
})();
export { dom };
