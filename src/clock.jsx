import React, { Component } from 'react';
import './app.css';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    }

    componentWillMount() {
        this.getTimeUntil(this.props.deadline);
    }

    componentDidMount() {
        setInterval(() => this.getTimeUntil(this.props.deadline, 1000));
    }

    leadingZero(num) {
        if(num < 10) {
            return '0' + num;
        }
        else {
            return num;
        }
    }

    getTimeUntil(deadline) {
        const time = Date.parse(deadline) - Date.parse(new Date());
        const seconds = Math.floor((time/1000)%60);
        const minutes = Math.floor((time/1000/60)%60);
        const hours = Math.floor((time/(1000*60*60))%24);
        const days = Math.floor(time/(1000*60*60*24));

        //console.log(time, days, hours, minutes, seconds);

        this.setState({
            days: this.leadingZero(days),
            hours: this.leadingZero(hours),
            minutes: this.leadingZero(minutes),
            seconds: this.leadingZero(seconds)
        }) 
    }

    render() {
        return (
            <div>
                <div className = "Clock-Days">{this.state.days} days</div>
                <div className = "Clock-Hours">{this.state.hours} hours</div>
                <div className = "Clock-Minutes">{this.state.minutes} minutes</div>
                <div className = "Clock-Seconds">{this.state.seconds} seconds</div>
            </div>
        )
    }
}

export default Clock;