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
      <Typography variant="h4" gutterBottom display="block">
        Description
      </Typography>
      <Typography variant="h6" gutterBottom display="block">
        Hints
      </Typography>
      <Typography variant="h6" gutterBottom display="inline">
        Expected Output
      </Typography>
    </>
  );
}

export default Problem;
