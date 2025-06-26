import '../screen/sidebarButton.css';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { GrEbay } from 'react-icons/gr';
const SidebarButton = ({title,to,icon})=>{
  return (
    <Link to={to} className='link'>
      <IconContext.Provider value={{size:"25px",color:"#E8E8E8"}}>
        <div className="sidebutton">
      {icon} {title}
    </div>

      </IconContext.Provider>
    
    </Link>
    
  )
}
export default SidebarButton;