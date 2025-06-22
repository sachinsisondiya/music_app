import React from "react";
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import Library from "./Library";
import  Upload  from "./Upload";
import  Feed  from "./Feed";
import  Player  from "./Player";
import Favorites from "./Favorites";
import styles from "./home.module.css";
import Sidebar from "../components/Sidebar/Sidebar";
const Home=() =>{
  return (
    <Router>
      <div className={styles['main-body']}>
        <Sidebar/>
         <Routes>
        <Route path="/" element= {<Library/>}/>
         <Route path="/feed" element= {<Feed/>}/>
          <Route path="/upload" element= {<Upload/>}/>
           <Route path="/player" element= {<Player/>}/>
            <Route path="/favorites" element= {<Favorites/>}/>


      </Routes>

      </div>
     
    </Router>
    
  )
}

export default Home;