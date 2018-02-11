import React, { Component } from "react";
import ColorCardList from "./ColorCardList";
import ImageCardList from "./ImageCardList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: {}
    };
  }

  handleChange = images => {
    this.setState({ images });
  };

  render() {
    return (
      <div>
        <div>
          <ColorCardList info={this.handleChange} />
        </div>
        <div>
          <ImageCardList images={this.state.images} />
        </div>
      </div>
    );
  }
}

export default App;
