import React, { Component } from "react";
import SearchBar from "./SearchBar";

class App extends Component {
  onSearchSubmit(searchQuery) {
    console.log(searchQuery);
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
