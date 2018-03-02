import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Temp from './components/temp.js';

class App extends Component {
    constructor(props){                 //declair
        super(props)
        this.state ={ name: ''};
        this.state ={surname: ''};
    }

    handleName = (event) => {           //begining of State
        let n = event.target.value;
        this.setState({name:n});
    }
    handleSurName = (event) => {           //begining of State
        let sn = event.target.value;
        this.setState({surname:sn});
    }

    render() {
        return (
            <div>
                <h2 className="App-header"> Hello world!</h2>
                Name: <input type="text" name="name"
                             value={this.state.name}
                             onChange={this.handleName} />
                 SurName: <input type="text" name="surname"
                             value={this.state.surname}
                            onChange={this.handleSurName} />
                <Foo name={this.state.name} surname={this.state.surname}/>
                <Temp />
            </div>
        );
    }
}

class Foo extends Component {
    render() {
        return (<div>
                <h2>NAME: {this.props.name}: {this.props.surname}</h2>
            </div>

        );
    }
}


export default App;
