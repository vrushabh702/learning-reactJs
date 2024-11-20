import React, { Component } from "react";

class Welcome extends Component{
    render(){
        // return <h1>Class Component</h1>
        return <h1>Welcome to {this.props.name}'s favorite {this.props.heroName}</h1>
    }
}

export default Welcome 