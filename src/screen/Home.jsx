import { BrowserRouter ,Route,Routes } from "react-router-dom";
import Player from "../component/Player";
import Feed from "../component/Feed";
import Library from "../component/Library";
import Logout from "../component/Logout";
import Trending from "../component/Trending";
import Favorites from "../component/Favorites";
const Home = () =>{
  return(
    <BrowserRouter>
    <Routes>

      <Route path="/"  element= {<Library/>}/>
      <Route path="/feed"  element= {<Feed/>}/>
       <Route path="/trending"  element= {<Trending/>}/>
        <Route path="/player"  element= {<Player/>}/>
         <Route path="/favorites"  element= {<Favorites/>}/>
         <Route path="/logout"  element= {<Logout/>}/>
          
      

    </Routes>
    </BrowserRouter>

    
    
    
    
  )
}
export default Home;