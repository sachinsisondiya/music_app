import { useRef, useEffect, useState } from 'react';
import './Control.css';

const Controls = ({ name }) => {
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

  return (
    <div className="controls-container">
      {audioUrl && (
        <audio ref={audioRef} src={audioUrl} />
      )}
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
    </div>
  );
};

export default Controls;
