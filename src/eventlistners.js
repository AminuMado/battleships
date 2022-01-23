import { computerSetup } from "./computer";
import { dom } from "./dom";
import { playerSetup } from "./player";
let p1;
let p2;
//ships
const events = () => {
  const ships = document.querySelectorAll(".ship");
  ships.forEach((ship, index) => {
    ship.addEventListener("click", (e) => {
      dom.activeShip = dom.getFleet()[index];
      dom.ship.switchActiveShip(index);
    });
  });

  //boards
  //handles the ship placement on click event
  let valid = false;
  const p1BoardCells = document.querySelectorAll(".p1-grid-cell");
  p1BoardCells.forEach((cell) => {
    cell.addEventListener("click", () => {
      if (dom.activeShip === null) return;
      if (!valid) return;
      dom.board.clearShip(dom.activeShip, p1BoardCells);
      dom.board.placeShip(dom.activeShip, p1BoardCells);
    });
  });
  //handles the hover effect event
  p1BoardCells.forEach((cell) => {
    cell.addEventListener("mouseover", (e) => {
      if (dom.activeShip === null) return;
      let idx = parseInt(cell.getAttribute("data-id"));
      dom.activeShip.buildBody(idx, dom.direction);
      dom.board.clearHover(p1BoardCells);
      if (
        dom.board.isOutsideBoundary(dom.activeShip) ||
        dom.board.isTaken(dom.activeShip, p1BoardCells)
      ) {
        cell.style.cursor = "not-allowed";
        valid = false;
        return;
      }
      dom.board.addHover(dom.activeShip, p1BoardCells);
      valid = true;
    });
  });
  // This clears the hover effect if you leave the board
  const p1Board = document.querySelector(".p1-board");
  p1Board.addEventListener("mouseleave", (e) => {
    dom.board.clearHover(p1BoardCells);
  });
  // this handles attacking the enemy board
  const p2BoardCells = document.querySelectorAll(".p2-grid-cell");
  p2BoardCells.forEach((cell) => {
    cell.addEventListener("click", (e) => {
      let coordinate = parseInt(e.target.getAttribute("data-id"));
      //insert player attack function here
    });
  });

  //randomBtn
  const randomBtn = document.querySelector(".random");
  randomBtn.addEventListener("click", () => {
    dom.getFleet().forEach((ship) => {
      dom.board.randomize(ship, p1BoardCells);
      dom.board.clearShip(ship, p1BoardCells);
      dom.board.placeShip(ship, p1BoardCells);
    });
  });

  // rotatebtn
  const rotateBtn = document.querySelector(".rotate");
  rotateBtn.addEventListener("click", () => {
    dom.direction = dom.direction == "horizontal" ? "vertical" : "horizontal";
  });

  // startbtn
  const startBtn = document.querySelector(".start");
  startBtn.addEventListener("click", function (e) {
    //add startbtn function
    dom.start();
    p1 = playerSetup();
    p2 = computerSetup();
  });

  //startpage
  const startPageStartBtn = document.querySelector(".start-btn");
  const startPage = document.querySelector(".start-page");
  startPageStartBtn.addEventListener("click", (e) => {
    // reset();
    startPage.classList.remove("active");
  });

  // menu
  const menuBtn = document.querySelector(".menu-btn");
  const menuOverlay = document.querySelector(".overlay-menu");
  const menuPage = document.querySelector(".menu-page");
  menuBtn.addEventListener("click", (e) => {
    menuOverlay.classList.add("active");
    menuPage.classList.add("active");
  });
  const resumeBtn = document.querySelector(".resume-btn");
  resumeBtn.addEventListener("click", () => {
    menuOverlay.classList.remove("active");
    menuPage.classList.remove("active");
  });
  const restartBtn = document.querySelector(".restart-btn");
  restartBtn.addEventListener("click", () => {
    window.location.reload();
  });

  // result

  const playAgainBtn = document.querySelector(".play-again");
  playAgainBtn.addEventListener("click", () => {
    window.location.reload();
  });
  const p2Board = document.querySelector(".p2-board");
  p2Board.addEventListener("click", (e) => {
    let cell = e.target;
    if (cell.classList.contains("p2-grid-cell")) {
      let idx = parseInt(cell.getAttribute("data-id"));
      p1.player.attack(idx, p2.computerBoard);
      p2.computer.autoAttack(p1.playerBoard);
      dom.render("p1", p1.playerBoard.getGameBoard());
      dom.render("p2", p2.computerBoard.getGameBoard());
      if (p1.playerBoard.allShipsSunk()) {
        const resultOverlay = document.querySelector(".overlay-result");
        const resultPage = document.querySelector(".result-page");
        const resultMessage = document.querySelector(".result-message");
        resultOverlay.classList.add("active");
        resultPage.classList.add("active");
        resultMessage.textContent = "You Lose";
      }
      if (p2.computerBoard.allShipsSunk()) {
        const resultOverlay = document.querySelector(".overlay-result");
        const resultPage = document.querySelector(".result-page");
        const resultMessage = document.querySelector(".result-message");
        resultOverlay.classList.add("active");
        resultPage.classList.add("active");
        resultMessage.textContent = "You Win";
      }
    }
  });
};
export { events };
