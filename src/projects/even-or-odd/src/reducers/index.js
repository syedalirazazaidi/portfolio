import { combineReducers } from 'redux';
import settingsReducer from './setting';
import gameStateReducer from './gameState';
export default combineReducers({
    setting: settingsReducer, game: gameStateReducer,
    gameState: gameStateReducer
})  