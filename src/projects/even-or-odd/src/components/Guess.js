// import React from 'react';
// import {connect} from 'react-redux';
// import {setGuessEven,setGuessOdd} from '../actions/guess' 
// const Guess = () => {
//     return (
//         <div>

//         </div>
//     );
// }

// const mapStateToProps = (state) => {
//     return { cards: state.cards };
//   };
//   export default connect(mapStateToProps)(Guess);
import React from 'react';
import { connect } from 'react-redux';
import { setGuessEven, setGuessOdd } from '../actions/guess';

const Guess = ({ guess, setGuessEven, setGuessOdd }) => {
    return (
        <div>
            <h3>Will it be even or odd?</h3>
            <div>
                <button
                    onClick={setGuessEven}
                    style={guess === 'even' ? { border: '2px solid #43a047' } : null}
                >Even</button>
                {' '}
                <button
                    onClick={setGuessOdd}
                    style={guess === 'odd' ? { border: '2px solid #43a047' } : null}
                >Odd</button>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return { guess: state.gameState.guess };
};
const mapDispatchToProps = dispatch => {
    return {
        setGuessEven: () => dispatch(setGuessEven()),
        setGuessOdd: () => dispatch(setGuessOdd()),
    }
}

const componentConnector = connect(mapStateToProps, mapDispatchToProps)
export default componentConnector(Guess);

// export default connect(
//   ({ gameState: { guess } }) => ({ guess }),
//   { setGuessEven, setGuessOdd }
// )(Guess);