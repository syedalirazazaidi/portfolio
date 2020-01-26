import React from 'react';
import { connect } from 'react-redux';
import CreateReaction from './CreateReaction';
const MessageReactions=({messageReactions})=>{
   if(!messageReactions) return null;
   return (
       messageReactions.map((reaction,index)=>{
           const {id,emoji,username} = reaction;
           return (
               <span key ={id}>
                   <em>{username}:</em>{' '}
                   {emoji}
                   {index!==messageReactions.length-1?',':null}
               </span>
           )

       })
   )
}
const MessageBoard = ({ messages ,reactions }) => {
    return (
        <div>
            {messages.items.map(messageItem => {
                const { id, text, timestamp ,username} = messageItem;
                return (
                    <div key={id}>
                        <h4>{new Date(timestamp).toLocaleString()}</h4>
                        <p>{text}</p>
                        <h4>-{username}</h4>
                        <CreateReaction messageId={id}/>
                        <MessageReactions messageReactions={reactions[id]}/>
                        <hr />
                    </div>
                )
            })}
        </div>
    );
}
const mapStateToProps = (state) => {
    return { messages: state.message ,reactions  :state.reactions  }
}
const componentConnector = connect(mapStateToProps)
export default componentConnector(MessageBoard);
// export default connect(({ messages }) => ({ messages }))(MessageBoard)

// React context is a way to share data between many components, without having to manually pass objects down through props.