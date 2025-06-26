import '../screen/sidebarButton.css';
import { Link, useLocation } from 'react-router-dom';
import { IconContext } from 'react-icons';


const SidebarButton = ({title,to,icon})=>{
  const location= useLocation();
 
  const isActive = location.pathname == to;
  const className= isActive ? "sidebutton active" :"sidebutton"; 
  return (
    <Link to={to} className={className}>
      <IconContext.Provider value={{size:"25px",color:"#E8E8E8"}}>
        <div className="sidebutton">
      {icon}
      <div className='title'>
        {title}</div> 
    </div>

      </IconContext.Provider>
    
    </Link>
    
  )
}
export default SidebarButton;