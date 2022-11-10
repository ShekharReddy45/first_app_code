import React, { Component } from "react";
import Properties from "./properties";

// this is class component
class First extends Component {
    render(){
        return (<>
        <h1> Hi {this.props.name}</h1>
        <Properties ></Properties>
        
        </>)
    }
}

/*First.defaultProps = {
    user: "Shekhar Reddy.M",
    surName: "MUnagalA",
}*/





export default First;