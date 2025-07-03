import { useLocation } from "react-router-dom";
import { useEffect, useRef ,useState} from "react";
import SongCard from "./Songcard";
import './Player.css'
const Player = () =>{
  const location = useLocation();
  console.log(location.state)
   const musicRef= useRef(null);
   const [name,setname]=useState([]);
   useEffect(()=>{
    if(location.state){
      console.log(musicRef.current)
    }

   },[location.state])

 
 
  
  return(
    <div className="screen-container flex">
      <div className="left-player-body">

      </div>
      <div className="right-player-body">
        <SongCard album={location.state}></SongCard>

      </div>
    </div>
  )
}
export default Player;