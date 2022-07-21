import React, { Component } from "react";

import "./searchBar.css";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };
  }

  search = () => {
    this.props.search(this.props.term);
  };

  handleChangeTerm = (e) => {
    this.setState({ term: e.target.value });
  };

  render() {
    return (
      <div className="SearchBar">
        <input
          placeholder="Enter A Song, Album, or Artist"
          onChange={this.handleChangeTerm}
        />
        <button className="SearchButton" onClick={this.search}>
          SEARCH
        </button>
      </div>
    );
  }
}

export default SearchBar;
