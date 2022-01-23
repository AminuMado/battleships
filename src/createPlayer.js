import { createFleet, ships } from "./helpers.js";

function createPlayer(name) {
  let fleet = createFleet(ships);
  const getName = () => name;
  const getFleet = () => fleet;
  const resetFleet = () => (fleet = createFleet(ships));
  const attack = (coord, board) => board.receiveAttack(coord);
  const autoAttack = (board) => {
    const randomSpot = Math.floor(Math.random() * 99);
    const enemyBoard = board.getGameBoard();
    const cell = enemyBoard[randomSpot];
    if (cell === 0 || cell === 1) {
      // tries again until a valid cell is picked
      autoAttack(board);
    } else {
      // attacks a valid cell
      board.receiveAttack(randomSpot);
    }
  };

  return { attack, autoAttack, getName, getFleet, resetFleet };
}
export { createPlayer };
