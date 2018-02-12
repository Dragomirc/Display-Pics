import React, { Component } from "react";

import ColorCardList from "./ColorCardList";
import ImageCardList from "./ImageCardList";
import Header from "./Header";

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
      <div style={{ maxWidth: 640 }}>
        <Header />
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
