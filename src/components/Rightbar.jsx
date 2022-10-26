import { Box } from "@mui/material";
import React from "react";

function Rightbar() {
  return (
    <Box bgcolor="green" flex={1} sx={{ display: { xs: "none", sm: "block" } }}>
      Rightbar
    </Box>
  );
}

export default Rightbar;
