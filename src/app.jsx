import React, { Component } from 'react';
import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deadline: 'December 25, 2017',
            newDeadline: ''
        }
    }

    changeDeadline() {
        this.setState({deadline: this.state.newDeadline});
    }

    render() {
        return (
            <div className = "App">
                <div className = "App-Title">Countdown to {this.state.deadline}</div>
                <div>
                    <div className = "Clock-Days">14 days</div>
                    <div className = "Clock-Hours">30 hours</div>
                    <div className = "Clock-Minutes">15 minutes</div>
                    <div className = "Clock-Seconds">20 seconds</div>
                </div>
                <div>
                    <input placeholder = "New Deadline" 
                        onChange = {event => this.setState({newDeadline: event.target.value})}
                    />
                    <button onClick={() => this.changeDeadline()}>
                        Submit
                    </button>
                </div>
            </div>
        )
    }
}

export default App;