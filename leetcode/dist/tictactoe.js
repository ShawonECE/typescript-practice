"use strict";
const tictactoe = (moves) => {
    const length = moves.length;
    if (length < 5) {
        return "Pending";
    }
    const checkRow = (grid) => {
        for (const row of grid) {
            if (!row.includes('') && row[0] === row[1] && row[1] === row[2]) {
                return true;
            }
        }
        return false;
    };
    const checkCol = (grid) => {
        for (let i = 0; i < 3; i++) {
            if (grid[0][i] !== '' && grid[1][i] !== '' && grid[2][i] !== '' && grid[0][i] === grid[1][i] && grid[1][i] === grid[2][i]) {
                return true;
            }
        }
        return false;
    };
    const checkDiagonal = (grid) => {
        if (grid[0][0] !== '' && grid[1][1] !== '' && grid[2][2] !== '' && grid[0][0] === grid[1][1] && grid[1][1] === grid[2][2]) {
            return true;
        }
        if (grid[0][2] !== '' && grid[1][1] !== '' && grid[2][0] !== '' && grid[0][2] === grid[1][1] && grid[1][1] === grid[2][0]) {
            return true;
        }
        return false;
    };
    const grid = [];
    for (let i = 0; i < 3; i++) {
        grid[i] = [];
        for (let j = 0; j < 3; j++) {
            grid[i][j] = '';
        }
    }
    for (let i = 0; i < length; i++) {
        let char = i % 2 === 0 ? 'X' : '0';
        grid[moves[i][0]][moves[i][1]] = char;
        if (checkRow(grid) || checkCol(grid) || checkDiagonal(grid)) {
            return i % 2 === 0 ? 'A' : 'B';
        }
    }
    return length === 9 ? 'Draw' : 'Pending';
};
const moves = [[2, 2], [1, 2], [2, 1], [1, 1], [2, 0]];
console.log(tictactoe(moves));
