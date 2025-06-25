import styles from "./Sidebar.module.css";
import SidebarButton from "./sidebarButton";
const Sidebar= ()=>{
  return (
    <div className={styles.sidebar}>
      <img src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001877.png" alt="profile picture" className={styles.profile}/>

      <div>
        <SidebarButton/>
        <SidebarButton/>
        <SidebarButton/>
        <SidebarButton/>
        <SidebarButton/>
      </div>
      <SidebarButton/>
    </div>
  )
}
export default Sidebar;