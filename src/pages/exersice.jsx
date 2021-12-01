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

function Exersice({}) {


  return (
    <>
      <Typography variant="h3" gutterBottom >
        Spring 2022 - C++ Training
      </Typography>
     <div style={{display:"flex"}}>
      <Typography variant="h4" gutterBottom style={{marginTop:"10px"}}>
      24 game (Advanced)
      </Typography>
     </div>
      <Split
        className="flex"
        style={{ height: "80%", display: "flex", marginTop: "10px" }}
        sizes={[30, 70]}
      >
        <div className="description" style={{ padding: "20px" }}>
          <Problem />
        </div>

        <div className="editor" style={{ padding: "20px" }}>
          <CodeEditor />
        </div>
      </Split>

      <div className="buttons">
        
        
          <Button variant="contained" >Reset</Button>
         
        
          <Button
            variant="contained"
            color="success"
            className="run"
          >
            Run
          </Button>
          
         
          <Button variant="contained"  className="test">
            Test
          </Button>
          
        
      </div>
    </>
  );
}

export default Exersice;
