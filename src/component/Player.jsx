import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import SongCard from "./Songcard";
const Player = () =>{
  const location = useLocation();
  console.log(location.state)
   const musicRef= useRef(null);
   useEffect(()=>{
    if(location.state){
      console.log(musicRef.current)
    }

   },[location.state])

 
 
  
  return(
    <div className="screen-container">
      <div className="left-player-body">

      </div>
      <div className="right-player-body">
        <SongCard></SongCard>

      </div>
    </div>
  )
}
export default Player;