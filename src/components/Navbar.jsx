import React from "react";
import { Box, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";
const Navbar = () => {
  return (
    <Stack
      direction="row"
      spacing={2}
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link to="/ " style={{ display: "flex", alingItems: "center" }}>
        <img src={logo} alt="logo" height={45} />
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
