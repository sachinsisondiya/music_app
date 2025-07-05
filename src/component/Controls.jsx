import { useRef, useEffect, useState } from 'react';
import './Control.css';

const Controls = ({handlePause,handlePlay} ) => {
 
  

  return (
    <div className="controls-container">
     
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
    </div>
  );
};

export default Controls;
