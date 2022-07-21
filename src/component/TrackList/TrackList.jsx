import React, { Component } from "react";
import Track from "../Track/Track";

import "./trackList.css";

class TrackList extends Component {
  render() {
    console.log("TrackList : searchResults", this.props.tracks);
    console.log("TrackList : isRemovel", this.props.isRemoval);
    return (
      <div className="TrackList">
        {this.props.tracks?.map((track) => {
          console.log("TrackList : track.map", track);
          return (
            <Track
              key={track.id}
              track={track}
              isRemoval={this.props.isRemoval}
              onAdd={this.props.onAdd}
              onremove={this.props.removeTrack}
            />
          );
        })}
      </div>
    );
  }
}

export default TrackList;
