import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [keyboard, setKeyboard] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setSearch(keyboard);
  };

  return (
    <Paper
      components="form"
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <form onSubmit={(e) => submitHandler(e)}>
        <input
          className="search-bar"
          placeholder="Search..."
          value={keyboard}
          onChange={(e) => {
            setKeyboard(e.target.value);
          }}
        />
        <IconButton
          onClick={() => setSearch(keyboard)}
          type="submit"
          sx={{ p: "10px", color: "red" }}
        >
          <Search />
        </IconButton>
      </form>
    </Paper>
  );
};

export default SearchBar;
