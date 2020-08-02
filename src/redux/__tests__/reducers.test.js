import { MOVE, GO_TO_LEVEL } from '../actionTypes';
import { DOWN, UP, RIGHT, LEFT } from '../../constants/directions';
import { reducer, initialState } from '../reducers';

test('reducer() returned state should be equal to the initialState.', () => {
    expect(reducer()).toEqual(initialState);
});

test('reducer(undefined, {type: MOVE, targetDirection: DIAGONAL }) returned state should be equal to the previousState (invalid direction)', () => {
    expect(reducer(undefined,{type: MOVE, direction: 'DIAGONAL' })).toEqual(initialState);
});

test('reducer(previousState, {type: MOVE, targetDirection: DOWN }) returned state should be equal to the mocked previousState (cannot move as it is blocked by gameWon)', () => {
    const previousState = {
        levels: initialState.levels,
        level: 1,
        playerCell: { col: 0, row: 0 },
        movesLeft: initialState.levels[1].moves,
        gameWon: true,
        gameLost: false
    };
    expect(reducer(previousState,{type: MOVE, direction: DOWN })).toEqual(previousState);
});

test('reducer(undefined, {type: MOVE, targetDirection: DOWN }) returned state should be equal to the previousState (cannot move to targetDirection)', () => {
    expect(reducer(undefined,{type: MOVE, direction: DOWN })).toEqual(initialState);
});

test('reducer(previousState, {type: MOVE, targetDirection: DOWN }) returned state should be equal to the mocked finalState', () => {
    const previousState = {
        levels: initialState.levels,
        level: 1,
        playerCell: { col: 0, row: 0 },
        movesLeft: initialState.levels[1].moves,
        gameWon: false,
        gameLost: false
    };
    const finalState = {
        levels: initialState.levels,
        level: 1,
        playerCell: { col: 0, row: 1 },
        movesLeft: initialState.levels[1].moves - 1,
        gameWon: false,
        gameLost: false
    };
    expect(reducer(previousState,{type: MOVE, direction: DOWN })).toEqual(finalState);
});

test('reducer(undefined, {type: MOVE, targetDirection: UP }) returned state should be equal to the previousState (cannot move to targetDirection)', () => {
    expect(reducer(undefined,{type: MOVE, direction: UP })).toEqual(initialState);
});

test('reducer(previousState, {type: MOVE, targetDirection: UP }) returned state should be equal to the mocked finalState', () => {
    const previousState = {
        levels: initialState.levels,
        level: 1,
        playerCell: { col: 0, row: 1 },
        movesLeft: initialState.levels[1].moves,
        gameWon: false,
        gameLost: false
    };
    const finalState = {
        levels: initialState.levels,
        level: 1,
        playerCell: { col: 0, row: 0 },
        movesLeft: initialState.levels[1].moves - 1,
        gameWon: false,
        gameLost: false
    };
    expect(reducer(previousState,{type: MOVE, direction: UP })).toEqual(finalState);
});

test('reducer(undefined, {type: MOVE, targetDirection: RIGHT }) returned state should be equal to the mocked finalState', () => {
    const finalState = {
        levels: initialState.levels,
        level: 0,
        playerCell: { col: 1, row: 0 },
        movesLeft: initialState.levels[0].moves - 1,
        gameWon: false,
        gameLost: false
    };
    expect(reducer(undefined,{type: MOVE, direction: RIGHT })).toEqual(finalState);
});

test('reducer(previousState, {type: MOVE, targetDirection: RIGHT }) returned state should be equal to the mocked previousState (cannot move to targetDirection)', () => {
    const previousState = {
        levels: initialState.levels,
        level: 0,
        playerCell: { col: 4, row: 0 },
        movesLeft: initialState.levels[0].moves,
        gameWon: false,
        gameLost: false
    };
    expect(reducer(previousState,{type: MOVE, direction: RIGHT })).toEqual(previousState);
});

test('reducer(undefined, {type: MOVE, targetDirection: LEFT }) returned state should be equal to the previousState (cannot move to targetDirection)', () => {
    expect(reducer(undefined,{type: MOVE, direction: LEFT })).toEqual(initialState);
});

test('reducer(previousState, {type: MOVE, targetDirection: LEFT }) returned state should be equal to the mocked finalState', () => {
    const previousState = {
        levels: initialState.levels,
        level: 0,
        playerCell: { col: 1, row: 0 },
        movesLeft: initialState.levels[0].moves,
        gameWon: false,
        gameLost: false
    };
    const finalState = {
        levels: initialState.levels,
        level: 0,
        playerCell: { col: 0, row: 0 },
        movesLeft: initialState.levels[0].moves - 1,
        gameWon: false,
        gameLost: false
    };
    expect(reducer(previousState,{type: MOVE, direction: LEFT })).toEqual(finalState);
});

test('reducer(undefined, {type: GO_TO_LEVEL, targetLevel: 1 }) returned state should be equal to the mocked finalState', () => {
    const finalState = {
        levels: initialState.levels,
        level: 1,
        playerCell: { col: 0, row: 0 },
        movesLeft: initialState.levels[1].moves,
        gameWon: false,
        gameLost: false
    };
    expect(reducer(undefined,{type: GO_TO_LEVEL, targetLevel: 1 })).toEqual(finalState);
});

test('reducer(previousState, {type: GO_TO_LEVEL, targetLevel: 3 }) returned state should be equal to the previousState (target level isnot valid)', () => {
    const previousState = {
        levels: initialState.levels,
        level: 1,
        playerCell: { col: 0, row: 0 },
        movesLeft: initialState.levels[1].moves,
        gameWon: false,
        gameLost: false
    };
    expect(reducer(previousState,{type: GO_TO_LEVEL, targetLevel: 3 })).toEqual(initialState);
});
