import React, { Component } from 'react';
import Artist from './Artist';
import Tracks from './Tracks'
const API_ADDRESS = 'https://spotify-api-wrapper.appspot.com';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artistQuery: '',
      artist: null, tracks: []
    };
  }

  updateArtistQuery = (event) => {
    // console.log("event.target.value",event.target.value)
    this.setState({
      artistQuery: event.target.value
    })
  }
  searchArtist = () => {
    console.log('this.state', this.state);
    fetch(`${API_ADDRESS}/artist/${this.state.artistQuery}`)
      .then(response => response.json())
      .then(json => {
        console.log('json', json)
        if (json.artists.total > 0) {
          const artist = json.artists.items[0];
          console.log('artist', artist)
          this.setState({ artist })
          fetch(`${API_ADDRESS}/artist/${artist.id}/top-tracks`)
            .then(response => response.json())
            .then(json => this.setState({ tracks: json.tracks }))
            .catch(error => alert(error.message));
        }
      })
      .catch(error => alert(error.message));
  }
  handlerKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.searchArtist();
    }
  }
  render() {
    console.log('this.state', this.state)
    return (
      <div>
        <h1>Music Master</h1>
        <input placeholder="search for an artist" onChange={this.updateArtistQuery} type="text"
          onKeyPress={this.handlerKeyPress}
        />
        <button onClick={this.searchArtist}>Search</button>
        <Artist artist={this.state.artist} />
        <Tracks tracks= {this.state.tracks}/>
      </div>
    );
  }
}

export default App;

