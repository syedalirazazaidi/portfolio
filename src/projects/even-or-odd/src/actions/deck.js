import { DECK, DECK_DRAW } from './type';
const API_ADDRESS = 'https://deck-of-cards-api-wrapper.appspot.com';
export const fetchDeckSuccess = (deckJson) => {
    const { remaining, deck_id } = deckJson;
    return { type: DECK.FETCH_SUCCESS, remaining, deck_id };
}
export const fetchDeckError = error => {
    return { type: DECK.FETCH_ERROR, message: error.message }
}
export const fetchNewDeck = () => (dispatch) => {
    fetch('https://deck-of-cards-api-wrapper.appspot.com/deck/new/shuffle')
        .then(res => {
            if (res.status !== 200) {
                throw new Error('Unsuccessful request to deckofcardsapi.com');
            }
            return res.json()
        })
        .then(json => dispatch(fetchDeckSuccess(json)))
        .catch(error => dispatch(fetchDeckError(error)))
}

///we use redux-thunk-middleware because of async here ias a fetch is asynce function/////

export const fetchDrawCard = deck_id => dispatch => {
    return fetch(`${API_ADDRESS}/deck/${deck_id}/draw`)
        .then(response => {
            if (response.status !== 200) {
                throw new Error('Unsuccessful request to deckofcardsapi.com');
            }
            return response.json();
        })
        .then(json => {
            dispatch({
                type: DECK_DRAW.FETCH_SUCCESS,
                cards: json.cards,
                remaining: json.remaining
            });
        })
        .catch(error => dispatch({ type: DECK_DRAW.FETCH_ERROR, message: error.message }));
}
