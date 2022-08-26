import React from "react";
import { Box, Stack } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      spacing={2}
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        backgroundColor: "#ccc",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Box>hola esto es una prueba </Box> esto tambien es una prueba{" "}
    </Stack>
  );
};

export default Navbar;
