import { SET_GUESS } from './type';

export const setGuessEven = () => {
    return { type: SET_GUESS, guess: 'even' };
}

export const setGuessOdd = () => {
    return { type: SET_GUESS, guess: 'odd' };
}