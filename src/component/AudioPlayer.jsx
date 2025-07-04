import "./AudioPlayer.css"
import ProgressCircle from "./ProgressCircle";
import WaveAnimation from "./WaveAnimation";
import Controls from "./Controls";
const AudioPlayer=({name,isPlaying})=>{
  return(
    <div className="player-body flex">
      <div className="player-left-body flex">
        <ProgressCircle
        percentage={75}
        isPlaying={true}
        size={300}
        color="#C96850"></ProgressCircle>
      </div>
      <div className="player-right-body flex">
        <p className="song-title">
          {name.id.name}
        </p>
        <div className="player-right-bottom flex">
          <div className="song-duration flex">
            <p className="duration">0:01</p>
            <WaveAnimation isPlaying={true}/>
             <p className="duration">0:30</p>
          </div>

            <Controls/>
        </div>
        

      </div>
    </div>
  )
}
export default AudioPlayer;