import {React,useState} from "react";
import axios from "axios";

import "./style.css";


function Uploader() {
    const [fileData,setFileData]=useState();

    const onFileChange = (event) => {
        setFileData({ selectedFile: event.target.files[0] });
      };
      
      // On file upload (click the upload button)
     const onFileUpload = () => {
        console.log(fileData)
        // Create an object of formData
        const formData = new FormData();
        // Update the formData object
        formData.append(
          "testcase",
          fileData.selectedFile,
          fileData.name
        );
      
        // Details of the uploaded file
        console.log(fileData);
        axios.post("http://localhost:3001/uploader",fileData);
       
      };
      
    return ( <>
        <div className="uploader-container">
            <input type="file" accept=".csv" onChange={onFileChange} />
            <button onClick={onFileUpload}>
                  Upload!
                </button>
        </div>
    </>);
}

export default Uploader;
