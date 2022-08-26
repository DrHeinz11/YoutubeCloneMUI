import { Stack } from "@mui/material";
import React from "react";
import { categories } from "../utils/constants";

const SideBar = () => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        key={category.name}
        style={{
          background: category.name === "New" && "#fc1503",
          color: "white",
        }}
      >
        <span>{category.icon}</span>
        <span>{category.name}</span>
      </button>
    ))}
  </Stack>
);
export default SideBar;
