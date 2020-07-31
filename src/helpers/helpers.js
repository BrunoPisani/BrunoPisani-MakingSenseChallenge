export const findStart = (matrix) => {
    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix[r].length; c++) {
            if(matrix[r][c] === 'S') {
                return {col: c, row: r };
            }
        }
    }
    return {col: -1, row: -1};
}

export const isFreeToMove = (board, col, row) => {
    if (board[row]) {
        if (board[row][col] && board[row][col] !== 'W') {
            return true;
        }
    }
    return false;
}

export const isGameWon = (board, { col, row }) => {
    if(board[row][col] === 'E') {
        return true;
    }
    return false;
}
