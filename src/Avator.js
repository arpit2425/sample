import React, { Component } from "react";
import "./Avator.css";
import "tachyons";


import Avatorlist from "./Avatorlist";

class Avator extends Component {
  constructor() {
    super();
    this.state = {
      name: "Welcome to avatr world"
    }
  }
  changename() {
    this.setState({
      name: "Subscribe"
    })
  }
  render() {
    return (
      <div>
        <h1 className="tc">{this.state.name}</h1>
        <Avatorlist id="1" name="Arpit" work="Developer" />
        <Avatorlist id="2" name="Nikhil" work="Designer" />
        <Avatorlist id="3" name="Arun" work="Database" />
        <Avatorlist id="4" name="Raju" work="Market" />
        <button onClick ={()=>this.changename()}>Subscribe</button>
      </div>
    );
  }
}
export default Avator;
