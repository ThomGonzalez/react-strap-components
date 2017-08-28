import React, { Component } from 'react'


class CurrentDate extends Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    render() {
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };
        const dateTime = this.state.date.toLocaleDateString('es', options);
        
        return (
            <div>
                <p> { dateTime } </p> 
            </div>
        );

    }
}


export default CurrentDate;