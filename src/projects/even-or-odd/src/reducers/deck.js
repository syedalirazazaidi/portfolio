import { DECK } from '../actions/type';
import fetchState from './fetchState'
const DEFAULT_DECK = {
    deck_id: '', remaining: 0, fetchState: '', message: ''
};
const deckReducer = (state = DEFAULT_DECK, action) => {
    switch (action.type) {
        case DECK.FETCH_SUCCESS:
            const { remaining, deck_id } = action
            return { ...state, remaining, deck_id, fetchState: fetchState.success }
        case DECK.FETCH_ERROR:
            return { ...state, message: action.message, fetchState: fetchState.error };
        default:
            return state;
    }
};

export default deckReducer;