import React from "react";
import styles from "./SidebarButton.module.css";
import { Link } from "react-router-dom";
const SidebarButton = ({title,to,icon}) => {
  return (
    <Link to={to}>
      <div>
        {icon}
        <p>{title}</p>
      </div>

    </Link>

  )
}
export default SidebarButton;