import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { SideBar, Videos } from "./index";
import fetchFromApi from "../services/FetchFromAPI";

const Feed = ({ setSelectedCategory, selectedCategory }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

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
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />{" "}
        <Typography
          className="copyright"
          variant="body2"
          sx={{ color: "#fff" }}
        >
          Copyright 2022 FrancMartin
        </Typography>
      </Box>
      <Stack>
        <Stack spacing={2}>
          <Typography variant="h4">
            <span style={{ color: "#fc1503" }}>{selectedCategory}</span>
            <span style={{ color: "#fff" }}> Videos</span>
          </Typography>
          <Videos videos={videos} />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Feed;
