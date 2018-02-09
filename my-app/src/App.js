import React, { Component } from "react";
const API_KEY = "7992273-497c1e332db1f866e31f42872";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
