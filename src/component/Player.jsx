import { useLocation } from "react-router-dom";
const Player = () =>{
  const location = useLocation();
  if(location.state) {console.log(location.state)}

  const playMusic=()=>{
    console.log()
  }
  return(
    <div className="screen-container">
      <div>

      </div>
      <div>

      </div>
    </div>
  )
}
export default Player;