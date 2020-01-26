import React from 'react';
import App from './components/App';
import './index.css';
import PubSub, { PubSubContext } from './pubnub';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { newMessage } from './actions/messages'
const store = createStore(rootReducer
    , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log('store.getState', store.getState())
store.subscribe(() => console.log('store.getState', store.getState()))
const pubsub = new PubSub();
pubsub.addListener({
    message: messageObject => {
        const { message, channel } = messageObject;
        console.log('Received Message', message, 'Channel', channel);
        store.dispatch(message);
    }
})
setTimeout(() => {
    pubsub.publish(newMessage({ text: 'Hello World', username: 'bob' }))
}, 1000)

export default () => 
     (
        <Provider store={store}>
            <PubSubContext.Provider value={{ pubsub }}> <App /></PubSubContext.Provider>
        </Provider>

    )


