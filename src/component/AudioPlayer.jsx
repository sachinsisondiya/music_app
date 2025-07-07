import "./AudioPlayer.css"
import ProgressCircle from "./ProgressCircle";
import WaveAnimation from "./WaveAnimation";
import Controls from "./Controls";
import { useRef,useState,useEffect } from "react";
const AudioPlayer=({name})=>{
  const [isPlaying,setIsPlaying]=useState(false);
  const audioRef = useRef(null);
  const [audioUrl, setAudioUrl] = useState(null);
  const [trackProgress,setTrackProgress]=useState(0);
  const interValRef =useRef();

  const [endDuration, setEndDuration]=useState(0);

  const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60)
    .toString()
    .padStart(2, '0');
  return `${minutes}:${seconds}`;
};



  const duration= audioRef.current?.duration;
  const currPersentage = duration ? (trackProgress / duration)* 100 :0;
  
 


  useEffect(() => {
    if (name?.id) {
      const url = URL.createObjectURL(name.id);
      setAudioUrl(url);

      return () => {
        URL.revokeObjectURL(url); // Clean up memory
      };
    }
  }, [name]);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    
    
    }
  };

  const handlePause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
      clearInterval(interValRef.current);
    }
  };

  const startTimer =()=>{
    clearInterval(interValRef.current);

    interValRef.current= setInterval(()=>{
      if(audioRef.current.ended){
        audioRef.current.play();
        clearInterval(interValRef.current);
        setTrackProgress(0);
      }
      else{
        setTrackProgress(audioRef.current.currentTime);
      }

    },1000);
  };

// start timer is complete

  return(
    <div className="player-body flex">
      <div className="player-left-body flex">
        <ProgressCircle
        percentage={currPersentage}
        isPlaying={isPlaying}
        size={300}
        color="#C96850"></ProgressCircle>
      </div>
      <div className="player-right-body flex">
        <p className="song-title">
          {name?.id?.name || "no song selected" }
        </p>
        <div className="player-right-bottom flex">
          <div className="song-duration flex">
            <p className="duration">{formatTime(trackProgress)}</p>
            <WaveAnimation isPlaying={isPlaying}/>
             <p className="duration">{formatTime(endDuration)}</p>
          </div>
              {audioUrl && (
        <audio ref={audioRef} src= {audioUrl} 
          onLoadedMetadata={()=>{
            if(audioRef.current){
              setEndDuration(audioRef.current.duration);
            }
          }}/>
      )}
            <Controls handlePause={handlePause}
            handlePlay={handlePlay}
            isPlaying={isPlaying}
            />
        </div>
        

      </div>
    </div>
  )
}
export default AudioPlayer;