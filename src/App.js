import React, { Component } from "react";
import ReactDOM from "react-dom";
import logo from "./logo.svg";
import "./App.css";
const App=({name}) =>{
  return (
    <div className="App">
      <h1>Hello {name}</h1>
      <p>Welcome :)</p>
    </div>
  );

}

export default App;
