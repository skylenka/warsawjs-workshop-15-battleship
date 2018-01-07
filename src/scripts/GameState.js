import ShipSet from './ShipSet'

class GameState {

    constructor () {
        this.shootingTurn = null;
        this.shipSet = {
            user: null,
            computer: null
        };
        this.cells = {
            user: [...new Array(10).keys()].map(() => {
                [...(new Array(10)).keys()].map(() => {
                    ({
                        correspondingShip: null,
                        attempted: false,
                    })
                })
            }),
            computer: [...new Array(10).keys()].map(() => {
            [...(new Array(10)).keys()].map(() => {
                ({
                    correspondingShip: null,
                    attempted: false,
                })
                })
            })
        };
    };
    placeShips(player) {
        let ships = new ShipSet();
        this.shipSet[player] = ships;
        ships.ships.map((ship) => {
            ship.getCompartments().map((compartment) => {
                this.cells[player][compartment.x][compartment.y].correspondingShip = ship;
            });
        });
    }; 

    startGame() {
        let players = ['user', 'computer'];
        this.shootingTurn = players[Math.round(Math.random())];
    };

    
};
export default new GameState();
