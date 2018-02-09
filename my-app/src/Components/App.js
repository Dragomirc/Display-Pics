import React, { Component } from "react";
import ColorCardList from "./ColorCardList";
const API_KEY = "7992273-497c1e332db1f866e31f42872";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
  }

  onColorSelect(color) {
    fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${color}&image_type=photo`)
      .then(res => {
        if (res.status !== 200) {
          console.log("Something went wrong with the request");
        }
        return res.json();
      })
      .then(res => console.log("nothing"))

      .catch(err => {
        console.log(err);
        throw new Error("Fetching failed");
      });
  }
  render() {
    return (
      <div className="App">
        <ColorCardList onColorSelect={this.onColorSelect} />
      </div>
    );
  }
}

export default App;
