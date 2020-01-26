import React, { Component } from 'react';
import {connect} from 'react-redux';
import{PubSubContext} from '../pubnub';
import { newMessage } from '../actions/messages';
class PublishMessage extends Component {
    state = { text: '' };
    updateText = event => {
        this.setState({ text: event.target.value })
    }
    publishMessage = () => {
        const {text} = this.state;
        const {username} = this.props;
        this.context.pubsub.publish(newMessage({text ,username}));
    }
    handleKeyPress =(event)=>{
        if(event.key==='Enter'){
            this.publishMessage();
        }
    }
    render() {
        console.log('this',this)
        return (
            <div>
                <h3>Got Something to say?</h3>
                <input onChange={this.updateText} onKeyPress={this.handleKeyPress} />
                {''}
                <button onClick={this.publishMessage}>Publish It!</button>
            </div>
        );
    }
}
PublishMessage.contextType=PubSubContext

export default connect(({username})=>({username}))(PublishMessage);