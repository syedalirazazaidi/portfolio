import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startGame, cancelGame } from '../actions/setting';
import { fetchDeckResult, fetchNewDeck } from '../actions/deck';
import fetchState from '../reducers/fetchState';
import Instructions from './Instruction';
import DrawCard from './DrawCard';
import Card from './Card'
import Guess from './Guess';
import GameState from './GameState';
class App extends Component {
  startGame = () => {
    this.props.startGame();
    this.props.fetchNewDeck();
  }
  render() {
    console.log('this all you have', this)
    if (this.props.fetchState === fetchState.error) {
      return (
        <div>
          <p>plz try to reload the app.an error occur</p>
          <p>{this.props.message}</p>
        </div>
      )
    }
    return (
      <div>
        <h2>♤♠️ Even Or Odd Game ♠️♤</h2>
        {this.props.gameStarted ?
          (<div>
            <h3>The game is On!</h3><br />
            <GameState />
            <DrawCard />
            <br />
            <Guess />
            <br />
            <Card />
            <br />
            <button onClick={this.props.cancelGame}>Cancel game</button>
          </div>) : (<div>A new Game Awaits<br />
            <button onClick={this.startGame}>Start Game </button></div>)}
        <hr />
        <Instructions />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log('state ya par aai ge  ', state);
  return { gameStarted: state.setting.gameStarted, fetchState: state.setting.fetchState, message: state.setting.message }
}
const mapDispatchToProps = (dispatch) => {
  return {
    startGame: () => dispatch(startGame()),
    cancelGame: () => dispatch(cancelGame()),
    // fetchDeckResult: (deckJson) => dispatch(fetchDeckResult(deckJson)),
    fetchNewDeck: () => dispatch(fetchNewDeck())
  }
}
const componentConnector = connect(mapStateToProps, mapDispatchToProps)
export default componentConnector(App);

//react-app-template