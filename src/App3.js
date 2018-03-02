import React, { Component } from 'react';
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
    }

    handleChange(event){
        let v = parseInt(event.target.value)
        this.setState({value: v})
    }

    render(){
        return (
            <div>
                <input value={this.state.value} onChange={this.handleChange.bind(this)}/>
                <br/>
                <SheetLine base={this.state.value} multiply={1}/>
                <SheetLine base={this.state.value} multiply={2}/>
                <SheetLine base={this.state.value} multiply={3}/>
                <SheetLine base={this.state.value} multiply={4}/>
                <SheetLine base={this.state.value} multiply={5}/>
                <SheetLine base={this.state.value} multiply={6}/>
                <SheetLine base={this.state.value} multiply={7}/>
            </div>
        );
    }
}

class App extends Component {
    render() {
        return (
            <div>
                <Sheet start={2}/>
            </div>
        );
    }
}

export default App;