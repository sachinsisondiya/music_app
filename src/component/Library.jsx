import { useLocation } from "react-router-dom";
import "./library.css";
const Library = ()=>{
  const location =useLocation();
  const files = location.state?.files || [];
  return (
    <div className="screen-container">
     
     
       {files.length > 0 ? (
        <div className="play-list"> 
        {files.map((file,i) =>(
          <div key={i} className="play-card">{file.name}</div>
        ))}</div>

      ) : (<div> no files uploaded</div>)}  
     
    </div>
  )
}
export default Library;