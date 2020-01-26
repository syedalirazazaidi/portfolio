import React from 'react';
import {connect} from 'react-redux'
import {fetchDrawCard } from '../actions/deck'
const DrawCard = ({ deck_id, fetchDrawCard,image,remaining }) => {
    console.log('identification mark',deck_id)
    return (
      <div>
          
        <button onClick={fetchDrawCard(deck_id)}>Draw the next card!</button>
      </div>
    )   
  }
const mapDispatchToProps = dispatch => {
    return { 
      fetchDrawCard: deck_id => () => dispatch(fetchDrawCard(deck_id))
    };
  }
export default connect(
   state=>
   ({deck_id:state.setting.deck_id}) ,mapDispatchToProps
)(DrawCard);  

// import React from 'react';
// import { connect } from 'react-redux';
// import { fetchDrawCard } from '../actions/deck'
// const DrawCard = (props) => {
//     const deck_id=props.deck_id
//     fetchDrawCard();
//     return (
//         <div>
//             <button onClick={fetchDrawCard(deck_id)}>Draw the next card!</button>
//         </div>
//     );
// }
// const mapStateToProps = (state) => {
//     console.log('yah par aa jana  ', state);
//     return {deck_id:state.deck_id}
// }
// const mapDispatchToProps = (dispatch) => {
//     return {
//         fetchDrawCard: deck_id => () => dispatch(fetchDrawCard(deck_id))
       
//     }
// }
// const componentConnector = connect(mapStateToProps, mapDispatchToProps)
// export default componentConnector(DrawCard); 