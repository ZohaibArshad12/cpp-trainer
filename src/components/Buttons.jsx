import React, { useState,useEffect } from "react";
import {Button} from "@mui/material";

function Buttons({classname}) {

  
  return(
<div className={classname}>
        
        
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
  );
   
}

export default Buttons;
