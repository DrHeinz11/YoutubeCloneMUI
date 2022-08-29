import { Stack } from "@mui/material";
import React from "react";
import { categories } from "../utils/constants";

const selectedCategory = "New";
const SideBar = ({ selectedCategory, setSelectedCategory }) => (
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
        onClick={() => setSelectedCategory(category.name)}
        style={{
          background: category.name === selectedCategory && "#fc1503",
          color: "white",
        }}
      >
        <span>{category.icon}</span>
        <span style={{ marginLeft: "10px" }}>{category.name}</span>
      </button>
    ))}
  </Stack>
);
export default SideBar;
