import "./AudioPlayer.css"
import ProgressCircle from "./ProgressCircle";
import WaveAnimation from "./WaveAnimation";
import Controls from "./Controls";
import { useRef,useState,useEffect } from "react";
const AudioPlayer=({name,isPlaying})=>{
  const audioRef = useRef(null);
  const [audioUrl, setAudioUrl] = useState(null);

  const duration= audioRef.current?.duration;
  console.log(duration);
  
 


  useEffect(() => {
    if (name?.id) {
      const url = URL.createObjectURL(name.id);
      setAudioUrl(url);
      console.log(url)

      return () => {
        URL.revokeObjectURL(url); // Clean up memory
      };
    }
  }, [name]);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const handlePause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };



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
              {audioUrl && (
        <audio ref={audioRef} src= {audioUrl} />
      )}
            <Controls handlePause={handlePause}
            handlePlay={handlePlay}
            />
        </div>
        

      </div>
    </div>
  )
}
export default AudioPlayer;