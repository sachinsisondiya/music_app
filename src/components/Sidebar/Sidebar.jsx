import styles from './sidebar.module.css';
import SidebarButton from './SidebarButton';
import { MdDynamicFeed } from "react-icons/md";
import { IoMdTrendingUp } from "react-icons/io";
import { MdVideoLibrary } from "react-icons/md";
import { LuPlay } from "react-icons/lu";
import { MdOutlineFavorite } from "react-icons/md";
import { LuLogOut } from "react-icons/lu";
import { FaFileUpload } from "react-icons/fa";


const Sidebar =() =>{
  return (
    <div className={styles.sidebar}>
      <img src="https://img.freepik.com/premium-vector/man-character_665280-46970.jpg" alt="profil picture" className={styles.profile}/>

      <div>
        <SidebarButton title="Feed" to="/feed" icon={ <MdDynamicFeed />}/>
        <SidebarButton  title="Upload" to="/upload" icon={ <FaFileUpload />}/>
        <SidebarButton title="Library" to="/" icon={ <MdVideoLibrary />}/>
        <SidebarButton title="Player" to="/player" icon={<LuPlay />}/>
        <SidebarButton title="Favorites" to="/favorites" icon={ <MdOutlineFavorite />}/>
       
      </div>
      <SidebarButton title="Logout" to="" icon={ <LuLogOut />}/>
    </div>

   
  )
}
export default Sidebar;