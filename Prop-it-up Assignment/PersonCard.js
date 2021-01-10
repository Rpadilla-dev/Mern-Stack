//import { Component } from "@testing-library/react";
import React from 'react';

//import { Component } from 'react';

class Counter extends React.Component {

constructor(props){
    super(props);
    

    this.state = {
        age: props.age
    }
}

incrementCount = ()=> 
this.setState({age: this.state.age + 1})

decrementCount = ()=>
this.setState({age: this.state.age - 1})


    render(){
        return (
            <div>
                <h1>{this.props.firstName}, {this.props.lastName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color:{this.props.hairColor}</p>
                <button onClick={this.incrementCount}>Add Age</button>
                <button onClick={this.decrementCount}>Minus Age</button>
            </div>
            
        );
    }
}

export default Counter;