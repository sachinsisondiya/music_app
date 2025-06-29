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
            <img src="https://static.vecteezy.com/system/resources/previews/000/546/041/original/music-notes-vector-icon.jpg" alt="music cover potos" className="music-img"/>
            <p className="music-title">
              {file.name}
            </p>
            <div className="icon-div">
              <MdPlayCircleOutline className="icon"  onClick={()=>playMusic(file)}  />
            </div>
            </div>

        ))}</div>

      ) : (<div> no files uploaded</div>)}  
     
    </div>
  )
}
export default Library;