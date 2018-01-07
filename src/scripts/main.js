import GameField from './GameField';
import GameState from './GameState';

const main = () => {
    const players = ['user', 'computer']; 
    const app = document.getElementById('app');
    GameState.placeShips(players[0]);
    GameState.placeShips(players[1]);
    app.appendChild(GameField(players[0]));
    app.appendChild(GameField(players[1]));

    GameState.startGame();
};

main();