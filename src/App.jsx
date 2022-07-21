import React, { Component } from "react";
import "./App.css";
import SearchBar from "./component/SearchBar/SearchBar";
import SearchResults from "./component/SearchResults/SearchResults";
import Playlist from "./component/Playlist/Playlist";
import Spotify from "./utils/Spotify";

Spotify.getAccessToken();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      playlistName: "My Playlist",
      playlistTracks: [],
    };
  }

  addTrack = (track) => {
    const playlistTracks = this.state.playlistTracks;
    if (playlistTracks.find((track) => playlistTracks.id === track.id)) {
      return;
    }
    playlistTracks.push(track);
    this.setState({ playlistTracks });
  };

  removeTrack = (track) => {
    let playlistTracks = this.state.playlistTracks;
    playlistTracks = playlistTracks.filter(
      (playlistTrack) => playlistTrack.id !== track.id
    );
    this.setState({ playlistTracks: playlistTracks });
  };

  updatePlaylistName = (name) => {
    this.setState({ playlistName: name });
  };

  savePlaylist = async () => {
    const trackUrls = this.state.playlistTracks?.map((track) => track.id);

    await Spotify.savePlaylist(this.state.playlistName, trackUrls);
    this.setState({ playlistName: this.state.playlistName });
  };

  search = async (term) => {
    const spotifyTrack = await Spotify.search(term);
    this.setState({ searchResults: spotifyTrack });
    console.log(spotifyTrack);
    this.setState({ playlistTracks: [] });
  };

  render() {
    console.log("App : playlistTracks", this.state.playlistTracks);

    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar search={this.search} />
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              addTrack={this.addTrack}
            />
            <Playlist
              playlistTracks={this.state.playlistTracks}
              removeTrack={this.removeTrack}
              updatePlaylistName={this.updatePlaylistName}
              playlistName={this.state.playlistName}
              savePlaylist={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
