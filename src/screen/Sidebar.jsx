import styles from "./Sidebar.module.css";
import SidebarButton from "./sidebarButton";
import { MdLibraryMusic } from "react-icons/md";
import { RiContactsBookUploadFill } from "react-icons/ri";
import { MdOutlineFavorite } from "react-icons/md";
import { MdVideoLibrary } from "react-icons/md";
import { FiTrendingUp } from "react-icons/fi";
import { LuLogOut } from "react-icons/lu";
const Sidebar= ()=>{
  return (
    <div className={styles.sidebar}>
      <img src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001877.png" alt="profile picture" className={styles.profile}/>

      <div className="menu">
        <SidebarButton title="Upload" to="/upload" icon={<RiContactsBookUploadFill />}/>
        <SidebarButton title="Favorites" to="/favorites" icon={<MdOutlineFavorite />}/>
        <SidebarButton title="Library" to="/" icon={<MdVideoLibrary />}/>
        <SidebarButton title="Player" to="/player" icon={<MdLibraryMusic />}/>
        <SidebarButton title="Trending" to="/trending" icon={<FiTrendingUp />
}/>
      </div>
      <SidebarButton title="Logout" to="/logout" icon={<LuLogOut />}/>
    </div>
  )
}
export default Sidebar;