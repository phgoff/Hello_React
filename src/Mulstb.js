import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//property (this.props)
//state {this.state}
class SheetLine extends Component{
    render(){
        let base = this.props.base
        let multiply = this.props.multiply
        
        return (
            <div>
                {base} * {multiply} = {base * multiply}
            </div>       
        );
    }
}
class Sheet extends Component {
    constructor(props){
        super(props)
        this.state = {value: this.props.start}
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = (event) => {         //begining of State 
        let v = event.target.value      //get value here 
        this.setState({value: v});
    }

    render(){
        return (
            <div>
                <input value={this.state.value} onChange={this.handleChange} placeholder="enter value"/>
                <br/>
                <SheetLine base={this.state.value} multiply={1}/>
                <SheetLine base={this.state.value} multiply={2}/>
                <SheetLine base={this.state.value} multiply={3}/>
                <SheetLine base={this.state.value} multiply={4}/>
                <SheetLine base={this.state.value} multiply={5}/>
                <SheetLine base={this.state.value} multiply={6}/>
                <SheetLine base={this.state.value} multiply={7}/>
                <SheetLine base={this.state.value} multiply={8}/>
                <SheetLine base={this.state.value} multiply={9}/>
                <SheetLine base={this.state.value} multiply={10}/>
                <SheetLine base={this.state.value} multiply={11}/>
                <SheetLine base={this.state.value} multiply={12}/>
                
            </div>
        );
    }
}

class SheetApp extends Component {
    render() {
        return (
            <div>
             <h2>Multiplication Table:</h2>
                 <p className="App-intro"> 
                   <Sheet start= {this.props.start}/>
                  </p>
             </div>
            );
    }
}

export default SheetApp;