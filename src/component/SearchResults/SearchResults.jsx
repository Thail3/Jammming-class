import React, { Component } from "react";
import TrackList from "../TrackList/TrackList";

import "./searchResults.css";

class SearchResults extends Component {
  render() {
    console.log("SearchResults : searchResults", this.props.searchResults);
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <TrackList
          tracks={this.props.searchResults}
          onAdd={this.props.addTrack}
          isRemoval={false}
        />
      </div>
    );
  }
}

export default SearchResults;
