import './Control.css';
import { CiPlay1 } from "react-icons/ci";

const Controls = ({handlePause,handlePlay,isPlaying} ) => {
  return (
    <div className="controls-container flex">
      <div className=
      {
        isPlaying ? "play-pause-btn flex active-n":"play-pause-btn flex active-n"
      }
      onClick={()=>{
         if (isPlaying) {
            handlePause();
          } else {
            handlePlay();
          }
      }}  
      >
        <CiPlay1 className='i'/>
      </div>
    </div>
  );
};

export default Controls;
