import React, { Component } from 'react';
class Jokes extends Component {
    constructor(props) {
        super(props);
        this.state = { joke: {}, jokes: [] };
    }
    componentDidMount() {
        fetch('https://official-joke-api.appspot.com/random_joke')
            .then(response => response.json())
            .then(json => this.setState({ joke: json }))
            .catch(error => alert(error.message));
    }
    fetchJokes = () => {
        fetch('https://official-joke-api.appspot.com/random_ten')
            .then(response => response.json())
            .then(json => this.setState({ jokes: json }))
            .catch(error => alert(error.message));

    }
    render() {
        const { setup, punchline } = this.state.joke
        return (
            <div>
                <h2>Highlighted jokes</h2>
                <p >{setup}</p>  <em>{punchline}</em>
                <hr />
                <h3>What ten jokes</h3>
                <button onClick={this.fetchJokes}>Click me!</button>
                {
                    this.state.jokes.map(Joke => {
                        const { setup, punchline, id } = Joke;
                        return <p style={{margin:20}} key={id}>{setup}<em>{punchline}</em></p>
                    })
                }
            </div>
        );
    }
}

export default Jokes;