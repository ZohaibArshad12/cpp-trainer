import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import {
  CardActions,
  CardContent,
  Grid,
  Button,
  Breadcrumbs as MuiBreadcrumbs,
  Card as MuiCard,
  CardHeader as MuiCardHeader,
  Divider as MuiDivider,
  Typography,
} from "@mui/material";
import { spacing } from "@mui/system";
import Split from "react-split";
import "../css/split.css";
import Problem from "../components/Problem";
import CodeEditor from "../components/CodeEditor";
import { FaCheckCircle } from "react-icons/fa";
import "../css/overlay.css";
import "../css/buttons.css";
import Buttons from "../components/Buttons";
import Tabs from "../components/Tab";
import {FaExpandArrowsAlt} from "react-icons/fa";

function ExersiceDone() {

    const [expand,setExpand]=useState(false);
  
    useEffect(() => {
      console.log("useeffect",expand);
    },[expand]);
  
  
    const expandEditor = () =>{
      
      setExpand(true);
      console.log("setting true");
      const navbar = document.getElementsByTagName("header");
      navbar[0].style.display="none";
  
      
    }
  return (
    <>
      <Typography variant="h3" gutterBottom >
        Spring 2022 - C++ Training
      </Typography>
     <div style={{display:"flex"}}>
      <Typography variant="h4" gutterBottom style={{marginTop:"10px"}}>
       24 game  (Advanced) 
      </Typography>
      <FaCheckCircle style={{color:"green",marginTop:"5px",marginLeft:"10px"}} size={30}/>
     </div>
      <Split
        className="flex"
        style={{ height: "80%", display: "flex", marginTop: "10px" }}
        sizes={[30, 70]}
      >
        <div className="description" style={{ padding: "20px" }}>
          <Tabs />
        </div>

        <div className="editor" style={{ padding: "20px" }}>
          <Button className="expand" onClick={()=>expandEditor()}><FaExpandArrowsAlt  size={20}/></Button>
          <CodeEditor classname={`expand-overlay${expand ? "-content" : ""}`} setexpand={setExpand} />
        </div>

      </Split>

      <Buttons classname="buttons"/>
    </>
  );
}

export default ExersiceDone;
