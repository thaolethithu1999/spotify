import { useState } from "react";
import "./App.css";
import DetailSong from "./components/DetailSong";
import ListSong from "./components/ListSong";
import NavBar from "./components/Navbar";
import Playing from "./components/Playing";
import { Songs } from "./Context";
import DataSong from "./data/songs.json";

function App() {
  const [song, setSong] = useState(DataSong[0]);

  const handleSetSong = (idSong) => {
    const song = DataSong.find((song) => song.id == idSong);
    if (!song) {
      setSong(DataSong[0]);
    } else {
      setSong(song);
    }
  };

  return (
    <div className="App bg-white">
      <Songs.Provider value={{ DataSong, song, handleSetSong }}>
        <NavBar />
        <div className="grid grid-cols-3 bg-slate-700 h-screen-navbar-player overflow-hidden">
          {/* span 1 */}
          <DetailSong />
          {/* span 2 */}
          <ListSong />
        </div>
        <Playing />
      </Songs.Provider>
    </div>
  );
}

export default App;
