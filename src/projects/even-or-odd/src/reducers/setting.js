import { SET_GAME_STARTED, SET_INSTRUCTIONS_EXPANDED, DECK, DECK_DRAW } from '../actions/type';
import fetchState from './fetchState'
// const DEFAULT_DECK = { deck_id: '', remaining: 0, fetchState: '', message: '', cards: [] };
const DEFAULT_SETTINGS = {
  gameStarted: false,
  instructionsExpended: false,
  deck_id: '', remaining: 0, fetchState: '', message: '', cards: []
};
const settingsReducer = (state = DEFAULT_SETTINGS, action) => {
  let remaining, deck_id, cards;
  switch (action.type) {
    case SET_GAME_STARTED:
      return { ...state, gameStarted: action.gameStarted };
    case SET_INSTRUCTIONS_EXPANDED:
      return { ...state, instructionsExpended: action.instructionsExpended };
    case DECK.FETCH_SUCCESS:
      // const { remaining, deck_id } = action
     ({ remaining, deck_id } = action)
      return { ...state, remaining, deck_id, fetchState: fetchState.success }
    case DECK.FETCH_ERROR:
      return { ...state, message: action.message, fetchState: fetchState.error };
    case DECK_DRAW.FETCH_SUCCESS:
      ({ cards, remaining } = action);
      return { ...state, cards, remaining, fetchState: fetchState.success };
    case DECK_DRAW.FETCH_ERROR:
      return { ...state, message: action.message, fetchState: fetchState.error };
    default:
      return state;
  }
};

export default settingsReducer;