import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { useState } from "react";
import { ChannelDetail, VideoDetail, SearchFeed } from "./components";
import { Navbar, Feed } from "./container";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000", minHeight: "100vh" }}>
        <Navbar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Feed
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
            }
          />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};
export default App;
