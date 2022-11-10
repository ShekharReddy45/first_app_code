import { Button } from "antd";
import React, { Component } from "react";
import '../CSS folder/button.css';

class Properties extends Component {
    
    constructor(props){
        super(props);
        this.state = {age: 27, firstName:"shekhar", Counter: 0}
    }
    doIncrement = (incr) =>{
        this.setState((prevState,props)=>{
            return {Counter : prevState.Counter + incr}
        });
    }
    render(){
        return(
            <>
            <h1>welcome to techworld as {this.state.firstName}</h1>
            <p>years of experience is {this.state.age}</p>
            <h5>Counter : {this.state.Counter}</h5>
            <button onClick={()=>this.doIncrement(99)}>Click Me</button>
            <Button type="primary" className="btn">ADD</Button>
            </>
        )
    }
}

export default Properties;
