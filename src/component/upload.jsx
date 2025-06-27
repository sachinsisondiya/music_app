import 'bootstrap/dist/css/bootstrap.min.css';
import {useState,useRef} from "react";
import "./upload.css";
import { useNavigate } from 'react-router-dom';
const Upload = ()=>{
   const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
   const inputRef = useRef([]);
   const navigate =useNavigate();

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles(droppedFiles);
  };

  const handleDragOver = (e) => {
    e.preventDefault(); 
    setIsDragging(true);
  };
   const handleClick = () => {
    inputRef.current.click();
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };
  const handleFileChange = (e) => {
  const selectedFiles = Array.from(e.target.files);
  setFiles(selectedFiles);
};

  const goToLibrary = () => {
    navigate("/", { state: { files } });
  };

  return(
    <div className="screen-container upload">
    <div
    onClick={handleClick}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      className="main"
    >
      <p className="heading">Drag and drop files here, or click to select</p>
      <input
      ref={inputRef}
      className="input"
        type="file"
        multiple
        onChange={handleFileChange}
     
      />

    </div>
    <div className="list-main"> {files.length > 0 && (
        <ul className="list">
          {files.map((file, i) => (
            <li key={i}>{file.name}</li>
          ))}
        </ul>)}
        <button
          className="btn btn-primary new"
          type="button"
          onClick={goToLibrary}
          disabled={files.length === 0}
        >
          Go to Library
        </button>
     
      </div>
    
    </div>
  )
}
export default Upload;