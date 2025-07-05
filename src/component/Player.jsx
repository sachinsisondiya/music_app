import { useLocation } from "react-router-dom";
import { useEffect, useRef ,useState} from "react";
import SongCard from "./Songcard";
import './Player.css'
import AudioPlayer from "./AudioPlayer";
const Player = () =>{
  const location = useLocation();
   const musicRef= useRef(null);
  return(
    <div className="screen-container flex">
      <div className="left-player-body">
        <AudioPlayer name={location.state} isPlaying={true}></AudioPlayer>

      </div>
      <div className="right-player-body">
        <SongCard album={location.state}></SongCard>

      </div>
    </div>
  )
}
export default Player;