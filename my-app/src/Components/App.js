import React, { Component } from "react";
import ColorCardList from "./ColorCardList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
  }

  handleChange = images => {
    this.setState({ images });
  };

  render() {
    return (
      <div className="App">
        <ColorCardList info={this.handleChange} />
      </div>
    );
  }
}

export default App;
