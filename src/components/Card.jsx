import React, { useState } from "react";
import styled from "styled-components/macro";
import {
    Button,
    CardActions,
    CardContent,
    Grid,
    Link,
    Breadcrumbs as MuiBreadcrumbs,
    Card as MuiCard,
    CardHeader as MuiCardHeader,
    Divider as MuiDivider,
    Typography,
  } from "@mui/material"
import { spacing } from "@mui/system";
import { FaCheckCircle } from "react-icons/fa";
import "../css/card.css";
import { Navigate,useNavigate  } from "react-router-dom";

const Card = styled(MuiCard)(spacing);

const CardHeader = styled(MuiCardHeader)(spacing);


function MyCard({title,exersice}) {

    let navigate = useNavigate();

    const nextPath = (done) =>{
      if(!done)
      {    
      navigate("/exersice");
      }
      else
      {
        navigate("/exersice-done");

      }    
        
    }

  return (
    <div className="exercise" >
       <Typography variant="h4" gutterBottom style={{textAlign:"center"}}>
        {title}
      </Typography>
       {exersice.map((ex) => {

return( 
  <div >
  <Button
   fullWidth
   variant="outlined"
   color="primary"
   style={{ marginTop: "10px",display:"flex", justifyContent: "space-between"}}
   onClick={()=>{nextPath(ex.done)}}  
 >
   {ex.name}{ex.done?<FaCheckCircle style={{color:"green"}} size={27}/>:<div style={{width:"12%"}}></div>}
 </Button>
 
    
    </div>
);
})}
 
      
    
           
    
  </div>
  );
}

export default MyCard;
