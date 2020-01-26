import { SET_GAME_STARTED, SET_INSTRUCTIONS_EXPANDED } from './type';

export const startGame = () => {
  return { type: SET_GAME_STARTED, gameStarted: true };
};

export const cancelGame = () => {
  return { type: SET_GAME_STARTED, gameStarted: false };
}

export const expandInstructions = () => {
  console.log('works')
  return { type: SET_INSTRUCTIONS_EXPANDED, instructionsExpended: true };
}

export const collapseInstructions = () => {
  return { type: SET_INSTRUCTIONS_EXPANDED, instructionsExpanded: false };
}