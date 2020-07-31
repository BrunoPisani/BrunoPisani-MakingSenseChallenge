import { move, goToLevel } from '../actions';
import { MOVE, GO_TO_LEVEL } from '../actionTypes';
import { DOWN } from '../../constants/directions';

test('move(direction) should create an action to move the player to the specified direction', () => {
    const direction = DOWN;
    const expectedAction = {type: MOVE, direction};
    expect(move(direction)).toEqual(expectedAction);
});

test('goToLevel(targetLevel) should create an action to go to the specified targetLevel', () => {
    const targetLevel = 0;
    const expectedAction = {type: GO_TO_LEVEL, targetLevel};
    expect(goToLevel(targetLevel)).toEqual(expectedAction);
});
