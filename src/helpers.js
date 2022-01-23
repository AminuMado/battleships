import { createShip } from "./ship";

// CONSTANTS
const ships = [
  { name: "cruiser", length: 5 },
  { name: "battleship", length: 4 },
  { name: "destroyer", length: 3 },
  { name: "submarine", length: 3 },
  { name: "patrol", length: 2 },
];

// FUNCTIONS
//randm number
let randomDirection = Math.floor(Math.random() * 2);
let randomSpot = Math.floor(Math.random() * 99);
const createFleet = (ships) => {
  const fleet = [];
  ships.forEach((ship) => {
    let s = createShip(ship.name, ship.length);
    fleet.push(s);
  });
  return fleet;
};

export { createFleet, ships, randomSpot, randomDirection };
