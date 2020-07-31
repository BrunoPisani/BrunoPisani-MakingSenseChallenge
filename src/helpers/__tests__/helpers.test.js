import { findStart, isFreeToMove, isGameWon } from '../helpers';
import { levels } from '../../constants/levels';

test('findStart() should return the mocked cell.', () => {
    const mockedCell = {col: 0, row: 0};
    expect(findStart(levels[0].board)).toEqual(mockedCell);
});

test('findStart() should return {col: -1, row: -1}, as there is no starting cell.', () => {
    const mockedCell = {col: -1, row: -1};
    const mockedBoard = [
        [' ',' ',' ',' ',' '],
        ['W','W',' ','W','W'],
        ['W','W',' ','W','W'],
        [' ',' ',' ','W','W'],
        ['W','W',' ',' ','E'],
    ];
    expect(findStart(mockedBoard)).toEqual(mockedCell);
});

test('isGameWon() should return true.', () => { 
    expect(isGameWon(levels[0].board, {row: 4, col: 4})).toBe(true);
});
