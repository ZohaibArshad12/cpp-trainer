import React from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";

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
} from "@mui/material";
import { StarBorder as StarIcon } from "@mui/icons-material";
import { spacing } from "@mui/system";
import MyCard from "../components/Card";
const Card = styled(MuiCard)(spacing);

const CardHeader = styled(MuiCardHeader)(spacing);

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Price = styled.div`
  text-align: center;
  padding-bottom: ${(props) => props.theme.spacing(3)};
`;

const Header = styled.div`
  padding: ${(props) => props.theme.spacing(6)} 0;
`;

const Beginner=[{name:"Exersice Name",done:false},{name:"Exersice Name",done:true},{name:"Exersice Name",done:false},
{name:"Exersice Name",done:false},{name:"Exersice Name",done:true},{name:"Exersice Name",done:false}];

const Advanced=[{name:"Exersice Name",done:true},{name:"Exersice Name",done:false},{name:"Exersice Name",done:false},
{name:"Exersice Name",done:false},{name:"Exersice Name",done:true},{name:"Exersice Name",done:false},{name:"Exersice Name",done:false},
{name:"Exersice Name",done:false},{name:"Exersice Name",done:false},{name:"Exersice Name",done:true}];


function ExersiceList() {
  return (
    <React.Fragment>
      <Helmet title="ExersiceList" />
      <Typography variant="h3" gutterBottom display="inline">
        Spring 2022 - C++ Training
      </Typography>

      <Divider my={6} />

      <Grid container justifyContent="center">
        <Grid item xs={12} lg={10}>
          <Grid container spacing={6} alignItems="flex-end">
            <Grid item xs={12} md={4}>
             <MyCard title={"Beginner"} exersice={Beginner}/>
            </Grid>
            <Grid item xs={12} md={4}>
            <MyCard title={"Intermediate"} exersice={Beginner}/>
            </Grid>
            <Grid item xs={12} md={4}>
            <MyCard title={"Advanced"} exersice={Advanced}/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default ExersiceList;
