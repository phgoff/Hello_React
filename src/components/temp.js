import React, { Component } from 'react';
import '../App.css';


class Temp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            celsius: 0,
            farenheit: 32
        }
    }

    handleCelsius = (e) => {
        let c = e.target.value;
        this.setState( {celsius: c,
            farenheit: c*5/9 + 32
        });
    }
    render() {
        return (
            <div>
                Temperature converture:
                <input type="text" name="celsius"
                       value={this.state.celsius}
                       onChange={this.handleCelsius} />
                <h2>Farenheit: {this.state.farenheit.toFixed(3)} </h2>
            </div>)
    }
}

export default Temp;