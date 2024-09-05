import Player from "./Player";

//team class
export class Team{
    //Properties
    players: Player[];
    teamName: string;

    //Constructor
    constructor(teamName: string, players: Player[]){
        this.teamName = teamName;
        this.players = players;
    }

    addPlayer(newPlayer: Player):void{
        this.players.push(newPlayer);
    }

    removePlayer(playerIndex: number):void{
        this.players.splice(playerIndex, 1);
    }

    setActive(playerIndex: number, activeStatus: boolean):void{
        this.players[playerIndex].active = activeStatus;
    }

    getPlayerCount():number{
        return this.players.length;
    }

    logActivePlayers():void{
        this.players.forEach(p => {
            if (p.active === true){
                console.log(`Name: ${p.name} | Jersey: ${p.jersey} Active? ${p.active}`);
            }
        }   
        );
    }

    getActivePlayers():Player[]{
        let activePlayers: Player[] = [];
        this.players.forEach(p => {
            if (p.active === true){
                activePlayers.push(p)
            }
        }   
        );
        return activePlayers;
    }

    removePlayerByName(playerName: string):void{
        let playerIndex: number;
        
        playerIndex = this.players.findIndex(player => player.name === playerName);
        
        if(playerIndex === -1){
            console.log(`No player was found with the name ${playerName}`);
        } 
        else{
            this.players.splice(playerIndex, 1);
        }
    }
    // sortByName():void{
    //     if ()
    // }
}