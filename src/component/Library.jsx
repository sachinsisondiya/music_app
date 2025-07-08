import { useLocation } from "react-router-dom";
import "./library.css";
import { MdPlayCircleOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const Library = ()=>{
  const location =useLocation();
  const files = location.state?.files || [];
  const navigate = useNavigate();
  const playMusic = (id)=>{
    navigate("/player", {state:{id}})
  }
  return (
    <div className="screen-container">
     
     
       {files.length > 0 ? (
        <div className="play-list"> 
        {files.map((file,i) =>(
          <div key={i} className="play-card">
           <div className="music-img" role="img" aria-label=" animated cartoon who are listening the song"></div>
            <p className="music-title">
              {file.name}
            </p>
            <div className="icon-div">
              <MdPlayCircleOutline className="icon"  onClick={()=>playMusic(file)}  />
            </div>
            </div>

        ))}</div>

      ) : (<div className="contain"> <div className="upload-files"> no files uploaded
       <p className="reminder">go to upload</p></div> 
     </div>)}  
     
    </div>
  )
}
export default Library;