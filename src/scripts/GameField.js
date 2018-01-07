import Cell from './Cell';
import GameState from './GameState';

const GameField = (type) => {

    const gameField = document.createElement('div');
    gameField.className = `game-field ${type}`;
    

    let cells = GameState.cells[type].map((row, x) =>
        row.map((cell, y) => {
            let borders = '';
            if (cell.correspondingShip) {
                if (x !== 0 && !GameState.cells[type][x - 1][y].correspondingShip)
                    borders += 'top ';
                if (y !== 9 && !GameState.cells[type][x][y + 1].correspondingShip)
                    borders += 'right ';
                if (x !== 9 && !GameState.cells[type][x + 1][y].correspondingShip)
                    borders += 'bottom ';
                if (y !== 0 && !GameState.cells[type][x][y - 1].correspondingShip)
                    borders += 'left ';
            }
            return new Cell(cell.correspondingShip, false, null, type, true, borders);
        })
    );

    cells.map((row) => {
        row.map((cell) => {
            gameField.append(cell.htmlNode);
        })
    });

    return (
        gameField
    );

};

export default GameField;