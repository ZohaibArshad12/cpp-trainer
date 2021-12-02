import React, { useState,useEffect } from "react";
import "../css/overlay.css";
import {Button} from "@mui/material";
import {FaRegWindowClose} from "react-icons/fa";
import Buttons from "./Buttons";
function CodeEditor({classname,setexpand}) {

  //const [expandClass,setExpandClass]=useState(classname);
  
  useEffect(() => {
   console.log("here",classname);
  },[classname])
  
  const closeExpansion = () =>{
    classname="expand-overlay";
    const navbar = document.getElementsByTagName("header");
    navbar[0].style.display="flex";
    setexpand(false);
  }
  
  return(
    <div className={classname}>
      <div className="closeBtn">
      {classname==="expand-overlay-content"?
      <Button onClick={()=>closeExpansion()}><FaRegWindowClose size={25}/></Button>:""}
    </div>
    <textarea className="content"></textarea>
    {classname==="expand-overlay-content"?<Buttons classname="buttons-expand"/>:""}
    </div>
  );
   
}

export default CodeEditor;
