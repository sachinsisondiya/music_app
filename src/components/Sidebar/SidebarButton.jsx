import React from "react";
import styles from "./SidebarButton.module.css";
import { Link, useLocation } from "react-router-dom";
import { IconContext } from "react-icons";
const SidebarButton = ({title,to,icon}) => {
  const location = useLocation();
  

  const isActive = location.pathname === to;

  const btnClass= isActive ? `${styles["btn-body"]} ${styles.active}` : styles["btn-body"];

  //const isActive=
  return (
    <Link to={to}>
      <div className={btnClass}>
        <IconContext.Provider value={{size: "24px",className:"btn-icon"} }>
        {icon}
        <p className={styles['btn-title']}>{title}</p>
        </IconContext.Provider>
      </div>

    </Link>

  )
}
export default SidebarButton;