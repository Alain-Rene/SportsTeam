//Program that creates a Player interface and a Team class 
// that work together in TypeScript

import Player from "./Player";
import { Team } from "./Team"

let players: Player[] = [
    {name: "Alain", jersey: 5, active: false},
    {name: "DeAngelo", jersey: 13, active: true},
    {name: "David G", jersey: 47, active: true},
    {name: "David B", jersey: 29, active: true},
    {name: "Martina", jersey: 52, active: true},
];

// Testing methods
let squad = new Team("Code Crusaders", players);
console.log(squad.getPlayerCount());
console.log(squad.logActivePlayers())

squad.addPlayer({name: "Wren", jersey: 76, active: true});
console.log(squad.getPlayerCount());
squad.removePlayer(3);

squad.addPlayer({name: "Jimmy", jersey: 3, active: true});
console.log(squad.logActivePlayers());

squad.removePlayerByName("Jimmy");
squad.setActive(0, true);

console.log(squad.logActivePlayers());