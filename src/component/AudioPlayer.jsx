import "./AudioPlayer.css"
import ProgressCircle from "./ProgressCircle";
const AudioPlayer=()=>{
  return(
    <div className="player-body">
      <div className="player-left-body flex">
        <ProgressCircle
        percentage={75}
        isPlaying={true}
        size={300}
        color="#C96850"></ProgressCircle>
      </div>
      <div className="player-right-body"></div>
    </div>
  )
}
export default AudioPlayer;