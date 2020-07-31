import { MOVE, GO_TO_LEVEL } from './actionTypes';

export const move = (direction) => ({type: MOVE, direction});

export const goToLevel = (targetLevel) => ({type: GO_TO_LEVEL, targetLevel});