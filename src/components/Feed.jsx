import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import SideBar from "./SideBar";

const Feed = () => {
  return (
    <Stack
      sx={{ flexDirection: { sx: "column", md: "row" }, background: "#c1c1c1" }}
    >
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar />{" "}
        <Typography
          className="copyright"
          variant="body2"
          sx={{ color: "#000" }}
        >
          Copyright 2022 FrancMartin
        </Typography>
      </Box>
    </Stack>
  );
};

export default Feed;
