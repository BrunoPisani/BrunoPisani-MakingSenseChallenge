import { connect } from 'react-redux';
import Game from './Game';
import { move, goToLevel } from '../../redux/actions';

const mapStateToProps = (state, props) => {
    return {
        levels: state.levels, 
        level: state.level,
        playerCell: state.playerCell,
        movesLeft: state.movesLeft, 
        gameLost: state.gameLost, 
        gameWon: state.gameWon
    };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        move: (direction) => dispatch(move(direction)),
        goToLevel: (targetLevel) => dispatch(goToLevel(targetLevel))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);