// import '../styles/styles.scss';
import GameField from './GameField';
import GameState from './GameState';

const main = () => {

    const app = document.getElementById('app');
    app.append(GameField('computer'));
    app.append(GameField('user'));
    GameState.startGame();
    console.log(GameState.shootingTurn);
};

main();