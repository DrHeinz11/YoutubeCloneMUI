import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { SideBar, Videos } from "../components";

const Feed = () => {
  return (
    <Stack
      sx={{ flexDirection: { sx: "column", md: "row" }, background: "#000" }}
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
          sx={{ color: "#fff" }}
        >
          Copyright 2022 FrancMartin
        </Typography>
      </Box>
      <Box>
        <Typography variant="h4">
          <span style={{ color: "#fc1503" }}>New</span>
          <span style={{ color: "#fff" }}> Videos</span>
        </Typography>
        <Videos videos={[]} />
      </Box>
    </Stack>
  );
};

export default Feed;
