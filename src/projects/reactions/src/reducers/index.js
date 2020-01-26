import { combineReducers } from 'redux';
import usernameReducer from './username';
import messageReducers from './messages'
import reactionsReducer from './reactions';
export default combineReducers(
    {
        message: messageReducers,
        username : usernameReducer,
        reactions : reactionsReducer

    }
)