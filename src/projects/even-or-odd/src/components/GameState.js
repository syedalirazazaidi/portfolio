import React from 'react';
import { connect } from 'react-redux';
const correctGuessesRecordKey = 'CORRECT_GUESSES_RECORD_foo123';
const checkRecord = correctGuesses => {
    const record = Number(localStorage.getItem(correctGuessesRecordKey));
  
    if (correctGuesses > record) {
      localStorage.setItem(correctGuessesRecordKey, correctGuesses);
  
      return { record: correctGuesses, isNewRecord: true };
    }
  
    return { record, isNewRecord: false };
  };
const GameState = ({ remaining, correctGuesses }) => {
    const guessText = correctGuesses === 1 ? 'guess' : 'guesses';
    const { record, isNewRecord } = checkRecord(correctGuesses);
 const recordLabel = isNewRecord ? '🎉 New record' : 'Record';
    return (
        <div>
            <h3>{recordLabel}: {record}</h3>
            <p>{remaining} card remaining</p>
            <p>{correctGuesses} correct {guessText}</p>
        </div>
    );
}
const mapStateToProps = (state) => {
    console.log('state ya par aai ge  ', state);
    // return { gameStarted: state.setting.gameStarted, fetchState: state.setting.fetchState, message: state.setting.message }
    return { correctGuesses: state.gameState.correctGuesses, remaining: state.setting.remaining }
}
// const mapDispatchToProps = (dispatch) => {
//     return {
//         remaining: () => dispatch(remaining()),
//         correctGuesses :() => dispatch(correctGuesses()),

//     }
// }
const componentConnector = connect(mapStateToProps)
export default componentConnector(GameState);

// export default connect(
//     ({
//       deck: { remaining },
//       gameState: { correctGuesses }
//     }) => ({ remaining, correctGuesses })
//   )(GameState);
