import React, { Component } from 'react';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">DYMICER</h1>
                    <h2 className ="App-title">Hello World!</h2>
                </header>
                <Foo name ="GOF"
                     surname = "Dymicer"
                />
            </div>

        );
    }
}

class Foo extends Component{
    render(){
        return ( <div>
                <h2> {this.props.name} {this.props.surname} </h2>
             Foo Foo Foo
        </div>

        );
    }



}

export default App;
