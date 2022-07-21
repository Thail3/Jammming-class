import React, { Component } from "react";

import "./track.css";

class Track extends Component {
  constructor(props) {
    super(props);
  }

  renderAction = () => {
    if (this.props.isRemoval) {
      return (
        <button className="Track-action" onClick={this.onremove}>
          -
        </button>
      );
    } else {
      return (
        <button className="Track-action" onClick={this.addTrack}>
          +
        </button>
      );
    }
  };

  addTrack = () => {
    this.props.onAdd(this.props.track);
  };

  onremove = () => {
    this.props.onremove(this.props.track);
  };

  render() {
    console.log("Track : isRemovel", this.props.isRemovel);
    console.log("Track : result", this.props.track);
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>
            {this.props.track.artist} | {this.props.track.album}
          </p>
        </div>
        {this.renderAction()}
      </div>
    );
  }
}

export default Track;
