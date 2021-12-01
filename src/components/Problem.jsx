import React, { useState } from "react";
import {
  Breadcrumbs as MuiBreadcrumbs,
  Card as MuiCard,
  CardHeader as MuiCardHeader,
  Divider as MuiDivider,
  Typography,
} from "@mui/material";

function Problem() {
  return (
    <>
      <Typography variant="h6" gutterBottom display="block">
        Background
      </Typography>
       <p>Write a program that randomly chooses and displays four digits, each from 1 ──► 9 (inclusive) with repetitions allowed.

The program should prompt for the player to enter an arithmetic expression using just those, and all of those four digits, used exactly once each. The program should check then evaluate the expression.

</p>
      <Typography variant="h6" gutterBottom display="block">
        Task
      </Typography>
      <p>The goal is for the player to enter an expression that (numerically) evaluates to 24.</p>
      <Typography variant="h6" gutterBottom display="inline">
        Notes
      </Typography>
      <p>The type of expression evaluator used is not mandated. An RPN evaluator is equally acceptable for example.
The task is not for the program to generate the expression, or test whether an expression is even possible.</p>
<Typography variant="h6" gutterBottom display="inline">
        Expected Output
      </Typography>
      <p>is_solvable('A','A','2','5') = &gt; false<br/>
      is_solvable('6','6','6','4') = &gt; true<br/>
      is_solvable('K','K','2','1') = &gt; false<br/>
      </p>
      
    </>
  );
}

export default Problem;
