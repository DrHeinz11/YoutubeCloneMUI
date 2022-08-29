import React from "react";
import { Box, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import { SearchBar } from "../components";
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
        background: "rgba(204, 204, 204, 0.19)",
        boxShadow: " 0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: " blur(12.2px)",
        border: "1px solid rgba(204, 204, 204, 0.12)",
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
