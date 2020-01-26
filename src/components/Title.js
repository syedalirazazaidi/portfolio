import React, { Component } from 'react';
const TITLES = [
    'a software engineer',
    'a music lover',
    'an enthusiastic learner',
    'an adventure seeker'
];
class Title extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titleIndex: 0, fadeIn: true
        }
    }
    componentDidMount() {
        this.timeout = setTimeout(() => (this.setState({ fadeIn: false })), 2000)
        this.animateTitles();
    }
    componentWillUnmount() {
        clearInterval(this.titleInterval)
        clearInterval(this.timeout)
    }
    animateTitles = () => {
        this.titleInterval = setInterval(() => {
            const titleIndex = (this.state.titleIndex + 1) % TITLES.length;
            this.setState({ titleIndex });
            setTimeout(() => (this.setState({ fadeIn: false })), 2000)
            this.timeout = setTimeout(() => this.setState({ fadeIn: true }), 2000);
        }, 2000);
    }
    render() {
        const { fadeIn, titleIndex } = this.state
        const title = TITLES[titleIndex]
        return (
            <div>
                <p className={fadeIn ? 'title fade-In' : 'title fade-Out'}>I m {title}</p>
            </div>
        );
    }
}
export default Title;