import React, { Component } from "react";
import TrackList from "../TrackList/TrackList";

import "./playlist.css";

class Playlist extends Component {
  constructor(props) {
    super(props);
  }

  handleChangName = (e) => {
    this.props.updatePlaylistName(e.target.value);
  };

  render() {
    console.log("Playlist : playlistTracks", this.props.playlistTracks);
    console.log("Playlist : playlistTracks", this.props.updatePlaylistName);
    return (
      <div className="Playlist">
        <input
          value={this.props.playlistName}
          onChange={this.handleChangName}
        />
        <TrackList
          tracks={this.props.playlistTracks}
          isRemoval={true}
          removeTrack={this.props.removeTrack}
        />
        <button className="Playlist-save" onClick={this.props.savePlaylist}>
          SAVE TO SPOTIFY
        </button>
      </div>
    );
  }
}

export default Playlist;
