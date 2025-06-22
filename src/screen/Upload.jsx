 import { useRef} from "react";
 import styles from "./upload.module.css";
 const Upload= ()=>{
  const fileUpload= useRef();
  console.log(fileUpload);

  const handleFileClick = () => {
    fileUpload.current.click(); 
  };

 
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log('Selected file:', file.name);
      
  };
}

  
  return (
    <div className="screen-container">
      <div className={styles.main}>
      <h2 className={styles.heading}>Upload Files</h2>

      {/* File Upload */}
      <input type="file" accept="audio/*" className= {styles.files} 
      ref ={fileUpload}
       onChange={handleFileChange}/>

      <button onClick={handleFileClick} className={styles.customButton}>
        Upload files
      </button>

       
    </div>
      
      
    </div>
  )
}
export default Upload;