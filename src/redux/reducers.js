import { MOVE, GO_TO_LEVEL } from '../redux/actionTypes';
import { DOWN, UP, RIGHT, LEFT} from '../constants/directions';
import { levels } from '../constants/levels';
import { findStart, isFreeToMove, isGameWon } from '../helpers/helpers';

export const initialState = {
    levels: levels,
    level: 0,
    playerCell: findStart(levels[0].board),
    movesLeft: levels[0].moves,
    gameWon: false,
    gameLost: false
}

export const reducer = (state = initialState, action = {type: ''}) => {
    const { type, direction, targetLevel} = action;
    
    switch (type) {
        case MOVE: {            
            if (!state.gameWon && !state.gameLost) {
                switch (direction) {
                    case DOWN: {
                        if(isFreeToMove(state.levels[state.level].board, state.playerCell.col, state.playerCell.row + 1)) {
                            const playerCell = {col: state.playerCell.col, row: state.playerCell.row + 1};
                            const movesLeft = state.movesLeft - 1;
                            const gameWon = isGameWon(state.levels[state.level].board, playerCell);
                            const gameLost = !gameWon && movesLeft <= 0;
                            return {...state, playerCell, movesLeft, gameWon, gameLost};
                        }
                        return {...state};
                    }
                    case UP: {
                        console.log(isFreeToMove(state.levels[state.level].board, state.playerCell.col, state.playerCell.row - 1));
                        if(isFreeToMove(state.levels[state.level].board, state.playerCell.col, state.playerCell.row - 1)) {
                            const playerCell = {col: state.playerCell.col, row: state.playerCell.row - 1};
                            const movesLeft = state.movesLeft - 1;
                            const gameWon = isGameWon(state.levels[state.level].board, playerCell);
                            const gameLost = !gameWon && movesLeft <= 0;
                            return {...state, playerCell, movesLeft, gameWon, gameLost};
                        }
                        return {...state};
                    }
                    case RIGHT: {
                        if(isFreeToMove(state.levels[state.level].board, state.playerCell.col + 1, state.playerCell.row)) {
                            const playerCell = {col: state.playerCell.col + 1, row: state.playerCell.row};
                            const movesLeft = state.movesLeft - 1;
                            const gameWon = isGameWon(state.levels[state.level].board, playerCell);
                            const gameLost = !gameWon && movesLeft <= 0;
                            return {...state, playerCell, movesLeft, gameWon, gameLost};
                        }
                        return {...state};
                    }
                    case LEFT: {
                        if(isFreeToMove(state.levels[state.level].board, state.playerCell.col - 1, state.playerCell.row)) {
                            const playerCell = {col: state.playerCell.col - 1, row: state.playerCell.row};
                            const movesLeft = state.movesLeft - 1;
                            const gameWon = isGameWon(state.levels[state.level].board, playerCell);
                            const gameLost = !gameWon && movesLeft <= 0;
                            return {...state, playerCell, movesLeft, gameWon, gameLost};
                        }
                        return {...state};
                    }
                    default:
                        return {...state};
                }
            }
            return {...state};
        }
        case GO_TO_LEVEL: {
            if(state.levels[targetLevel]) {
                const level = targetLevel;
                const playerCell = findStart(state.levels[targetLevel].board);
                const movesLeft = state.levels[targetLevel].moves;
                const gameWon = false;
                const gameLost = false;
                return {...state, level, playerCell, movesLeft, gameWon, gameLost};
            }
            return {...state}
        }
        default:
            return {...state};
    }
}
