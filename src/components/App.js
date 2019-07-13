import React, { Component } from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends Component {
  //if you expect a response that is of type: array, let the child in your state object be an array
  state = { images: [] };
  onSearchSubmit = async searchQuery => {
    const response = await unsplash.get("/search/photos", {
      params: { query: searchQuery }
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
